import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import expressWinston from 'express-winston';
import { logger } from './utils/logger';
import { errorHandler } from './middleware/errorHandler';
import routes from './routes';
import mainRouter from './routes/mainRouter';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './config/swagger';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const allowedOrigins = process.env.CORS_ORIGINS?.split(',') || [];

// Common middleware
app.use(helmet());
app.use(
	cors({
		origin: (origin, callback) => {
			// allow requests with no origin like mobile apps or curl
			if (!origin || allowedOrigins.includes(origin)) {
				return callback(null, true);
			}
			return callback(new Error('Not allowed by CORS'));
		},
		credentials: true,
	})
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// HTTP request logging middleware
app.use(
	expressWinston.logger({
		winstonInstance: logger,
		meta: true,
		msg: 'HTTP {{req.method}} {{req.url}}',
		expressFormat: true,
		colorize: process.env.NODE_ENV !== 'production',
		ignoreRoute: (req: Request, _res: Response) => {
			return req.url.includes('/health');
		},
	})
);
app.use('/', mainRouter);
// Swagger docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// API routes
app.use('/api', routes);

// 404 handler
app.use((req: Request, res: Response, next: NextFunction) => {
	const error: any = new Error(`Not Found - ${req.originalUrl}`);
	error.statusCode = 404;
	error.isOperational = true;
	next(error);
});

// Global error handler
app.use(errorHandler);

export default app;
