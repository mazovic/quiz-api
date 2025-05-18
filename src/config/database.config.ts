import { Dialect } from 'sequelize';
import { logger } from '../utils/logger';

interface DbConfig {
	username: string;
	password: string;
	database: string;
	host: string;
	dialect: Dialect;
	port: number;
	logging: boolean | ((sql: string, timing?: number) => void);
}

interface Config {
	development: DbConfig;
	test: DbConfig;
	production: DbConfig;
}

const config: Config = {
	development: {
		username: process.env.DB_USER || 'root',
		password: process.env.DB_PASSWORD || '',
		database: process.env.DB_NAME || 'database_dev',
		host: process.env.DB_HOST || '127.0.0.1',
		dialect: 'mysql',
		port: parseInt(process.env.DB_PORT || '3306', 10),
		logging: (sql, timing) => {
			logger.log('db', { message: sql, timing });
		},
	},
	test: {
		username: process.env.DB_USER || 'root',
		password: process.env.DB_PASSWORD || '',
		database: process.env.DB_NAME || 'database_test',
		host: process.env.DB_HOST || '127.0.0.1',
		dialect: 'mysql',
		port: parseInt(process.env.DB_PORT || '3306', 10),
		logging: false,
	},
	production: {
		username: process.env.DB_USER || 'root',
		password: process.env.DB_PASSWORD || '',
		database: process.env.DB_NAME || 'database_prod',
		host: process.env.DB_HOST || '127.0.0.1',
		dialect: 'mysql',
		port: parseInt(process.env.DB_PORT || '3306', 10),
		logging: (sql, timing) => {
			logger.log('db', { message: sql, timing });
		},
	},
};

export default config;
