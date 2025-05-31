import express, { Router, Request, Response } from 'express';
import authenticationRouter from '../authentication/routers/mainRouter';
import userRouter from '../user/routers/mainRouter';
import addressRouter from '../address/routers/mainRouter';
import categoryRouter from '../categories/routers/mainRouter';
import { logger } from '../utils/logger';
import { seedQuestions } from '../seeder';

const mainRouter: Router = express.Router();

mainRouter.use('/auth', authenticationRouter);

mainRouter.use('/user', userRouter);

mainRouter.use('/address', addressRouter);

mainRouter.use('/categories', categoryRouter);

mainRouter.post('/seed', async (req: Request, res: Response) => {
	try {
		await seedQuestions();
		res.status(200).json({ status: 'ok' });
	} catch (error) {
		logger.error('Error seeding questions:', error);
		res.status(500).json({ status: 'error', message: 'Failed to seed questions' });
	}
});

export default mainRouter;
