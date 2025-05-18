import { Request, Response } from 'express';
import { Exception, StatusCodes } from '../../utils';
import { CreateAddressI, UpdateAddressI } from '../types/address';
import AddressService from '../services/address';

const createAddress = async (req: Request, res: Response): Promise<void> => {
	if (!req.body) {
		throw new Exception(StatusCodes.BAD_REQUEST, 'No body provided');
	}

	const addressData: CreateAddressI = req.body;
	const data = await AddressService.createAddress(addressData, req.user.id);
	res.status(StatusCodes.CREATED).json(data);
};

const getAllUserAddresses = async (req: Request, res: Response): Promise<void> => {
	const data = await AddressService.getAllUserAddresses(req.user.id);
	res.status(StatusCodes.OK).json(data);
};

const getAddressById = async (req: Request, res: Response): Promise<void> => {
	const id = +req.params.id;
	const data = await AddressService.getAddressById(id);
	res.status(StatusCodes.OK).json(data);
};

const updateAddress = async (req: Request, res: Response): Promise<void> => {
	if (!req.body) {
		throw new Exception(StatusCodes.BAD_REQUEST, 'No body provided');
	}

	const addressData: UpdateAddressI = req.body;
	const id = +req.params.id;
	const data = await AddressService.updateAddress(id, addressData);
	res.status(StatusCodes.OK).json(data);
};

const deleteAddress = async (req: Request, res: Response): Promise<void> => {
	const id = +req.params.id;
	await AddressService.deleteAddress(id);
	res.status(StatusCodes.DELETED).end();
};

const getDefaultAddress = async (req: Request, res: Response): Promise<void> => {
	const data = await AddressService.getDefaultAddress(req.user.id);
	res.status(StatusCodes.OK).json(data);
};

const updateDefaultAddress = async (req: Request, res: Response): Promise<void> => {
	const id = +req.params.id;
	const data = await AddressService.updateDefaultAddress(id, req.user.id);
	res.status(StatusCodes.OK).json(data);
};

export default {
	createAddress,
	getAllUserAddresses,
	getAddressById,
	updateAddress,
	deleteAddress,
	getDefaultAddress,
	updateDefaultAddress,
};
