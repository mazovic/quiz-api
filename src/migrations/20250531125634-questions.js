'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('questions', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			question: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			options: {
				type: Sequelize.TEXT, // Store as JSON string
				allowNull: false,
			},
			correctAnswer: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			difficulty: {
				type: Sequelize.ENUM('easy', 'medium', 'hard'),
				allowNull: false,
			},
			subCategoryId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'subcategories',
					key: 'id',
				},
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE',
			},
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('questions');
	},
};
