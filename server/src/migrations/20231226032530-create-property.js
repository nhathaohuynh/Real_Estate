'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Properties', {
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
			description: {
				type: Sequelize.TEXT,
				allowNull: false,
			},
			listingType: {
				type: Sequelize.ENUM(['Sell', 'Rental']),
				allowNull: false,
			},
			Price: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			proppertyTypeID: {
				type: Sequelize.UUID,
				allowNull: false,
				references: {
					model: 'PropertyTypes',
					key: 'id',
				},
			},
			status: {
				type: Sequelize.ENUM(['Pedding', 'cancel', 'approve']),
				defaultValue: 'Pedding',
			},
			isAvaiable: {
				type: Sequelize.BOOLEAN,
				defaultValue: false,
			},
			images: {
				type: Sequelize.TEXT,
				allowNull: false,
			},
			postedBy: {
				type: Sequelize.UUID,
				references: {
					model: 'Users',
					key: 'id',
				},
			},
			bedRoom: {
				type: Sequelize.INTEGER,
			},

			bathRoom: {
				type: Sequelize.INTEGER,
			},
			size: {
				type: Sequelize.INTEGER,
			},
			yearBuilt: {
				type: Sequelize.INTEGER,
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
		await queryInterface.dropTable('Properties')
	},
}
