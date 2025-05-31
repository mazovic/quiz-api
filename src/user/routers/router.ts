import express, { Router } from 'express';
import controller from '../controllers/user';
import { catchAsync } from '../../utils';
import validator from '../validators/user';

const router: Router = express.Router();

router.get('/', validator.listAllUsers, catchAsync(controller.listAllUsers));

router.get('/:id', validator.idParams, catchAsync(controller.getUserById));

router.delete('/:id', validator.idParams, catchAsync(controller.deleteUser));

router.put('/:id/role', validator.idParams, validator.updateUserRole, catchAsync(controller.updateUserRole));

router.post('/:id/ban', validator.idParams, catchAsync(controller.banUser));

router.post('/:id/unban', validator.idParams, catchAsync(controller.unbanUser));

router.post('/:id/force-reset-password', validator.idParams, catchAsync(controller.forceResetPassword));

export default router;
