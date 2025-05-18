import app from './index';
import { logger } from './utils/logger';
import dotenv from 'dotenv';
import sequelize from './db';

dotenv.config();

const PORT = process.env.PORT || 3050;

const startServer = async (): Promise<void> => {
	try {
		// Verify database connection
		await sequelize.authenticate();
		logger.info('Database connection has been established successfully.');

		// Sync models with database (use with caution in production)
		// For production, use migrations instead
		if (process.env.NODE_ENV !== 'production') {
			await sequelize.sync({ alter: false });
			logger.info('Database synchronized');
		}

		const server = app.listen(PORT, () => {
			logger.info(`Server running on port ${PORT}`);
			logger.info(`Swagger Documentation is available at http://localhost:${PORT}/api-docs`);
		});

		process.on('unhandledRejection', (err: Error) => {
			logger.error('UNHANDLED REJECTION! Shutting down...', err);
			console.error(err);

			server.close(() => {
				process.exit(1);
			});
		});
	} catch (error) {
		logger.error('Unable to connect to the database:', error);
		process.exit(1);
	}
};

process.on('uncaughtException', (err: Error) => {
	logger.error('UNCAUGHT EXCEPTION! Shutting down...', err);
	console.error(err);

	process.exit(1);
});

startServer();
