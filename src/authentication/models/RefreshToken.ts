import { Table, Column, Model, DataType, CreatedAt, UpdatedAt, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from '../../user/models/User';
import { DeviceInfo } from '../types/deviceInfo';

@Table({
	tableName: 'refresh_tokens',
	timestamps: true,
	underscored: true,
})
export class RefreshTokens extends Model {
	@Column({
		type: DataType.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	})
	id!: number;

	@Column({
		type: DataType.CHAR(36),
		allowNull: false,
	})
	jti!: string;

	@ForeignKey(() => User)
	@Column({
		type: DataType.INTEGER,
		allowNull: false,
	})
	user_id!: number;

	@BelongsTo(() => User, { foreignKey: 'user_id', as: 'user' })
	user!: User;

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	device_info!: string;

	@Column({
		type: DataType.DATE,
		allowNull: false,
	})
	issued_at!: Date;

	@Column({
		type: DataType.DATE,
		allowNull: false,
	})
	expires_at!: Date;

	@Column({
		type: DataType.BOOLEAN,
		allowNull: false,
		defaultValue: false,
	})
	is_revoked!: boolean;

	@CreatedAt
	createdAt!: Date;

	@UpdatedAt
	updatedAt!: Date;

	static async createToken(
		jti: string,
		userId: number,
		deviceInfo: DeviceInfo,
		expiresAt: Date
	): Promise<RefreshTokens> {
		return await RefreshTokens.create({
			jti,
			user_id: userId,
			device_info: JSON.stringify(deviceInfo),
			issued_at: new Date(),
			expires_at: expiresAt,
			is_revoked: false,
		});
	}

	//Could revoke one token on jti or all user session on userId
	static async revoke(options: { jti?: string; userId?: number }): Promise<number> {
		const { jti, userId } = options;

		const whereClause: any = { is_revoked: false };

		if (jti) {
			whereClause.jti = jti;
		} else if (userId) {
			whereClause.user_id = userId;
		} else {
			return 0;
		}

		const [affectedCount] = await RefreshTokens.update({ is_revoked: true }, { where: whereClause });

		return affectedCount;
	}
}
