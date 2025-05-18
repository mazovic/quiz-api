import winston from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const LOG_DIR = 'logs';
const IS_DEV = process.env.NODE_ENV === 'development';

if (!fs.existsSync(LOG_DIR)) {
	fs.mkdirSync(LOG_DIR);
}

const includeOnly = (level: string): winston.Logform.Format =>
	winston.format((info) => (info.level === level ? info : false))();

const ossloopLevels = {
	levels: {
		error: 0,
		info: 1,
		http: 2,
		db: 3,
		db_error: 4,
		db_slow: 5,
	},
	colors: {
		error: 'red',
		info: 'green',
		http: 'yellow',
		db: 'blue',
		db_error: 'red',
		db_slow: 'yellow',
	},
};

const baseFormat = winston.format.combine(winston.format.timestamp(), winston.format.splat());

// Per-level formats
const jsonFormat = (levelFilter: string): winston.Logform.Format =>
	winston.format.combine(baseFormat, includeOnly(levelFilter), winston.format.json());

const logger = winston.createLogger({
	levels: ossloopLevels.levels,
	transports: [
		new winston.transports.Console({
			format: IS_DEV
				? winston.format.combine(winston.format.colorize(), winston.format.simple())
				: jsonFormat('info'),
			silent: !IS_DEV,
		}),

		new DailyRotateFile({
			filename: path.join(LOG_DIR, 'info-%DATE%.json'),
			datePattern: 'YYYY-MM-DD',
			maxFiles: '7d',
			zippedArchive: true,
			level: 'info',
			format: jsonFormat('info'),
		}),
		new DailyRotateFile({
			filename: path.join(LOG_DIR, 'errors-%DATE%.json'),
			datePattern: 'YYYY-MM-DD',
			maxFiles: '7d',
			zippedArchive: true,
			level: 'error',
			format: jsonFormat('error'),
			handleRejections: true,
			handleExceptions: true,
		}),
		new DailyRotateFile({
			filename: path.join(LOG_DIR, 'db-%DATE%.json'),
			datePattern: 'YYYY-MM-DD',
			maxFiles: '7d',
			zippedArchive: true,
			level: 'db',
			format: jsonFormat('db'),
		}),
		new DailyRotateFile({
			filename: path.join(LOG_DIR, 'db_errors-%DATE%.json'),
			datePattern: 'YYYY-MM-DD',
			maxFiles: '7d',
			zippedArchive: true,
			level: 'db_error',
			format: jsonFormat('db_error'),
		}),
		new DailyRotateFile({
			filename: path.join(LOG_DIR, 'db_slow-%DATE%.json'),
			datePattern: 'YYYY-MM-DD',
			maxFiles: '7d',
			zippedArchive: true,
			level: 'db_slow',
			format: jsonFormat('db_slow'),
		}),
	],
});

winston.addColors(ossloopLevels.colors);

export { logger };
