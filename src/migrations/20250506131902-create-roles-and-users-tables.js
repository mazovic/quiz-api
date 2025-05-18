'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('roles', {
			id: {
				type: Sequelize.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			name: {
				type: Sequelize.STRING(50),
				allowNull: false,
			},
		});

		await queryInterface.createTable('users', {
			id: {
				type: Sequelize.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			firstname: {
				type: Sequelize.STRING(255),
				allowNull: false,
			},
			lastname: {
				type: Sequelize.STRING(255),
				allowNull: false,
			},
			email: {
				type: Sequelize.STRING(255),
				allowNull: false,
				unique: true,
			},
			password_hash: {
				type: Sequelize.STRING(255),
				allowNull: false,
			},
			salt: {
				type: Sequelize.STRING(100),
				allowNull: true,
			},
			role_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'roles',
					key: 'id',
				},
				onUpdate: 'CASCADE',
				onDelete: 'RESTRICT',
			},
			profile_status: {
				type: Sequelize.ENUM('normal', 'banned', 'deleted', 'emailverification'),
				allowNull: false,
				defaultValue: 'normal',
			},
			phone_number: {
				type: Sequelize.STRING(20),
				allowNull: true,
			},
			is_verified: {
				type: Sequelize.BOOLEAN,
				allowNull: true,
				defaultValue: false,
			},
			password_recovery_code_hash: {
				type: Sequelize.STRING(100),
				allowNull: true,
			},
			password_recovery_code_expiry: {
				type: Sequelize.DATE,
				allowNull: true,
			},
			preferred_language: {
				type: Sequelize.ENUM('en', 'ar'),
				allowNull: false,
				defaultValue: 'en',
			},
			preferred_currency: {
				type: Sequelize.ENUM('USD', 'AED'),
				allowNull: false,
				defaultValue: 'USD',
			},
			created_at: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
			},
			updated_at: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
			},
			deleted_at: {
				type: Sequelize.DATE,
				allowNull: true,
			},
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('users');
		await queryInterface.dropTable('roles');
	},
};
