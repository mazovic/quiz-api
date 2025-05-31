import { Category } from '../models/Category';
import { ResI } from '../../types/res';
import { Exception, StatusCodes } from '../../utils';
import { SubCategory } from '../models/SubCategory';

class CategoryService {
	static async listAllCategories(): Promise<ResI> {
		const categories = await Category.getAllCategories();
		return { msg: 'OK', data: categories };
	}

	static async listAllSubCategories(): Promise<ResI> {
		const subCategories = await SubCategory.getAllSubCategories();
		return { msg: 'OK', data: subCategories };
	}

	static async listAllSubCategoriesByCategoryId(categoryId: number): Promise<ResI> {
		const subCategories = await SubCategory.getAllSubCategoriesByCategoryId(categoryId);
		return { msg: 'OK', data: subCategories };
	}

	static async getSubCategoryById(subCategory_id: number): Promise<ResI> {
		const subCategory = await SubCategory.getSubCategoryById(subCategory_id);

		if (!subCategory) {
			throw new Exception(StatusCodes.NOT_FOUND, 'SubCategory not found');
		}

		return { msg: 'OK', data: subCategory };
	}

	static async createCategory(category: Partial<Category>): Promise<ResI> {
		const newCategory = await Category.createCategory(category);
		return { msg: 'OK', data: newCategory };
	}

	static async createSubCategory(subCategory: Partial<SubCategory>): Promise<ResI> {
		const newSubCategory = await SubCategory.createSubCategory(subCategory);
		return { msg: 'OK', data: newSubCategory };
	}
}

export default CategoryService;
