import { Table, Column, Model, DataType, ForeignKey, BelongsTo, Sequelize } from 'sequelize-typescript';
import { SubCategory } from '../../categories/models/SubCategory';
import { Op } from 'sequelize';

export enum Difficulty {
	EASY = 'easy',
	MEDIUM = 'medium',
	HARD = 'hard',
}

@Table({
	tableName: 'questions',
	timestamps: false,
	underscored: false,
})
export class Question extends Model {
	@Column({
		type: DataType.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	})
	id!: number;

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	question!: string;

	@Column({
		type: DataType.TEXT,
		allowNull: false,
		get() {
			const rawValue = this.getDataValue('options');
			return rawValue ? JSON.parse(rawValue) : [];
		},
		set(value: string[]) {
			this.setDataValue('options', JSON.stringify(value));
		},
	})
	options!: string[];

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	correctAnswer!: string;

	@Column({
		type: DataType.ENUM(Difficulty.EASY, Difficulty.MEDIUM, Difficulty.HARD),
		allowNull: false,
	})
	difficulty!: Difficulty;

	@ForeignKey(() => SubCategory)
	@Column({
		type: DataType.INTEGER,
		allowNull: false,
	})
	subCategoryId!: number;

	@BelongsTo(() => SubCategory)
	subCategory!: SubCategory;

	static async getQuestionById(id: number): Promise<Question | null> {
		return await Question.findByPk(id);
	}

	static async getCount(subCatIds: number[]): Promise<number> {
		return await Question.count({ where: { subCategoryId: { [Op.in]: subCatIds } } });
	}
	static async getLevelingQuestions(): Promise<Question[]> {
		const easyQuestions = await Question.findAll({
			where: { subCategoryId: 8, difficulty: Difficulty.EASY },
			limit: 5,
			order: [Sequelize.literal('RAND()')],
		});

		const mediumQuestions = await Question.findAll({
			where: { subCategoryId: 8, difficulty: Difficulty.MEDIUM },
			limit: 5,
			order: [Sequelize.literal('RAND()')],
		});

		const hardQuestions = await Question.findAll({
			where: { subCategoryId: 8, difficulty: Difficulty.HARD },
			limit: 5,
			order: [Sequelize.literal('RAND()')],
		});

		return [...easyQuestions, ...mediumQuestions, ...hardQuestions];
	}
	static async getAllQuestions(
		subCategoryId: number,
		questionCount: number,
		difficulty: Difficulty
	): Promise<Question[]> {
		return await Question.findAll({
			where: { subCategoryId, difficulty },
			limit: questionCount,
			order: [Sequelize.literal('RAND()')],
		});
	}

	static async createQuestion(question: Partial<Question>): Promise<Question> {
		return await Question.create(question);
	}

	static async updateQuestion(question: Question, questionData: Partial<Question>): Promise<Question> {
		return await question.update(questionData);
	}

	static async deleteQuestion(question: Question): Promise<void> {
		await question.destroy();
	}
}
