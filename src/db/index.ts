import { Sequelize } from 'sequelize-typescript';
import config from '../config/database.config';
import { User } from '../user/models/User';
import { Role } from '../user/models/Role';
import { Address } from '../address/models/Address';
import { RefreshTokens } from '../authentication/models/RefreshToken';
import { Category } from '../categories/models/Category';
import { SubCategory } from '../categories/models/SubCategory';
import { Question } from '../question/models/Question';
import { Resource } from '../resources/models/Resouces';

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
	models: [User, Role, Address, RefreshTokens, Category, SubCategory, Question, Resource], // Register models here
	define: {
		underscored: true,
		timestamps: true,
	},
});

export default sequelize;
