import { Result } from '../models/Results';
import { ResI } from '../../types/res';
import { Exception, StatusCodes } from '../../utils';

class ResultService {
	static async listAllResults(): Promise<ResI> {
		const results = await Result.listResults();
		return { msg: 'OK', data: results };
	}

	static async getResultById(id: number): Promise<ResI> {
		const result = await Result.getResultById(id);

		if (!result) {
			throw new Exception(StatusCodes.NOT_FOUND, 'Result not found');
		}

		return { msg: 'OK', data: result };
	}

	static async createResult(result: Partial<Result>): Promise<ResI> {
		const newResult = await Result.createResult(result);

		return { msg: 'OK', data: newResult };
	}

	static async updateResult(id: number, score: number): Promise<ResI> {
		const result = await Result.getResultById(id);

		if (!result) {
			throw new Exception(StatusCodes.NOT_FOUND, 'Result not found');
		}

		const updatedResult = await Result.updateResult(id, { score });
		return { msg: 'OK', data: updatedResult };
	}

	static async deleteResult(id: number): Promise<void> {
		const result = await Result.getResultById(id);

		if (!result) {
			throw new Exception(StatusCodes.NOT_FOUND, 'Result not found');
		}

		await Result.deleteResult(id);
	}
}

export default ResultService;
