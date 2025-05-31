import express, { Router } from 'express';
import { catchAsync } from '../../utils';
import controller from '../controllers/question';

const router: Router = express.Router();

router.post('/', catchAsync(controller.createQuestion));

router.get('/', catchAsync(controller.listAllQuestions));

router.get('/:id', catchAsync(controller.getQuestionById));

router.put('/:id', catchAsync(controller.updateQuestion));

router.delete('/:id', catchAsync(controller.deleteQuestion));

export default router;
