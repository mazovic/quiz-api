import { NextFunction, Request, Response } from 'express';
import AuthenticationService from '../services/authentication';
import { Exception, StatusCodes } from '../../utils';
import useragent from 'useragent';
import { DeviceInfo } from '../types/deviceInfo';

const signUp = async (req: Request, res: Response): Promise<void> => {
	const userData = req.body;
	const agent = useragent.parse(req.headers['user-agent']);
	const deviceInfo: DeviceInfo = {
		family: agent.family,
		os: agent.os.toString(),
		device: agent.device.toString(),
	};
	const data = await AuthenticationService.signUp(userData, deviceInfo);
	res.status(StatusCodes.CREATED).json(data);
};

const signIn = async (req: Request, res: Response): Promise<void> => {
	const userData = req.body;
	const agent = useragent.parse(req.headers['user-agent']);
	const deviceInfo: DeviceInfo = {
		family: agent.family,
		os: agent.os.toString(),
		device: agent.device.toString(),
	};
	const data = await AuthenticationService.signIn(userData, deviceInfo);
	res.status(StatusCodes.OK).json(data);
};

const logOut = async (req: Request, res: Response): Promise<void> => {
	const refreshToken = req.body.refreshToken;
	const jti = req.jti;
	const data = await AuthenticationService.logOut(jti, refreshToken);
	res.status(StatusCodes.OK).json(data);
};

const logOutAll = async (req: Request, res: Response): Promise<void> => {
	const id = req.user.id;
	const jti = req.jti;
	const data = await AuthenticationService.logOutAll(id, jti);
	res.status(StatusCodes.OK).json(data);
};

const authMe = async (req: Request, res: Response): Promise<void> => {
	const data = req.user;

	res.status(StatusCodes.OK).json(data);
};

const accessTokenVerifier = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	const authHeader = req.headers.authorization;

	if (!(authHeader && authHeader.startsWith('Bearer '))) {
		throw new Exception(StatusCodes.UNAUTHORIZED);
	}
	const data = await AuthenticationService.verifyAccessToken(authHeader.split(' ')[1]);

	req.user = data.data.user;
	req.jti = data.data.jti;

	console.log(req.user);

	next();
};

const refreshToken = async (req: Request, res: Response): Promise<void> => {
	const token = req.body.refreshToken;
	const agent = useragent.parse(req.headers['user-agent']);
	const deviceInfo: DeviceInfo = {
		family: agent.family,
		os: agent.os.toString(),
		device: agent.device.toString(),
	};
	const data = await AuthenticationService.refreshToken(token, deviceInfo);
	res.status(StatusCodes.OK).json(data);
};

const sendVerificationCode = async (req: Request, res: Response): Promise<void> => {
	const user = req.user;
	const data = await AuthenticationService.sendVerificationCode(user);
	res.status(StatusCodes.OK).json(data);
};

const verifyEmail = async (req: Request, res: Response): Promise<void> => {
	const user = req.user;
	const verificationCode = String(req.body.verificationCode);
	const data = await AuthenticationService.verifyEmail(user.id, verificationCode);
	res.status(StatusCodes.OK).json(data);
};

const requestResetPassword = async (req: Request, res: Response): Promise<void> => {
	const email = req.body.email;
	const data = await AuthenticationService.requestResetPassword(email);
	res.status(StatusCodes.OK).json(data);
};

const resetPassword = async (req: Request, res: Response): Promise<void> => {
	const { email, newPassword } = req.body;
	const recoveryCode = String(req.body.recoveryCode);
	const data = await AuthenticationService.resetPassword(email, newPassword, recoveryCode);
	res.status(StatusCodes.OK).json(data);
};

export default {
	signUp,
	signIn,
	authMe,
	accessTokenVerifier,
	logOut,
	refreshToken,
	sendVerificationCode,
	verifyEmail,
	requestResetPassword,
	resetPassword,
	logOutAll,
};
