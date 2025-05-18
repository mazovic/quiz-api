import { Sequelize } from 'sequelize-typescript';
import config from '../config/database.config';
import { User } from '../user/models/User';
import { Role } from '../user/models/Role';
import { RevokedToken } from '../authentication/models/RevokedTokens';
import { Address } from '../address/models/Address';
import { RefreshTokens } from '../authentication/models/RefreshToken';

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env as keyof typeof config];

const sequelize = new Sequelize({
	database: dbConfig.database,
	username: dbConfig.username,
	password: dbConfig.password,
	host: dbConfig.host,
	port: dbConfig.port,
	dialect: dbConfig.dialect,
	logging: dbConfig.logging,
	models: [User, Role, RevokedToken, Address, RefreshTokens], // Register models here
	define: {
		underscored: true,
		timestamps: true,
	},
});

export default sequelize;
