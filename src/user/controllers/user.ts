import { Request, Response } from 'express';
import UserService from '../services/user';
import { Exception, StatusCodes } from '../../utils';

const listAllUsers = async (req: Request, res: Response): Promise<void> => {
	const page = parseInt((req.query.page as string) || '1', 10);
	const limit = parseInt((req.query.limit as string) || '10', 10);
	const searchText = (req.query.searchText as string) || '';
	const data = await UserService.listAllUsers(page, limit, searchText);
	res.status(StatusCodes.OK).json(data);
};

const getUserById = async (req: Request, res: Response): Promise<void> => {
	const id = +req.params.id;
	const data = await UserService.getUserById(id);
	res.status(StatusCodes.OK).json(data);
};

const banUser = async (req: Request, res: Response): Promise<void> => {
	const id = +req.params.id;
	const data = await UserService.banUser(id);
	res.status(StatusCodes.OK).json(data);
};

const unbanUser = async (req: Request, res: Response): Promise<void> => {
	const id = +req.params.id;
	const data = await UserService.unbanUser(id);
	res.status(StatusCodes.OK).json(data);
};

const forceResetPassword = async (req: Request, res: Response): Promise<void> => {
	const id = +req.params.id;
	const data = await UserService.forceResetPassword(id);
	res.status(StatusCodes.OK).json(data);
};

const updateUserRole = async (req: Request, res: Response): Promise<void> => {
	if (!req.body) {
		throw new Exception(StatusCodes.BAD_REQUEST, 'No body provided');
	}

	const id = +req.params.id;
	const data = await UserService.updateUserRole(id, req.body.role);
	res.status(StatusCodes.OK).json(data);
};

const deleteUser = async (req: Request, res: Response): Promise<void> => {
	const id = +req.params.id;
	await UserService.deleteUser(id);
	res.status(StatusCodes.DELETED).end();
};

export default {
	listAllUsers,
	banUser,
	unbanUser,
	forceResetPassword,
	getUserById,
	updateUserRole,
	deleteUser,
};
