'use strict'

const user = require('../models/user')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('UserMedia', {
			id: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.UUID,
				defaultValue: Sequelize.literal('gen_random_uuid()'),
			},
			icon: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			link: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			provider: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			userID: {
				type: Sequelize.UUID,
				allowNull: false,
				references: {
					model: 'Users',
					key: 'id',
				},
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
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('UserMedia')
	},
}
