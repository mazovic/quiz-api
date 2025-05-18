import { Table, Column, Model, DataType, CreatedAt, UpdatedAt } from 'sequelize-typescript';

@Table({
	tableName: 'revoked_tokens',
	timestamps: true,
	underscored: true,
})
export class RevokedToken extends Model {
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
	jti!: string;

	@CreatedAt
	createdAt!: Date;

	@UpdatedAt
	updatedAt!: Date;

	static async addJti(jti: string): Promise<void> {
		await RevokedToken.create({ jti });
	}

	static async getJti(jti: string): Promise<RevokedToken | null> {
		return await RevokedToken.findOne({ where: { jti } });
	}
}
