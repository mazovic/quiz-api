import express, { Router } from 'express';
import privateRouter from './router';
import publicRouter from './publicRouter';
import controller from '../../authentication/controllers/authentication';
import { catchAsync } from '../../utils';
import authorization from '../../middleware/authorization';

const mainRouter: Router = express.Router();

mainRouter.use('/public', publicRouter);

//This is for logged-in users
mainRouter.use(catchAsync(controller.accessTokenVerifier));
mainRouter.use(authorization.isAdminOrEditor);
mainRouter.use('/', privateRouter);

export default mainRouter;
