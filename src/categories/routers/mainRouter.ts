import express, { Router } from 'express';
import privateRouter from './router';
import publicRouter from './publicRouter';
import authController from '../../authentication/controllers/authentication';
import { catchAsync } from '../../utils';

const mainRouter: Router = express.Router();

mainRouter.use('/public', publicRouter);

//This is for logged-in and admin or editor users
mainRouter.use(catchAsync(authController.accessTokenVerifier));
// mainRouter.use(authorization.isAdminOrEditor);
mainRouter.use('/', privateRouter);

export default mainRouter;
