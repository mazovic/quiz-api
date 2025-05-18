import { ResI } from '../../types/res';

export interface ServiceRes extends ResI {
	token?: {
		accessToken: string;
		refreshToken: string;
	};
}

export interface Tokens {
	accessToken: string;
	refreshToken: string;
	accessTokenExpirationSeconds: number;
	refreshTokenExpirationSeconds: number;
	accessTokenJti: string;
	refreshTokenJti: string;
}
