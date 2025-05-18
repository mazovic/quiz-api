import swaggerJSDoc from 'swagger-jsdoc';
import dotenv from 'dotenv';
import authPaths from '../authentication/swagger/authentication';
import addressPaths from '../address/swagger/address';

dotenv.config();

const PORT = process.env.PORT || 3050;
const DEVELOPMENT = process.env.BASE_URL_DEVELOPMENT || 'https://dev-api-admin.ossloop.com';
const STAGING = process.env.BASE_URL_STAGING || 'https://staging-api-admin.ossloop.com';
const PRODUCTION = process.env.BASE_URL_PRODUCTION || 'https://api-admin.ossloop.com';

const swaggerDefinition = {
	openapi: '3.0.0',
	info: {
		title: 'Ossloop API',
		version: '1.0.0',
		description: 'API Documentation for Ossloop Project',
		contact: {
			name: 'API Support',
			email: 'support@yourapi.com',
		},
	},
	servers: [
		{
			url: `http://localhost:${PORT}`,
			description: 'Local server',
		},
		{
			url: DEVELOPMENT,
			description: 'Development Server',
		},
		{
			url: STAGING,
			description: 'Staging Server',
		},
		{
			url: PRODUCTION,
			description: 'Production Server',
		},
	],
	components: {
		securitySchemes: {
			bearerAuth: {
				type: 'http',
				scheme: 'bearer',
				bearerFormat: 'JWT',
			},
		},
	},
	security: [
		{
			bearerAuth: [],
		},
	],
	paths: {
		...authPaths,
		...addressPaths,
		// Add other API path modules here as needed
		// ...userPaths,
		// ...productPaths,
	},
};

const options = {
	swaggerDefinition,
	apis: [],
};

export const swaggerSpec = swaggerJSDoc(options);
