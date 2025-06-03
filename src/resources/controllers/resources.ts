import { Request, Response } from 'express';
import { StatusCodes } from '../../utils';
import ResourceService from '../services/resources';

const listResources = async (req: Request, res: Response): Promise<void> => {
	const { resourceType, resourceLevel } = req.body;
	const resources = await ResourceService.listResources(resourceType, resourceLevel);
	res.status(StatusCodes.OK).json(resources);
};

export default {
	listResources,
};
