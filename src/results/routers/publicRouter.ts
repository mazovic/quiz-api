import express, { Router } from 'express';
import { catchAsync } from '../../utils';
import controller from '../controllers/result';

const router: Router = express.Router();

router.post('/', catchAsync(controller.createResult));

router.get('/', catchAsync(controller.listAllResults));

router.get('/:id', catchAsync(controller.getResultById));

router.put('/:id', catchAsync(controller.updateResult));

router.delete('/:id', catchAsync(controller.deleteResult));

export default router;
