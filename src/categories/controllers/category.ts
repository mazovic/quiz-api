import { Request, Response } from 'express';
import { Exception, StatusCodes } from '../../utils';
import CategoryService from '../services/category';

const createCategory = async (req: Request, res: Response): Promise<void> => {
	if (!req.body) {
		throw new Exception(StatusCodes.BAD_REQUEST, 'No body provided');
	}

	const category = req.body;

	const data = await CategoryService.createCategory(category);
	res.status(StatusCodes.CREATED).json(data);
};

const listAllCategories = async (req: Request, res: Response): Promise<void> => {
	const data = await CategoryService.listAllCategories();

	res.status(StatusCodes.OK).json(data);
};

const listAllSubCategories = async (req: Request, res: Response): Promise<void> => {
	const data = await CategoryService.listAllSubCategories();
	res.status(StatusCodes.OK).json(data);
};

const listAllSubCategoriesByCategoryId = async (req: Request, res: Response): Promise<void> => {
	const data = await CategoryService.listAllSubCategoriesByCategoryId(+req.params.id);
	res.status(StatusCodes.OK).json(data);
};

const getSubCategoryById = async (req: Request, res: Response): Promise<void> => {
	const data = await CategoryService.getSubCategoryById(+req.params.id);
	res.status(StatusCodes.OK).json(data);
};

const createSubCategory = async (req: Request, res: Response): Promise<void> => {
	const data = await CategoryService.createSubCategory(req.body);
	res.status(StatusCodes.CREATED).json(data);
};

export default {
	createCategory,
	listAllCategories,
	listAllSubCategories,
	listAllSubCategoriesByCategoryId,
	getSubCategoryById,
	createSubCategory,
};
