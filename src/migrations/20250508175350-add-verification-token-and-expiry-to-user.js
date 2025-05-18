'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.addColumn('users', 'verification_token', {
			type: Sequelize.STRING(6),
			allowNull: true,
		});

		await queryInterface.addColumn('users', 'verification_token_expiry', {
			type: Sequelize.DATE,
			allowNull: true,
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.removeColumn('users', 'verification_token');
		await queryInterface.removeColumn('users', 'verification_token_expiry');
	},
};
