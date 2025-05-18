import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Role } from './Role';
import { Currency, PreferredLanguage, ProfileStatus } from '../enums/user.enums';
import { CreateUserI } from '../types/createUser';

@Table({
	tableName: 'users',
	timestamps: true,
	paranoid: true,
	underscored: true,
})
export class User extends Model {
	@Column({
		type: DataType.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	})
	id!: number;

	@Column({
		type: DataType.STRING(255),
		allowNull: false,
	})
	firstname!: string;

	@Column({
		type: DataType.STRING(255),
		allowNull: false,
	})
	lastname!: string;

	@Column({
		type: DataType.STRING(255),
		allowNull: false,
		unique: true,
		validate: {
			isEmail: true,
		},
	})
	email!: string;

	@Column({
		type: DataType.STRING(255),
		allowNull: false,
	})
	password_hash!: string;

	@Column({
		type: DataType.STRING(100),
		allowNull: true,
	})
	salt!: string | null;

	@ForeignKey(() => Role)
	@Column({
		type: DataType.INTEGER,
		allowNull: false,
	})
	role_id!: number;

	@BelongsTo(() => Role, { foreignKey: 'role_id', as: 'role' })
	role!: Role;

	@Column({
		type: DataType.ENUM(...Object.values(ProfileStatus)),
		allowNull: false,
		defaultValue: ProfileStatus.NORMAL,
	})
	profile_status!: ProfileStatus;

	@Column({
		type: DataType.STRING(20),
		allowNull: true,
	})
	phone_number!: string | null;

	@Column({
		type: DataType.BOOLEAN,
		allowNull: true,
		defaultValue: false,
	})
	is_verified!: boolean;

	@Column({
		type: DataType.STRING(100),
		allowNull: true,
	})
	password_recovery_code_hash!: string | null;

	@Column({
		type: DataType.DATE,
		allowNull: true,
	})
	password_recovery_code_expiry!: Date | null;

	@Column({
		type: DataType.ENUM(...Object.values(PreferredLanguage)),
		allowNull: false,
		defaultValue: PreferredLanguage.EN,
	})
	preferred_language!: PreferredLanguage;

	@Column({
		type: DataType.ENUM(...Object.values(Currency)),
		allowNull: false,
		defaultValue: Currency.USD,
	})
	preferred_currency!: Currency;

	@Column(DataType.DATE)
	createdAt!: Date;

	@Column(DataType.DATE)
	updatedAt!: Date;

	@Column({
		type: DataType.DATE,
		allowNull: true,
	})
	log_out_at?: Date;

	@Column({
		type: DataType.STRING,
		allowNull: true,
	})
	verification_token?: string;

	@Column({
		type: DataType.DATE,
		allowNull: true,
	})
	verification_token_expiry?: Date;

	static async getUserByEmail(email: string): Promise<User | null> {
		return await User.findOne({
			where: { email },
			include: [
				{
					model: Role,
					as: 'role',
					attributes: ['id', 'name'],
				},
			],
		});
	}

	static async getUserById(id: number): Promise<User | null> {
		return await User.findOne({
			where: { id },
			include: [
				{
					model: Role,
					as: 'role',
					attributes: ['id', 'name'],
				},
			],
		});
	}

	static async createUser(userData: CreateUserI): Promise<User> {
		const user = await User.create({
			firstname: userData.firstname,
			lastname: userData.lastname,
			email: userData.email.toLowerCase(),
			password_hash: userData.passwordHash,
			role_id: userData.roleId,
		});

		return user;
	}

	static async updateLogOutAt(user: User): Promise<void> {
		await user.update({
			log_out_at: new Date(),
		});
	}

	static async setVerificationCodeAndExpiry(
		userId: number,
		verificationCode: string,
		expiryTime: Date
	): Promise<void> {
		await User.update(
			{
				verification_token: verificationCode,
				verification_token_expiry: expiryTime,
			},
			{
				where: { id: userId },
			}
		);
	}

	static async verifyUser(user: User): Promise<void> {
		await user.update({
			verification_token_expiry: null,
			verification_token: null,
			is_verified: true,
		});
	}

	static async setPasswordRecoveryAndExpiry(
		user: User,
		passwordRecoveryCodeHash: string,
		expiryTime: Date
	): Promise<void> {
		await user.update({
			password_recovery_code_hash: passwordRecoveryCodeHash,
			password_recovery_code_expiry: expiryTime,
		});
	}

	static async changePassword(user: User, newPasswordHash: string): Promise<void> {
		await user.update({
			password_recovery_code_hash: null,
			password_recovery_code_expiry: null,
			password_hash: newPasswordHash,
		});
	}
}
