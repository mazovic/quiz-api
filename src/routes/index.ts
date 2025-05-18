import { Router, Request, Response } from 'express';
import { logger } from '../utils/logger';

const router = Router();

router.get('/health', (req: Request, res: Response) => {
	logger.info('Health check endpoint called');
	res.status(200).json({ status: 'ok' });
});

export default router;
