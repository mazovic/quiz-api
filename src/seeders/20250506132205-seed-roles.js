'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert('Roles', [{ name: 'user' }, { name: 'admin' }, { name: 'editor' }], {});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete(
			'Roles',
			{
				name: { [Sequelize.Op.in]: ['user', 'admin', 'editor'] },
			},
			{}
		);
	},
};
