import { Request, Response, NextFunction, RequestHandler } from 'express';

/**
 * Wrap a single async Express middleware or route handler to catch errors.
 *
 * @param fn - The async middleware or route handler function
 * @returns A standard Express middleware with error handling
 *
 * @example
 * import express from 'express';
 * import { catchAsync } from './utils/catchAsync';
 *
 * const app = express();
 *
 * app.get('/users', catchAsync(async (req, res) => {
 *   const users = await User.find();
 *   res.json(users);
 * }));
 */
export const catchAsync = (fn: (req: Request, res: Response, next: NextFunction) => Promise<any>): RequestHandler => {
	return (req, res, next) => {
		Promise.resolve(fn(req, res, next)).catch(next);
	};
};

/**
 * Wrap multiple async middlewares or route handlers at once.
 *
 * @param fns - An array of async middleware functions
 * @returns An array of Express middlewares with error handling
 *
 * @example
 * import express from 'express';
 * import { wrapAll } from './utils/catchAsync';
 *
 * const app = express();
 *
 * app.post('/upload',
 *   ...wrapAll(
 *     async (req, res, next) => {
 *       await validateUpload(req);
 *       next();
 *     },
 *     async (req, res) => {
 *       const result = await handleUpload(req);
 *       res.json(result);
 *     }
 *   )
 * );
 */
export const wrapAll = (
	...fns: ((req: Request, res: Response, next: NextFunction) => Promise<any>)[]
): RequestHandler[] => {
	return fns.map((fn) => (req, res, next) => {
		Promise.resolve(fn(req, res, next)).catch(next);
	});
};
