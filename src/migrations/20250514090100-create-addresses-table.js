'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('addresses', {
			id: {
				type: Sequelize.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			address_line1: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			address_line2: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			city: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			state: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			country: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			postal_code: {
				type: Sequelize.STRING(10),
				allowNull: true,
			},
			nearby_landmark: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			is_default: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false,
			},
			user_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'users',
					key: 'id',
				},
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE',
			},
			created_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			updated_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
		});

		await queryInterface.addIndex('addresses', ['user_id']);

		await queryInterface.addIndex('addresses', ['user_id', 'is_default']);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('addresses');
	},
};
