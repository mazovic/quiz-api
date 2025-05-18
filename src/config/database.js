//This is Sequelize CLI configuration

require('dotenv').config();

module.exports = {
	development: {
		username: process.env.DB_USER || 'root',
		password: process.env.DB_PASSWORD || '',
		database: process.env.DB_NAME || 'database_dev',
		host: process.env.DB_HOST || '127.0.0.1',
		dialect: 'mysql',
		port: parseInt(process.env.DB_PORT || '3306', 10),
	},
	test: {
		username: process.env.DB_USER || 'root',
		password: process.env.DB_PASSWORD || '',
		database: process.env.DB_USER || 'database_test',
		host: process.env.DB_HOST || '127.0.0.1',
		dialect: 'mysql',
		port: parseInt(process.env.DB_PORT || '3306', 10),
	},
	production: {
		username: process.env.DB_USER || 'root',
		password: process.env.DB_PASSWORD || '',
		database: process.env.DB_NAME || 'database_prod',
		host: process.env.DB_HOST || '127.0.0.1',
		dialect: 'mysql',
		port: parseInt(process.env.DB_PORT || '3306', 10),
	},
};
