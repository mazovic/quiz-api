import express, { Router } from 'express';
import privateRouter from './router';
import publicRouter from './publicRouter';
//import controller from './controllers/authentication.ts';
// import { catchAsync } from '../../utils';

const mainRouter: Router = express.Router();

mainRouter.use('/public', publicRouter);

//This is for logged-in users
//mainRouter.use(catchAsync(controller.accessTokenVerifier));
mainRouter.use('/', privateRouter);

export default mainRouter;
