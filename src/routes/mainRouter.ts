import express, { Router } from 'express';
import authenticationRouter from '../authentication/routers/mainRouter';
import userRouter from '../user/routers/mainRouter';
import addressRouter from '../address/routers/mainRouter';

const mainRouter: Router = express.Router();

mainRouter.use('/auth', authenticationRouter);

mainRouter.use('/user', userRouter);

mainRouter.use('/address', addressRouter);

export default mainRouter;
