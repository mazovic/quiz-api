import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { SubCategory } from './SubCategory';
import { Question } from '../../question/models/Question';

interface CategoryWithQuestionCount {
	id: number;
	name: string;
	description?: string;
	questionCount?: number;
}
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

	@HasMany(() => SubCategory)
	subCategories!: SubCategory[];

	static async getAllCategories(): Promise<CategoryWithQuestionCount[]> {
		const categories = await Category.findAll({
			include: [{ model: SubCategory, attributes: ['id'] }],
		});
		console.log(categories[0].subCategories[0].id);

		const categoriesWithQuestionCount: CategoryWithQuestionCount[] = await Promise.all(
			categories.map(async (category) => {
				const subCatIds = category.subCategories.map((subCategory) => subCategory.id);

				const questionCount = await Question.getCount(subCatIds);
				console.log(subCatIds, questionCount);

				return {
					id: category.id,
					name: category.name,
					description: category.description,
					questionCount,
				};
			})
		);

		return categoriesWithQuestionCount;
	}

	static async createCategory(category: Partial<Category>): Promise<Category> {
		return await Category.create(category);
	}
}
