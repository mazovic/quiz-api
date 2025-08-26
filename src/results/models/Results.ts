import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from '../../user/models/User';
import { Category } from '../../categories/models/Category';
import { SubCategory } from '../../categories/models/SubCategory';

@Table({
	tableName: 'results',
	timestamps: true,
	underscored: true, // This will use snake_case for column names
	createdAt: 'created_at',
	updatedAt: 'updated_at',
})
export class Result extends Model {
	@Column({
		type: DataType.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	})
	id!: number;

	@ForeignKey(() => User)
	@Column({
		type: DataType.INTEGER,
		allowNull: false,
		field: 'user_id',
	})
	userId!: number;

	@ForeignKey(() => Category)
	@Column({
		type: DataType.INTEGER,
		allowNull: false,
		field: 'category_id',
	})
	categoryId!: number;

	// ✅ New subcategory_id foreign key
	@ForeignKey(() => SubCategory)
	@Column({
		type: DataType.INTEGER,
		allowNull: false, // Change to true if optional
		field: 'subcategory_id',
	})
	subcategoryId!: number;

	@Column({
		type: DataType.INTEGER,
		allowNull: false,
	})
	score!: number;

	@Column({
		type: DataType.DATE,
		field: 'created_at',
		defaultValue: DataType.NOW,
	})
	createdAt!: Date;

	@Column({
		type: DataType.DATE,
		field: 'updated_at',
		defaultValue: DataType.NOW,
	})
	updatedAt!: Date;

	// Associations
	@BelongsTo(() => User)
	user!: User;

	@BelongsTo(() => Category)
	category!: Category;

	// ✅ New association for Subcategory
	@BelongsTo(() => SubCategory)
	subcategory!: SubCategory;
	static async getResultById(id: number): Promise<Result | null> {
		return await Result.findByPk(id, {
			include: [User, Category, SubCategory],
		});
	}

	static async createResult(resultData: Partial<Result>): Promise<Result> {
		return await Result.create(resultData);
	}

	static async updateResult(
		id: number,
		resultData: Partial<{
			score: number;
		}>
	): Promise<[number, Result[]]> {
		return await Result.update(resultData, {
			where: { id },
			returning: true,
		});
	}

	static async deleteResult(id: number): Promise<number> {
		return await Result.destroy({
			where: { id },
		});
	}

	static async listResults(): Promise<{
		userScores: Array<{
			userId: number;
			firstName: string;
			lastName: string;
			email: string;
			totalScore: number;
			quizCount: number;
		}>;
		userSubcategoryScores: Array<{
			userId: number;
			firstName: string;
			lastName: string;
			email: string;
			categoryId: number;
			categoryName: string;
			subcategoryId: number;
			subcategoryName: string;
			subcategoryScore: number;
			quizzesTaken: number;
		}>;
	}> {
		const sequelize = this.sequelize!;

		// Query 1: Get total score and quiz count for each user
		const userScoresQuery = `
			SELECT 
				u.id as "userId",
				u.firstname as "firstName",
				u.lastname as "lastName",
				u.email as email,
				u.created_at as joinedDate,
				COALESCE(SUM(r.score), 0) as "totalScore",
				COUNT(r.id) as "quizCount"
			FROM users u
			LEFT JOIN results r ON u.id = r.user_id
			GROUP BY u.id, u.firstname, u.lastname
			ORDER BY "totalScore" DESC
		`;

		// Query 2: Get sum of results for each user per subcategory
		const userSubcategoryScoresQuery = `
			SELECT 
				u.id AS "userId",
				u.firstname AS "firstName",
				u.lastname AS "lastName",
				u.email AS email,
				c.id AS "categoryId",
				c.name AS "categoryName",
				sc.id AS "subcategoryId",
				sc.name AS "subcategoryName",
				SUM(r.score) AS "subcategoryScore",
				COUNT(DISTINCT r.id) AS "quizzesTaken"
			FROM results r
			INNER JOIN users u ON r.user_id = u.id
			INNER JOIN categories c ON r.category_id = c.id
			INNER JOIN subcategories sc ON r.subcategory_id = sc.id
			GROUP BY u.id, u.firstname, u.lastname, u.email, c.id, c.name, sc.id, sc.name
			ORDER BY u.id, c.id, sc.id
		`;

		const [userScores, userSubcategoryScores] = await Promise.all([
			sequelize.query(userScoresQuery, {
				type: 'SELECT',
				raw: true,
			}),
			sequelize.query(userSubcategoryScoresQuery, {
				type: 'SELECT',
				raw: true,
			}),
		]);

		return {
			userScores: userScores.map((row: any) => ({
				userId: row.userId,
				firstName: row.firstName,
				lastName: row.lastName,
				email: row.email,
				totalScore: parseInt(row.totalScore) || 0,
				quizCount: parseInt(row.quizCount) || 0,
				joinedDate: row.joinedDate,
			})),
			userSubcategoryScores: userSubcategoryScores.map((row: any) => ({
				userId: row.userId,
				firstName: row.firstName,
				lastName: row.lastName,
				email: row.email,
				categoryId: row.categoryId,
				categoryName: row.categoryName,
				subcategoryId: row.subcategoryId,
				subcategoryName: row.subcategoryName,
				subcategoryScore: parseInt(row.subcategoryScore) || 0,
				quizzesTaken: parseInt(row.quizzesTaken) || 0,
			})),
		};
	}
}
