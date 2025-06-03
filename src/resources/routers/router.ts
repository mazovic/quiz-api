import express, { Router } from 'express';
import controller from '../controllers/resources';
import { catchAsync } from '../../utils';

const router: Router = express.Router();

router.get('/:resourceLevel', catchAsync(controller.listResources));

export default router;
