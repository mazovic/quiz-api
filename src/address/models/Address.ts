import { Table, Column, Model, DataType, CreatedAt, UpdatedAt, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from '../../user/models/User';
import { CreateAddressI, UpdateAddressI } from '../types/address';

@Table({
	tableName: 'addresses',
	timestamps: true,
	underscored: true,
})
export class Address extends Model {
	@Column({
		type: DataType.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	})
	id!: number;

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	address_line1!: string;

	@Column({
		type: DataType.STRING,
		allowNull: true,
	})
	address_line2?: string;

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	city!: string;

	@Column({
		type: DataType.STRING,
		allowNull: true,
	})
	state?: string;

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	country!: string;

	@Column({
		type: DataType.STRING(10),
		allowNull: true,
	})
	postal_code?: string;

	@Column({
		type: DataType.STRING,
		allowNull: true,
	})
	nearby_landmark?: string;

	@Column({
		type: DataType.BOOLEAN,
		allowNull: false,
		defaultValue: false,
	})
	is_default!: boolean;

	@ForeignKey(() => User)
	@Column({
		type: DataType.INTEGER,
		allowNull: false,
	})
	user_id!: number;

	@BelongsTo(() => User, { foreignKey: 'user_id', as: 'user' })
	user!: User;

	@CreatedAt
	createdAt!: Date;

	@UpdatedAt
	updatedAt!: Date;

	static async createAddress(data: CreateAddressI, userId: number): Promise<Address> {
		const addressCount = await Address.count({ where: { user_id: userId } });

		return await Address.create({
			address_line1: data.address_line1,
			address_line2: data.address_line2,
			city: data.city,
			state: data.state,
			country: data.country,
			postal_code: data.postal_code,
			nearby_landmark: data.nearby_landmark,
			user_id: userId,
			is_default: addressCount === 0,
		});
	}

	static async getAllUserAddresses(userId: number): Promise<Address[]> {
		return await Address.findAll({ where: { user_id: userId } });
	}

	static async getAddressById(id: number): Promise<Address | null> {
		return await Address.findByPk(id);
	}

	static async updateAddress(address: Address, data: UpdateAddressI): Promise<Address> {
		return await address.update(data);
	}

	static async deleteAddress(id: number): Promise<void> {
		await Address.destroy({
			where: {
				id: id,
			},
		});
	}

	static async getDefaultAddress(userId: number): Promise<Address | null> {
		return await Address.findOne({
			where: { user_id: userId, is_default: true },
		});
	}

	static async updateDefaultAddress(defaultAddress: Address, newDefaultAddress: Address): Promise<Address | null> {
		const transaction = await Address.sequelize!.transaction();

		try {
			await defaultAddress.update({ is_default: false }, { transaction });

			await newDefaultAddress.update({ is_default: true }, { transaction });

			await transaction.commit();

			return newDefaultAddress;
		} catch (error) {
			await transaction.rollback();
			throw error;
		}
	}
}
