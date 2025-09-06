import express, { Router } from 'express';
import controller from '../controllers/question';
import { catchAsync } from '../../utils';
// import validator from '../validators/question';

const router: Router = express.Router();

router.get('/', catchAsync(controller.listAllQuestionsAdmin));
router.post('/', catchAsync(controller.createQuestion));
router.put('/:id', catchAsync(controller.updateQuestion));
router.delete('/:id', catchAsync(controller.deleteQuestion));

export default router;
