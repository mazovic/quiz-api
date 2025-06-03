'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('resources', {
			id: {
				type: Sequelize.INTEGER,
				autoIncrement: true,
				primaryKey: true,
				allowNull: false,
			},
			resource_type: {
				type: Sequelize.ENUM('book', 'video', 'link'),
				allowNull: false,
			},
			resource_level: {
				type: Sequelize.ENUM('beginner', 'intermediate', 'advanced'),
				allowNull: false,
			},
			resource_name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			resource_url: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			resource_description: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			created_at: {
				type: Sequelize.DATE,
				allowNull: false,
				defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
			},
			updated_at: {
				type: Sequelize.DATE,
				allowNull: false,
				defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
			},
		});
	},

	down: async (queryInterface, Sequelize) => {
		// MySQL doesn't require enum types to be manually dropped
		await queryInterface.dropTable('resources');
	},
};
