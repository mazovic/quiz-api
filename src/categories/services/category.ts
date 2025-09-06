import { Category } from '../models/Category';
import { ResI } from '../../types/res';
import { Exception, StatusCodes } from '../../utils';
import { SubCategory } from '../models/SubCategory';
import { User } from '../../user/models/User';

class CategoryService {
	static async listAllCategories(): Promise<ResI> {
		const categories = await Category.getAllCategories();
		return { msg: 'OK', data: categories };
	}

	static async listAllSubCategories(userId?: number): Promise<ResI> {
		let user: User | null = null;
		if (userId) {
			user = await User.getUserById(userId);
			if (!user) {
				throw new Exception(StatusCodes.NOT_FOUND, 'User not found');
			}
		}

		const subCategories = await SubCategory.getAllSubCategories(user?.level);
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

	static async updateCategory(id: number, name: string): Promise<ResI> {
		const cat = await Category.getCatById(id);
		if (!cat) {
			throw new Exception(StatusCodes.NOT_FOUND, 'User not found');
		}

		const newCat = await Category.updateName(cat, name);

		return {
			msg: 'OK',
			data: newCat,
		};
	}

	static async updateSubCategory(id: number, body: Partial<SubCategory>): Promise<ResI> {
		const cat = await SubCategory.getSubCategoryById(id);
		if (!cat) {
			throw new Exception(StatusCodes.NOT_FOUND, 'User not found');
		}

		const newCat = await SubCategory.updateSubCategory(cat, body);

		return {
			msg: 'OK',
			data: newCat,
		};
	}

	static async createSubCategory(subCategory: Partial<SubCategory>): Promise<ResI> {
		const newSubCategory = await SubCategory.createSubCategory(subCategory);
		return { msg: 'OK', data: newSubCategory };
	}

	static async deleteCategory(id: number): Promise<void> {
		const cat = await Category.getCatById(id);

		if (!cat) {
			throw new Exception(StatusCodes.NOT_FOUND, 'Category not found');
		}

		await Category.deleteCategory(cat);
	}

	static async deleteSubCategory(id: number): Promise<void> {
		const cat = await SubCategory.getSubCategoryById(id);

		if (!cat) {
			throw new Exception(StatusCodes.NOT_FOUND, 'SubCategory not found');
		}

		await SubCategory.deleteSubCategory(cat);
	}
}

export default CategoryService;
