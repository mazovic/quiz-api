import express, { Router } from 'express';
import controller from '../controllers/category';
import { catchAsync } from '../../utils';

const router: Router = express.Router();

router.post('/', catchAsync(controller.createCategory));

router.get('/sub-categories', catchAsync(controller.listAllSubCategoriesAdmin));

router.get('/sub-categories/:id', catchAsync(controller.listAllSubCategoriesByCategoryId));
router.delete('/sub-categories/:id', catchAsync(controller.deleteSubCategory));

router.post('/sub-categories', catchAsync(controller.createSubCategory));

router.put('/sub-categories/:id', catchAsync(controller.updateSubCategory));

router.put('/:id', catchAsync(controller.updateCategory));
router.delete('/:id', catchAsync(controller.deleteCategory));

export default router;
