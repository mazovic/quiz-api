import express, { Router } from 'express';
import controller from '../controllers/category';
// import validator from '../validators/address';
import { catchAsync } from '../../utils';

const router: Router = express.Router();

router.post('/', catchAsync(controller.createCategory));

router.get('/', catchAsync(controller.listAllCategories));

router.get('/sub-categories', catchAsync(controller.listAllSubCategories));

router.post('/sub-categories', catchAsync(controller.createSubCategory));

router.get('/sub-categories/:id', catchAsync(controller.listAllSubCategoriesByCategoryId));

// router.get('/sub-categories/:id', catchAsync(controller.getSubCategoryById));

export default router;
