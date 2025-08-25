import express, { Router } from 'express';
import authenticationRouter from '../authentication/routers/mainRouter';
import userRouter from '../user/routers/mainRouter';
import addressRouter from '../address/routers/mainRouter';
import categoryRouter from '../categories/routers/mainRouter';
import questionRouter from '../question/routers/mainRouter';
import resourceRouter from '../resources/routers/router';
import resultRouter from '../results/routers/mainRouter';

const mainRouter: Router = express.Router();

mainRouter.use('/auth', authenticationRouter);

mainRouter.use('/user', userRouter);

mainRouter.use('/address', addressRouter);

mainRouter.use('/categories', categoryRouter);

mainRouter.use('/questions', questionRouter);

mainRouter.use('/resources', resourceRouter);

mainRouter.use('/results', resultRouter);

export default mainRouter;
