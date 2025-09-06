import express, { Router } from 'express';
import controller from '../controllers/resources';
import { catchAsync } from '../../utils';

const router: Router = express.Router();

router.post('/', catchAsync(controller.createResource));
router.put('/:id', catchAsync(controller.updateResource));
router.delete('/:id', catchAsync(controller.deleteResource));

export default router;
