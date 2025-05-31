import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
	tableName: 'categories',
	timestamps: false,
	underscored: false,
})
export class Category extends Model {
	@Column({
		type: DataType.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	})
	id!: number;

	@Column({
		type: DataType.STRING(100),
		allowNull: false,
	})
	name!: string;

	@Column({
		type: DataType.TEXT,
		allowNull: true,
	})
	description?: string;

	static async getAllCategories(): Promise<Category[]> {
		return await Category.findAll();
	}

	static async createCategory(category: Partial<Category>): Promise<Category> {
		return await Category.create(category);
	}
}
