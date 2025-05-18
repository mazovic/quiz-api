import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
	tableName: 'roles',
	timestamps: false,
	underscored: true,
})
export class Role extends Model {
	@Column({
		type: DataType.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	})
	id!: number;

	@Column({
		type: DataType.STRING(50),
		allowNull: false,
	})
	name!: string;

	static async findRoleByName(name: string): Promise<Role | null> {
		return await Role.findOne({
			where: {
				name: name,
			},
		});
	}
}
