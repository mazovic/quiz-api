import express, { Router } from 'express';
import controller from '../controllers/user';
import { catchAsync } from '../../utils';
// import validator from '../validators/user';

const router: Router = express.Router();

router.get('/', catchAsync(controller.listAllUsers));

router.get('/:id', catchAsync(controller.getUserById));

router.delete('/:id', catchAsync(controller.deleteUser));

router.put('/:id/role', catchAsync(controller.updateUserRole));

router.post('/:id/ban', catchAsync(controller.banUser));

router.post('/:id/unban', catchAsync(controller.unbanUser));

// router.post('/:id/force-reset-password', catchAsync(controller.forceResetPassword));

export default router;
