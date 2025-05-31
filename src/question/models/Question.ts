import { Table, Column, Model, DataType, ForeignKey, BelongsTo, Sequelize } from 'sequelize-typescript';
import { SubCategory } from '../../categories/models/SubCategory';

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

	static async getAllQuestions(subCategoryId: number, questionCount: number): Promise<Question[]> {
		return await Question.findAll({
			where: { subCategoryId },
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
