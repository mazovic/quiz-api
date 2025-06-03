import express, { Router } from 'express';
import privateRouter from './router';
import publicRouter from './publicRouter';
// import authController from '../../authentication/controllers/authentication';
// import { catchAsync } from '../../utils';

const mainRouter: Router = express.Router();

mainRouter.use('/public', publicRouter);

mainRouter.use('/', privateRouter);

export default mainRouter;
