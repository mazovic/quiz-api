import { Request, Response } from 'express';
import { Exception, StatusCodes } from '../../utils';
import QuestionService from '../services/question';

const createQuestion = async (req: Request, res: Response): Promise<void> => {
	if (!req.body) {
		throw new Exception(StatusCodes.BAD_REQUEST, 'No body provided');
	}

	const data = await QuestionService.createQuestion(req.body);

	res.status(StatusCodes.CREATED).json(data);
};

const listAllQuestions = async (req: Request, res: Response): Promise<void> => {
	const subCategoryId = req.query.subCategoryId as string;
	const questionCount = req.query.questionCount as string;

	if (!subCategoryId || !questionCount) {
		throw new Exception(StatusCodes.BAD_REQUEST, 'Sub category ID and question count are required');
	}

	const data = await QuestionService.listAllQuestions(+subCategoryId, +questionCount);

	res.status(StatusCodes.OK).json(data);
};

const getQuestionById = async (req: Request, res: Response): Promise<void> => {
	const id = +req.params.id;
	const data = await QuestionService.getQuestionById(id);

	res.status(StatusCodes.OK).json(data);
};

const updateQuestion = async (req: Request, res: Response): Promise<void> => {
	if (!req.body) {
		throw new Exception(StatusCodes.BAD_REQUEST, 'No body provided');
	}

	const id = +req.params.id;

	const data = await QuestionService.updateQuestion(id, req.body);
	res.status(StatusCodes.OK).json(data);
};

const deleteQuestion = async (req: Request, res: Response): Promise<void> => {
	const id = +req.params.id;
	await QuestionService.deleteQuestion(id);
	res.status(StatusCodes.DELETED).end();
};

export default {
	createQuestion,
	listAllQuestions,
	getQuestionById,
	updateQuestion,
	deleteQuestion,
};
