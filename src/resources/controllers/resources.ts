import { Request, Response } from 'express';
import { StatusCodes } from '../../utils';
import ResourceService from '../services/resources';
import { ResourceLevel } from '../models/Resouces';

const listResources = async (req: Request, res: Response): Promise<void> => {
	const resourceLevel = req.params.resourceLevel as ResourceLevel;
	const resources = await ResourceService.listResources(resourceLevel);
	res.status(StatusCodes.OK).json(resources);
};

export default {
	listResources,
};
