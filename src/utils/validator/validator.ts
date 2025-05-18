import Joi, { Schema } from 'joi';
import { Exception, StatusCodes } from '../index';
import { Request, Response, NextFunction } from 'express';

type ValidatorInput = {
	type: 'body' | 'query' | 'params';
	schema: Record<string, Schema>; // Use Joi.Schema here
};

/**
 * Middleware generator for validating request parts (body, query, params).
 *
 * @param schemas {Array<{ type: 'body' | 'query' | 'params', schema: Record<string, Joi.Schema> }>}
 */
const generator = (...schemas: ValidatorInput[]) => {
	return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			// Validate each schema concurrently
			await Promise.all(
				schemas.map(({ type, schema }) => {
					const joiSchema = Joi.object(schema);
					return joiSchema.validateAsync(req[type]);
				})
			);
			next(); // only called after all validations pass
		} catch (error: any) {
			// Explicitly type the error
			next(
				new Exception(
					StatusCodes.VALIDATION_ERROR,
					`${error.message} in ${error._original && typeof error._original === 'object' ? JSON.stringify(error._original) : 'unknown source'}`,
					{ isJoi: true }
				)
			);
		}
	};
};

export default { generator };
