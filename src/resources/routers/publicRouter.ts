import express, { Router } from 'express';
import controller from '../controllers/resources';
import { catchAsync } from '../../utils';

const router: Router = express.Router();

router.get('/', catchAsync(controller.listResources));

router.get('/:resourceLevel', catchAsync(controller.listResourcesByLevel));

export default router;
