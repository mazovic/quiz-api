import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Category } from './Category';
import { Op } from 'sequelize';
import { UserLevel } from '../../user/models/User';

@Table({
	tableName: 'subcategories',
	timestamps: false,
	underscored: false,
})
export class SubCategory extends Model {
	@Column({
		type: DataType.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	})
	id!: number;

	@ForeignKey(() => Category)
	@Column({
		type: DataType.INTEGER,
		allowNull: false,
	})
	category_id!: number;

	@Column({
		type: DataType.STRING(100),
		allowNull: false,
	})
	name!: string;

	@BelongsTo(() => Category)
	category!: Category;

	static async getSubCategoryById(id: number): Promise<SubCategory | null> {
		return await SubCategory.findByPk(id);
	}

	static async getAllSubCategories(userLevel?: UserLevel): Promise<SubCategory[]> {
		const levels = [];
		if (userLevel === UserLevel.BEGINNER) {
			levels.push(UserLevel.BEGINNER);
		} else if (userLevel === UserLevel.INTERMEDIATE) {
			levels.push(UserLevel.BEGINNER, UserLevel.INTERMEDIATE);
		} else if (userLevel === UserLevel.ADVANCED) {
			levels.push(UserLevel.BEGINNER, UserLevel.INTERMEDIATE, UserLevel.ADVANCED);
		} else {
			levels.push(UserLevel.BEGINNER, UserLevel.INTERMEDIATE, UserLevel.ADVANCED);
		}
		return await SubCategory.findAll({
			include: [{ model: Category, attributes: ['name'] }],
			where: { name: { [Op.in]: [...levels] } },
		});
	}

	static async getAllSubCategoriesByCategoryId(categoryId: number): Promise<SubCategory[]> {
		return await SubCategory.findAll({
			where: { category_id: categoryId },
			include: [{ model: Category, attributes: ['name'] }],
		});
	}

	static async createSubCategory(subCategory: Partial<SubCategory>): Promise<SubCategory> {
		return await SubCategory.create(subCategory);
	}

	static async updateSubCategory(
		subCategory: SubCategory,
		subCategoryData: Partial<SubCategory>
	): Promise<SubCategory> {
		return await subCategory.update(subCategoryData);
	}

	static async deleteSubCategory(subCategory: SubCategory): Promise<void> {
		await subCategory.destroy();
	}
}
