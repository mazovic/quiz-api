import {
	compareDates,
	compareOldPasswords,
	Exception,
	generateTokens,
	generateVerificationCode,
	hashPassword,
	isStillValid,
	// sendEmail,
	StatusCodes,
	verifyAccessToken,
	verifyPassword,
	verifyRefreshToken,
	redisClient,
} from '../../utils';
import { SignUpReqI } from '../types/signUp';
import { User } from '../../user/models/User';
import { Role } from '../../user/models/Role';
import { Roles } from '../../user/enums/role.enums';
import { SignInReqI } from '../types/signIn';
import { UserI } from '../../user/types/user';
import moment from 'moment';
import { ServiceRes, Tokens } from '../types/service';
import { DeviceInfo } from '../types/deviceInfo';
import { RefreshTokens } from '../models/RefreshToken';

//You can import model here

class Authentication {
	static async signUp(userData: SignUpReqI, deviceInfo: DeviceInfo): Promise<ServiceRes> {
		//1-check if user exist
		const user = await User.getUserByEmail(userData.email);

		if (user) {
			throw new Exception(StatusCodes.DUPLICATED_ENTRY, 'User with this email already exists');
		}

		//2-get the default role ID
		const role = await Role.findRoleByName(Roles.User);

		if (!role) {
			throw new Exception(StatusCodes.INVALID_OPERATION);
		}

		//3-hash the password
		const passwordHash = await hashPassword(userData.password);

		//4-create user
		const newUser = await User.createUser({
			email: userData.email,
			firstname: userData.email,
			lastname: userData.lastname,
			passwordHash,
			roleId: role.id,
		});

		//5- remove sensitive data
		let userPlain = this.getUserPlain(newUser);

		//6- generate tokens
		const tokens = await this.generateTokensService(userPlain, deviceInfo);

		return {
			msg: 'OK',
			data: userPlain,
			token: { accessToken: tokens.accessToken, refreshToken: tokens.refreshToken },
		};
	}

	static async signIn(userData: SignInReqI, deviceInfo: DeviceInfo): Promise<ServiceRes> {
		const user = await User.getUserByEmail(userData.email);

		if (!user) {
			throw new Exception(StatusCodes.NOT_FOUND, 'User not found');
		}

		if (user.salt) {
			const comparison = await compareOldPasswords(userData.password, user.salt, user.password_hash);
			if (!comparison) {
				throw new Exception(StatusCodes.UNAUTHORIZED);
			}
		} else {
			const isMatch = await verifyPassword(userData.password, user.password_hash);

			if (!isMatch) {
				throw new Exception(StatusCodes.UNAUTHORIZED);
			}
		}

		const userPlain = this.getUserPlain(user);
		const tokens = await this.generateTokensService(userPlain, deviceInfo);

		return { msg: 'OK', token: { accessToken: tokens.accessToken, refreshToken: tokens.refreshToken } };
	}

	static async logOut(jti: string, refreshToken: string): Promise<ServiceRes> {
		await redisClient.del(jti);

		const decoded = verifyRefreshToken(refreshToken);

		if (!decoded) {
			throw new Exception(StatusCodes.UNAUTHORIZED, 'Refresh token UNAUTHORIZED');
		}

		const count = await RefreshTokens.revoke({ jti: decoded.jti });

		if (!count) {
			throw new Exception(StatusCodes.UNAUTHORIZED, 'Refresh token UNAUTHORIZED');
		}
		return { msg: 'Logout successful' };
	}

	static async logOutAll(id: number, accessTokenJti: string): Promise<ServiceRes> {
		const user = await User.getUserById(id);

		if (!user) {
			throw new Exception(StatusCodes.UNAUTHORIZED, 'UNAUTHORIZED');
		}

		await redisClient.del(accessTokenJti);

		const count = await RefreshTokens.revoke({ userId: id });

		if (!count) {
			throw new Exception(StatusCodes.UNAUTHORIZED, 'UNAUTHORIZED');
		}

		await User.updateLogOutAt(user);

		return { msg: `Logout successful from ${count} session` };
	}

	static async verifyAccessToken(token: string): Promise<ServiceRes> {
		const decoded = verifyAccessToken(token);

		if (!decoded) {
			throw new Exception(StatusCodes.UNAUTHORIZED, 'expiration time');
		}

		const tokenValue = await redisClient.get(decoded.jti);

		if (!tokenValue) {
			throw new Exception(StatusCodes.UNAUTHORIZED, 'User logged out ');
		}

		const userDecoded = decoded.user;

		const existingUser = await User.getUserById(userDecoded.id);
		if (!existingUser) {
			throw new Exception(StatusCodes.UNAUTHORIZED);
		}

		if (existingUser.log_out_at) {
			if (!userDecoded.log_out_at) {
				throw new Exception(StatusCodes.UNAUTHORIZED, 'User logged out');
			}

			if (compareDates(userDecoded.log_out_at, existingUser.log_out_at)) {
				throw new Exception(StatusCodes.UNAUTHORIZED, 'User logged out');
			}
		}

		return { msg: 'OK', data: decoded };
	}

