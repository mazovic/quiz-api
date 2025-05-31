import { Difficulty, Question } from '../models/Question';
import { ResI } from '../../types/res';
import { Exception, StatusCodes } from '../../utils';

class QuestionService {
	static async listAllQuestions(subCategoryId: number, questionCount: number, difficulty: Difficulty): Promise<ResI> {
		const questions = await Question.getAllQuestions(subCategoryId, questionCount, difficulty);
		return { msg: 'OK', data: questions };
	}

	static async getQuestionById(id: number): Promise<ResI> {
		const question = await Question.getQuestionById(id);

		if (!question) {
			throw new Exception(StatusCodes.NOT_FOUND, 'Question not found');
		}

		return { msg: 'OK', data: question };
	}

	static async createQuestion(question: Partial<Question>): Promise<ResI> {
		const newQuestion = await Question.createQuestion(question);

		return { msg: 'OK', data: newQuestion };
	}

	static async updateQuestion(id: number, questionData: Partial<Question>): Promise<ResI> {
		const question = await Question.getQuestionById(id);

		if (!question) {
			throw new Exception(StatusCodes.NOT_FOUND, 'Question not found');
		}

		const updatedQuestion = await Question.updateQuestion(question, questionData);
		return { msg: 'OK', data: updatedQuestion };
	}

	static async deleteQuestion(id: number): Promise<void> {
		const question = await Question.getQuestionById(id);

		if (!question) {
			throw new Exception(StatusCodes.NOT_FOUND, 'Question not found');
		}

		await Question.deleteQuestion(question);
	}

	static async getLevelingQuestions(): Promise<ResI> {
		const questions = await Question.getLevelingQuestions();
		return { msg: 'OK', data: questions };
	}
}

export default QuestionService;
