'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		//create refresh tokens table
		await queryInterface.createTable('refresh_tokens', {
			id: {
				type: Sequelize.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			jti: {
				type: Sequelize.CHAR(36),
				allowNull: false,
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
			device_info: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			issued_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			expires_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			is_revoked: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false,
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

		await queryInterface.addIndex('refresh_tokens', ['user_id']);

		await queryInterface.addIndex('refresh_tokens', ['jti']);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('refresh_tokens');
	},
};
