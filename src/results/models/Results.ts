import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from '../../user/models/User';
import { Category } from '../../categories/models/Category';

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

	static async getResultById(id: number): Promise<Result | null> {
		return await Result.findByPk(id, {
			include: [User, Category],
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
			totalScore: number;
			quizCount: number;
		}>;
		userCategoryScores: Array<{
			userId: number;
			firstName: string;
			lastName: string;
			categoryId: number;
			categoryName: string;
			categoryScore: number;
		}>;
	}> {
		const sequelize = this.sequelize!;

		// Query 1: Get total score and quiz count for each user
		const userScoresQuery = `
			SELECT 
				u.id as "userId",
				u.firstname as "firstName",
				u.lastname as "lastName",
				COALESCE(SUM(r.score), 0) as "totalScore",
				COUNT(r.id) as "quizCount"
			FROM users u
			LEFT JOIN results r ON u.id = r.user_id
			GROUP BY u.id, u.firstname, u.lastname
			ORDER BY "totalScore" DESC
		`;

		// Query 2: Get sum of results for each user per category
		const userCategoryScoresQuery = `
			SELECT 
				u.id as "userId",
				u.firstname as "firstName",
				u.lastname as "lastName",
				c.id as "categoryId",
				c.name as "categoryName",
				SUM(r.score) as "categoryScore"
			FROM results r
			INNER JOIN users u ON r.user_id = u.id
			INNER JOIN categories c ON r.category_id = c.id
			GROUP BY u.id, u.firstname, u.lastname, c.id, c.name
			ORDER BY u.id, c.id
		`;

		const [userScores, userCategoryScores] = await Promise.all([
			sequelize.query(userScoresQuery, {
				type: 'SELECT',
				raw: true,
			}),
			sequelize.query(userCategoryScoresQuery, {
				type: 'SELECT',
				raw: true,
			}),
		]);

		return {
			userScores: userScores.map((row: any) => ({
				userId: row.userId,
				firstName: row.firstName,
				lastName: row.lastName,
				totalScore: parseInt(row.totalScore) || 0,
				quizCount: parseInt(row.quizCount) || 0,
			})),
			userCategoryScores: userCategoryScores.map((row: any) => ({
				userId: row.userId,
				firstName: row.firstName,
				lastName: row.lastName,
				categoryId: row.categoryId,
				categoryName: row.categoryName,
				categoryScore: parseInt(row.categoryScore) || 0,
			})),
		};
	}
}
