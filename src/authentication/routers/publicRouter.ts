import express, { Router } from 'express';
import controller from '../controllers/authentication';
import validator from '../validators/authentication';
import { catchAsync } from '../../utils';

const router: Router = express.Router();

router.post('/sign-up', validator.signUp, catchAsync(controller.signUp));

router.post('/sign-in', validator.signIn, catchAsync(controller.signIn));

router.post('/refresh-token', validator.refreshToken, catchAsync(controller.refreshToken));

router.post('/request-password-reset', validator.requestResetPassword, catchAsync(controller.requestResetPassword));

router.post('/reset-password', validator.resetPassword, catchAsync(controller.resetPassword));

export default router;
