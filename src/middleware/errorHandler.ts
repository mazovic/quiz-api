import { Request, Response, NextFunction } from 'express';
import { logger } from '../utils/logger';
import dotenv from 'dotenv';
import { StatusCodes } from '../utils';

dotenv.config();

interface CustomError extends Error {
	httpStatusCode?: number;
	isAxiosError?: boolean;
	response?: {
		data?: {
			message?: string;
		};
	};
	errno?: number;
	sqlMessage?: string;
	code?: string;
	stack?: string;
	msg?: string;
	statusCode?: number;
	status?: string;
	isOperational?: boolean;
	isJoi?: boolean;
}

export function errorHandler(err: CustomError, req: Request, res: Response, _next: NextFunction): void {
	let httpStatusCode: number =
		typeof err === 'number' ? err : err.httpStatusCode || StatusCodes.INTERNAL_SERVER_ERROR;
	let msg: string | object | undefined = err.message || undefined;

	if (err.isAxiosError === true && err.response?.data?.message === 'city not found') {
		msg = 'Unable to find location. Try another search.';
		httpStatusCode = StatusCodes.BAD_REQUEST;
	}

	switch (err.errno) {
		case 1451:
			msg = 'Cannot delete, data used elsewhere';
			httpStatusCode = StatusCodes.BAD_REQUEST;
			break;
		case 1452:
			msg = 'Cannot add or update non existing child data';
			httpStatusCode = StatusCodes.BAD_REQUEST;
			break;
		case 1062:
			msg = err.sqlMessage;
			httpStatusCode = StatusCodes.DUPLICATED_ENTRY;
			break;
	}

	if (err.code === 'LIMIT_FILE_SIZE') {
		msg = 'Max upload limit exceeded';
		httpStatusCode = StatusCodes.BAD_REQUEST;
	}

	if (typeof err.message === 'string' && err.message.startsWith('Empty .update() call detected!')) {
		msg = 'Empty or wrong body data';
		httpStatusCode = StatusCodes.BAD_REQUEST;
	}
	if (!err.isJoi)
		logger.error(`${err.statusCode} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`, {
			stack: err.stack,
			body: req.body,
			params: req.params,
		});

	if (!res.headersSent) {
		try {
			msg = typeof msg === 'string' ? JSON.parse(msg) : msg;
		} catch {
			// msg stays as-is
		}

		if (process.env.NODE_ENV === 'development') {
			res.status(httpStatusCode).json({
				status: err.status,
				error: err,
				message: msg,
				stack: err.stack,
			});
		} else {
			if (httpStatusCode === StatusCodes.INTERNAL_SERVER_ERROR || msg === undefined) res.status(httpStatusCode);
			else
				res.status(httpStatusCode).json({
					status: err.status,
					message: err.isOperational ? msg : 'Something went wrong',
				});
		}
	}
}
