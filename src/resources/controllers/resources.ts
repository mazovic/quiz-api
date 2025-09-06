import { Request, Response } from 'express';
import { Exception, StatusCodes } from '../../utils';
import ResourceService from '../services/resources';
import { ResourceLevel } from '../models/Resouces';

const listResourcesByLevel = async (req: Request, res: Response): Promise<void> => {
	const resourceLevel = req.params.resourceLevel as ResourceLevel;
	const resources = await ResourceService.listResourcesByLevel(resourceLevel);
	res.status(StatusCodes.OK).json(resources);
};

const listResources = async (req: Request, res: Response): Promise<void> => {
	const resources = await ResourceService.listResources();
	res.status(StatusCodes.OK).json(resources);
};

const createResource = async (req: Request, res: Response): Promise<void> => {
	if (!req.body) {
		throw new Exception(StatusCodes.BAD_REQUEST, 'No body provided');
	}

	const data = await ResourceService.createResource(req.body);

	res.status(StatusCodes.CREATED).json(data);
};

const updateResource = async (req: Request, res: Response): Promise<void> => {
	if (!req.body) {
		throw new Exception(StatusCodes.BAD_REQUEST, 'No body provided');
	}

	const id = +req.params.id;

	const data = await ResourceService.updateResource(id, req.body);
	res.status(StatusCodes.OK).json(data);
};

const deleteResource = async (req: Request, res: Response): Promise<void> => {
	const id = +req.params.id;
	await ResourceService.deleteResource(id);
	res.status(StatusCodes.DELETED).end();
};

export default {
	listResourcesByLevel,
	listResources,
	createResource,
	updateResource,
	deleteResource,
};
