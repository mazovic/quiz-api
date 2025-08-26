import { Exception, StatusCodes } from '../../utils';
import { User, UserLevel } from '../models/User';
import { ResI } from '../../types/res';
import { ProfileStatus } from '../enums/user.enums';
// import moment from 'moment';
import { getUserPlain } from '../utils/getPlainUser';
import { Role } from '../models/Role';
import { Result } from '../../results/models/Results';
// import { EmailType, TriggeredBy } from '../../emailHistory/enums/emailHistory';

//You can import model here

class UserService {
	static async listAllUsers(page: number, limit: number, searchText: string): Promise<ResI> {
		const users = await User.listAllUsers(page, limit, searchText);

		const userPlain = users.map((user) => getUserPlain(user));

		return {
			msg: 'OK',
			data: userPlain,
		};
	}

	static async getUserById(id: number): Promise<ResI> {
		const user = await User.getUserById(id);

		if (!user) {
			throw new Exception(StatusCodes.NOT_FOUND, 'User not found');
		}

		const userPlain = getUserPlain(user);
		return {
			msg: 'OK',
			data: userPlain,
		};
	}

	static async getUserProfile(userId: number): Promise<ResI> {
		const allResults = await Result.listResults();
		const userResults = {
			globalRank:
				allResults.userScores
					.sort((a, b) => b.totalScore - a.totalScore)
					.findIndex((res) => res.userId === userId) + 1,

			...allResults.userScores.filter((res) => res.userId === userId)[0],

			userCategoriesScore: allResults.userSubcategoryScores.filter((res) => res.userId === userId),
		};

		return {
			msg: 'OK',
			data: userResults,
		};
	}

	static async banUser(id: number): Promise<ResI> {
		const user = await User.getUserById(id);

		if (!user) {
			throw new Exception(StatusCodes.NOT_FOUND, 'User not found');
		}

		if (user.profile_status === ProfileStatus.BANNED) {
			throw new Exception(StatusCodes.BAD_REQUEST, 'User is already banned');
		}

		await User.banUser(user);

		const userPlain = getUserPlain(user);
		return {
			msg: 'OK',
			data: userPlain,
		};
	}

	static async unbanUser(id: number): Promise<ResI> {
		const user = await User.getUserById(id);

		if (!user) {
			throw new Exception(StatusCodes.NOT_FOUND, 'User not found');
		}

		if (user.profile_status === ProfileStatus.NORMAL) {
			throw new Exception(StatusCodes.BAD_REQUEST, 'User is not banned');
		}

		const userPlain = getUserPlain(user);
		await User.unbanUser(user);
		return {
			msg: 'OK',
			data: userPlain,
		};
	}

	// static async forceResetPassword(id: number): Promise<ResI> {
	// 	const user = await User.getUserById(id);

	// 	if (!user) {
	// 		throw new Exception(StatusCodes.NOT_FOUND, 'User not found');
	// 	}

	// 	const passwordRecoveryCode = generateVerificationCode();

	// 	const emailSubject = 'Password Recovery';
	// 	const emailBody = `Your password recovery token is: ${passwordRecoveryCode}. This token will expire in 5 minutes.`;

	// 	const passwordRecoveryCodeHash = await hashPassword(passwordRecoveryCode, 6);
	// 	const expiryTime = moment().add(5, 'minutes').toDate();

	// 	await User.setPasswordRecoveryAndExpiry(user, passwordRecoveryCodeHash, expiryTime);

	// 	const data = await sendEmail({
	// 		recipientsAddresses: [{ name: `${user.firstname} ${user.lastname}`, email: user.email }],
	// 		htmlContent: emailBody,
	// 		subject: emailSubject,
	// 		ccAddresses: [],
	// 		emailType: EmailType.USER_ACCOUNT,
	// 		triggeredBy: TriggeredBy.ADMIN,
	// 		triggerInfo: { user_email: user.email },
	// 	});

	// 	if (!data) {
	// 		throw new Exception(StatusCodes.SERVICE_UNAVAILABLE);
	// 	}

	// 	await User.forceResetPassword(user);
	// 	const userPlain = getUserPlain(user);
	// 	return {
	// 		msg: 'OK',
	// 		data: userPlain,
	// 	};
	// }

	static async updateUserRole(id: number, roleName: string): Promise<ResI> {
		const user = await User.getUserById(id);
		if (!user) {
			throw new Exception(StatusCodes.NOT_FOUND, 'User not found');
		}

		const role = await Role.findRoleByName(roleName);

		if (!role) {
			throw new Exception(StatusCodes.BAD_REQUEST, 'Invalid role');
		}

		await User.updateUserRole(user, role.id);

		const updatedUser = await User.getUserById(id);
		const userPlain = getUserPlain(updatedUser!);

		return {
			msg: 'OK',
			data: userPlain,
		};
	}

	static async deleteUser(id: number): Promise<void> {
		const user = await User.getUserById(id);
		if (!user) {
			throw new Exception(StatusCodes.NOT_FOUND, 'User not found');
		}

		await User.deleteUser(user);
	}

	static async setUserLevel(id: number, level: UserLevel): Promise<ResI> {
		const user = await User.getUserById(id);
		if (!user) {
			throw new Exception(StatusCodes.NOT_FOUND, 'User not found');
		}

		await User.setUserLevel(user, level);

		const updatedUser = await User.getUserById(id);
		const userPlain = getUserPlain(updatedUser!);

		return {
			msg: 'OK',
			data: userPlain,
		};
	}
}

export default UserService;
