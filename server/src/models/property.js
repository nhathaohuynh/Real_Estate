'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class Property extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Property.init(
		{
			name: DataTypes.STRING,
			description: DataTypes.STRING,
			listingType: {
				type: DataTypes.ENUM,
				values: ['Sell', 'Rental'],
			},

			Price: DataTypes.FLOAT,
			proppertyTypeID: DataTypes.UUID,
			status: {
				type: DataTypes.ENUM,
				values: ['Pedding', 'cancel', 'approve'],
				defaultValue: 'pending',
			},
			isAvaiable: {
				type: DataTypes.BOOLEAN,
				defaultValue: false,
			},
			images: {
				type: DataTypes.TEXT,
				get() {
					const rawValue = this.getDataValue('images')

					if (rawValue) {
						return JSON.parse(this)
					}
					return []
				},
				set(arrayImages) {
					this.setDataValue('images', JSON.stringify(arrayImages))
				},
			},

			featureImage: DataTypes.STRING,
			postedBy: DataTypes.UUID,
			bedRoom: DataTypes.INTEGER,
			bathRoom: DataTypes.INTEGER,
			size: DataTypes.INTEGER,
			yearBuilt: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: 'Property',
		},
	)
	return Property
}
