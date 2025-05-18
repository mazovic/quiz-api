import express, { Router } from 'express';
import controller from '../controllers/authentication';
import { catchAsync } from '../../utils';
import validator from '../validators/authentication';

const router: Router = express.Router();

router.post('/log-out', catchAsync(controller.logOut));
router.post('/log-out-all', catchAsync(controller.logOutAll));
router.get('/me', catchAsync(controller.authMe));
router.post('/send-verification-code', catchAsync(controller.sendVerificationCode));
router.post('/verify-email', validator.verifyEmail, catchAsync(controller.verifyEmail));

export default router;
