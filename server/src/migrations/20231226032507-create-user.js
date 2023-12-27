;('use strict')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Users', {
			id: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.UUID,
				defaultValue: Sequelize.literal('gen_random_uuid()'),
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			phone: {
				type: Sequelize.STRING,
				unique: true,
				allowNull: false,
			},
			email: {
				type: Sequelize.STRING,
				unique: true,
				allowNull: false,
			},
			password: {
				type: Sequelize.STRING,
			},
			address: {
				type: Sequelize.STRING,
			},
			facebookURL: {
				type: Sequelize.STRING,
			},
			role: {
				type: Sequelize.ENUM,
				values: ['0000', '1111', '2222'],
			},
			avatar: {
				type: Sequelize.STRING,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		})
		await queryInterface.addIndex('Users', ['phone'])
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('Users')
	},
}
