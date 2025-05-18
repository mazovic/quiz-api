import jwt, { JwtPayload, SignOptions } from 'jsonwebtoken';
import { UserI } from '../user/types/user';
import dotenv from 'dotenv';
import { Exception } from './exception';
import { StatusCodes } from './statusCodes';
import { Tokens } from '../authentication/types/service';
import { v4 as uuidv4 } from 'uuid';
import { parseExpiryToSeconds } from './moment';

dotenv.config();

export interface RefreshTokenPayload extends JwtPayload {
	id: number;
	jti: string;
}

export interface AccessTokenPayload extends JwtPayload {
	user: UserI;
	jti: string;
}

export const generateAccessToken = (user: UserI): { token: string; expirationSeconds: number; jti: string } => {
	const secret = process.env.ACCESS_TOKEN_SECRET;

	if (!secret) {
		throw new Exception(StatusCodes.SERVICE_UNAVAILABLE, 'ACCESS_TOKEN_SECRET must be defined');
	}

	const expiryValue = (process.env.ACCESS_TOKEN_EXPIRY || '1h') as jwt.SignOptions['expiresIn'];

	const options: SignOptions = {
		expiresIn: expiryValue,
	};

	const jti = uuidv4();
	const token = jwt.sign({ user, jti }, secret, options);
	const expirationSeconds = parseExpiryToSeconds(expiryValue as string);

	return { token, expirationSeconds, jti };
};

export const generateRefreshToken = (id: number): { token: string; expirationSeconds: number; jti: string } => {
	const secret = process.env.REFRESH_TOKEN_SECRET;

	if (!secret) {
		throw new Exception(StatusCodes.INTERNAL_SERVER_ERROR, 'REFRESH_TOKEN_SECRET must be defined');
	}

	const expiryValue = (process.env.REFRESH_TOKEN_EXPIRY || '7d') as jwt.SignOptions['expiresIn'];

	const options: SignOptions = {
		expiresIn: expiryValue,
	};

	const jti = uuidv4();
	const token = jwt.sign({ id, jti }, secret, options);
	const expirationSeconds = parseExpiryToSeconds(expiryValue as string);

	return { token, expirationSeconds, jti };
};

export const generateTokens = (user: UserI): Tokens => {
	const access = generateAccessToken(user);
	const refresh = generateRefreshToken(user.id);

	return {
		accessToken: access.token,
		refreshToken: refresh.token,
		accessTokenExpirationSeconds: access.expirationSeconds,
		refreshTokenExpirationSeconds: refresh.expirationSeconds,
		accessTokenJti: access.jti,
		refreshTokenJti: refresh.jti,
	};
};

export const verifyAccessToken = (token: string): AccessTokenPayload | null => {
	try {
		const secret = process.env.ACCESS_TOKEN_SECRET;

		if (!secret) {
			throw new Exception(StatusCodes.SERVICE_UNAVAILABLE, 'ACCESS_TOKEN_SECRET must be defined');
		}

		const decoded = jwt.verify(token, secret) as AccessTokenPayload;
		return decoded;
	} catch {
		return null;
	}
};

export const verifyRefreshToken = (token: string): RefreshTokenPayload | null => {
	try {
		const secret = process.env.REFRESH_TOKEN_SECRET;

		if (!secret) {
			throw new Exception(StatusCodes.SERVICE_UNAVAILABLE, 'REFRESH_TOKEN_SECRET must be defined');
		}

		const decoded = jwt.verify(token, secret) as RefreshTokenPayload;

		return decoded;
	} catch {
		return null;
	}
};