	static getUserPlain(user: User): UserI {
		const userPlain = user.get({ plain: true });
		delete userPlain.password_hash;
		delete userPlain.salt;
		delete userPlain.refresh_token_hash;
		delete userPlain.password_recovery_code_hash;
		delete userPlain.password_recovery_code_expiry;
		delete userPlain.verification_token;
		delete userPlain.verification_token_expiry;

		return userPlain as UserI;
	}

	static async refreshToken(token: string, deviceInfo: DeviceInfo): Promise<ServiceRes> {
		const decoded = verifyRefreshToken(token);

		if (!decoded) {
			throw new Exception(StatusCodes.UNAUTHORIZED, 'UNAUTHORIZED');
		}

		const count = await RefreshTokens.revoke({ jti: decoded.jti });

		if (!count) {
			throw new Exception(StatusCodes.UNAUTHORIZED, 'UNAUTHORIZED');
		}

		const user = await User.getUserById(decoded.id);

		if (!user) {
			throw new Exception(StatusCodes.NOT_FOUND, 'User not exist');
		}

		let userPlain = this.getUserPlain(user);
		const newToken = await this.generateTokensService(userPlain, deviceInfo);

		return { msg: 'OK', token: { accessToken: newToken.accessToken, refreshToken: newToken.refreshToken } };
	}

	static async sendVerificationCode(user: UserI): Promise<ServiceRes> {
		const verificationCode = generateVerificationCode();
		const expiryTime = moment().add(5, 'minutes').toDate();

		// const emailSubject = 'Please verify your email';
		// const emailBody = `Enter the following code to verify your email: <strong>${verificationCode}</strong>`;

		await User.setVerificationCodeAndExpiry(user.id, verificationCode, expiryTime);

		// const data = await sendEmail(
		// 	[{ name: `${user.firstname} ${user.lastname}`, email: user.email }],
		// 	emailBody,
		// 	emailSubject
		// );

		// if (!data) {
		// 	throw new Exception(StatusCodes.SERVICE_UNAVAILABLE);
		// }

		return { msg: 'Verification code sent to email.' };
	}

	static async verifyEmail(id: number, verificationCode: string): Promise<ServiceRes> {
		const user = await User.getUserById(id);

		if (!user?.verification_token || !user.verification_token_expiry || user.is_verified) {
			throw new Exception(StatusCodes.CONFLICT, 'Verification token is missing or user is verified.');
		}

		if (!isStillValid(user.verification_token_expiry)) {
			throw new Exception(StatusCodes.GONE, 'Verification token has expired. Please request a new one.');
		}

		if (verificationCode !== user.verification_token) {
			throw new Exception(
				StatusCodes.BAD_REQUEST,
				'Invalid verification code. Please check the code and try again.'
			);
		}

		await User.verifyUser(user);

		return { msg: 'Email successfully verified.' };
	}

	static async requestResetPassword(email: string): Promise<ServiceRes> {
		const user = await User.getUserByEmail(email);

		if (!user) {
			throw new Exception(StatusCodes.NOT_FOUND, 'User not found');
		}

		const passwordRecoveryCode = generateVerificationCode();

		// const emailSubject = 'Password Recovery';
		// const emailBody = `Your password recovery token is: ${passwordRecoveryCode}. This token will expire in 5 minutes.`;

		const passwordRecoveryCodeHash = await hashPassword(passwordRecoveryCode, 6);
		const expiryTime = moment().add(5, 'minutes').toDate();

		await User.setPasswordRecoveryAndExpiry(user, passwordRecoveryCodeHash, expiryTime);

		// const data = await sendEmail(
		// 	[{ name: `${user.firstname} ${user.lastname}`, email: user.email }],
		// 	emailBody,
		// 	emailSubject
		// );

		// if (!data) {
		// 	throw new Exception(StatusCodes.SERVICE_UNAVAILABLE);
		// }

		return { msg: 'Password recovery token sent to email.' };
	}

	static async resetPassword(email: string, newPassword: string, recoveryCode: string): Promise<ServiceRes> {
		const user = await User.getUserByEmail(email);

		if (!user || !user.password_recovery_code_hash || !user.password_recovery_code_expiry) {
			throw new Exception(StatusCodes.NOT_FOUND, 'User not found');
		}

		if (!isStillValid(user.password_recovery_code_expiry)) {
			throw new Exception(StatusCodes.GONE, 'Recovery code has expired. Please request a new one.');
		}

		const isMatch = await verifyPassword(recoveryCode, user.password_recovery_code_hash);

		if (!isMatch) {
			throw new Exception(
				StatusCodes.BAD_REQUEST,
				'Invalid verification code. Please check the code and try again.'
			);
		}

		const newPasswordHash = await hashPassword(newPassword);

		await User.changePassword(user, newPasswordHash);

		return { msg: 'Password successfully changed.' };
	}

	static async generateTokensService(payload: UserI, deviceInfo: DeviceInfo): Promise<Tokens> {
		const tokens = generateTokens(payload);
		const expiresAt = new Date(Date.now() + tokens.refreshTokenExpirationSeconds * 1000);

		await RefreshTokens.createToken(tokens.refreshTokenJti, payload.id, deviceInfo, expiresAt);

		await redisClient.setex(tokens.accessTokenJti, tokens.accessTokenExpirationSeconds, 'valid');

		return tokens;
	}
}

export default Authentication;
