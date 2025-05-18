import express, { Router } from 'express';
import controller from '../controllers/address';
import { catchAsync } from '../../utils';
import validator from '../validators/address';

const router: Router = express.Router();

router.post('/', validator.createAddress, catchAsync(controller.createAddress));
router.get('/', catchAsync(controller.getAllUserAddresses));
router.get('/default', catchAsync(controller.getDefaultAddress));
router.patch('/:id/default', validator.validateParamId, catchAsync(controller.updateDefaultAddress));
router.get('/:id', validator.validateParamId, catchAsync(controller.getAddressById));
router.put('/:id', validator.updateAddress, catchAsync(controller.updateAddress));
router.delete('/:id', validator.validateParamId, catchAsync(controller.deleteAddress));

export default router;
