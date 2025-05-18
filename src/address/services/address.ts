import { Address } from '../models/Address';

import { ResI } from '../../types/res';
import { CreateAddressI, UpdateAddressI } from '../types/address';
import { Exception, StatusCodes } from '../../utils';

class AddressService {
	static async createAddress(addressData: CreateAddressI, userId: number): Promise<ResI> {
		const address = await Address.createAddress(addressData, userId);
		return { msg: 'OK', data: address };
	}

	static async getAllUserAddresses(userId: number): Promise<ResI> {
		const addresses = await Address.getAllUserAddresses(userId);
		return { msg: 'OK', data: addresses };
	}

	static async getAddressById(id: number): Promise<ResI> {
		const address = await Address.getAddressById(id);

		if (!address) {
			throw new Exception(StatusCodes.NOT_FOUND, 'Address not found');
		}

		return { msg: 'OK', data: address };
	}

	static async updateAddress(id: number, addressData: UpdateAddressI): Promise<ResI> {
		const existingAddress = await Address.getAddressById(id);

		if (!existingAddress) {
			throw new Exception(StatusCodes.NOT_FOUND, 'Address not found');
		}

		const address = await Address.updateAddress(existingAddress, addressData);

		return { msg: 'OK', data: address };
	}

	static async deleteAddress(id: number): Promise<void> {
		const address = await Address.getAddressById(id);

		if (!address) {
			throw new Exception(StatusCodes.NOT_FOUND, 'Address not found');
		}

		if (address.is_default) {
			throw new Exception(
				StatusCodes.FORBIDDEN,
				'Cannot delete default address. Please set another address as default first.'
			);
		}

		await Address.deleteAddress(id);
	}

	static async getDefaultAddress(userId: number): Promise<ResI> {
		const address = await Address.getDefaultAddress(userId);

		if (!address) {
			throw new Exception(StatusCodes.NOT_FOUND, 'Default address not found');
		}

		return { msg: 'OK', data: address };
	}

	static async updateDefaultAddress(id: number, userId: number): Promise<ResI> {
		const defaultAddress = await Address.getDefaultAddress(userId);

		if (!defaultAddress) {
			throw new Exception(StatusCodes.NOT_FOUND, 'Default address not found');
		}

		const newDefaultAddress = await Address.getAddressById(id);

		if (!newDefaultAddress) {
			throw new Exception(StatusCodes.NOT_FOUND, 'Address not found');
		}

		if (defaultAddress.id === newDefaultAddress.id) {
			throw new Exception(
				StatusCodes.BAD_REQUEST,
				'Cannot set the same address as default. The selected address is already set as default.'
			);
		}

		const address = await Address.updateDefaultAddress(defaultAddress, newDefaultAddress);

		return { msg: 'OK', data: address };
	}
}

export default AddressService;
