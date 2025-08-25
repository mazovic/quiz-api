import { Request, Response } from 'express';
import { Exception, StatusCodes } from '../../utils';
import ResultService from '../services/result';

const createResult = async (req: Request, res: Response): Promise<void> => {
	if (!req.body) {
		throw new Exception(StatusCodes.BAD_REQUEST, 'No body provided');
	}

	const data = await ResultService.createResult(req.body);

	res.status(StatusCodes.CREATED).json(data);
};

const listAllResults = async (req: Request, res: Response): Promise<void> => {
	const data = await ResultService.listAllResults();

	res.status(StatusCodes.OK).json(data);
};

const getResultById = async (req: Request, res: Response): Promise<void> => {
	const id = +req.params.id;
	const data = await ResultService.getResultById(id);

	res.status(StatusCodes.OK).json(data);
};

const updateResult = async (req: Request, res: Response): Promise<void> => {
	if (!req.body) {
		throw new Exception(StatusCodes.BAD_REQUEST, 'No body provided');
	}

	const id = +req.params.id;

	const data = await ResultService.updateResult(id, req.body);
	res.status(StatusCodes.OK).json(data);
};

const deleteResult = async (req: Request, res: Response): Promise<void> => {
	const id = +req.params.id;
	await ResultService.deleteResult(id);
	res.status(StatusCodes.DELETED).end();
};

export default {
	createResult,
	listAllResults,
	getResultById,
	updateResult,
	deleteResult,
};
