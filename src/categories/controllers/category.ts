import { Request, Response } from 'express';
import { Exception, StatusCodes } from '../../utils';
import CategoryService from '../services/category';
import Authentication from '../../authentication/services/authentication';

const createCategory = async (req: Request, res: Response): Promise<void> => {
	if (!req.body) {
		throw new Exception(StatusCodes.BAD_REQUEST, 'No body provided');
	}

	const category = req.body;

	const data = await CategoryService.createCategory(category);
	res.status(StatusCodes.CREATED).json(data);
};

const updateCategory = async (req: Request, res: Response): Promise<void> => {
	if (!req.body) {
		throw new Exception(StatusCodes.BAD_REQUEST, 'No body provided');
	}

	const name = req.body.name;

	const data = await CategoryService.updateCategory(+req.params.id, name);
	res.status(StatusCodes.CREATED).json(data);
};

const listAllCategories = async (req: Request, res: Response): Promise<void> => {
	const data = await CategoryService.listAllCategories();

	res.status(StatusCodes.OK).json(data);
};

const listAllSubCategories = async (req: Request, res: Response): Promise<void> => {
	const authHeader = req.headers.authorization;
	if (authHeader) {
		const decoded = await Authentication.verifyAccessToken(authHeader.split(' ')[1]);
		const id = decoded.data.user.id;
		const data = await CategoryService.listAllSubCategories(id);
		res.status(StatusCodes.OK).json(data);
	}

	const data = await CategoryService.listAllSubCategories();
	res.status(StatusCodes.OK).json(data);
};

const listAllSubCategoriesAdmin = async (req: Request, res: Response): Promise<void> => {
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

const updateSubCategory = async (req: Request, res: Response): Promise<void> => {
	if (!req.body) {
		throw new Exception(StatusCodes.BAD_REQUEST, 'No body provided');
	}

	const data = await CategoryService.updateSubCategory(+req.params.id, req.body);
	res.status(StatusCodes.CREATED).json(data);
};

const deleteCategory = async (req: Request, res: Response): Promise<void> => {
	const id = +req.params.id;
	await CategoryService.deleteCategory(id);
	res.status(StatusCodes.DELETED).end();
};

const deleteSubCategory = async (req: Request, res: Response): Promise<void> => {
	const id = +req.params.id;
	await CategoryService.deleteSubCategory(id);
	res.status(StatusCodes.DELETED).end();
};
export default {
	createCategory,
	listAllCategories,
	listAllSubCategories,
	listAllSubCategoriesByCategoryId,
	getSubCategoryById,
	createSubCategory,
	updateCategory,
	listAllSubCategoriesAdmin,
	updateSubCategory,
	deleteCategory,
	deleteSubCategory,
};
