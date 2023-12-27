const { Op } = require('sequelize')
const db = require('../models')
class PropertyTypeRepo {
	async checkUniqueAndInsert(payload) {
		return await db.PropertyType.findOrCreate({
			where: { name: payload?.name },
			defaults: payload,
		})
	}

	async findAllAndCounts(queries, options) {
		if (queries.length > 0) {
			return await db.PropertyType.findAndCountAll({
				where: {
					[Op.or]: queries,
				},
				...options,
			})
		} else {
			return await db.PropertyType.findAndCountAll({
				...options,
			})
		}
	}

	async findByID(id) {
		return await db.PropertyType.findByPk(id)
	}

	async findAndUpdate(payload, id) {
		return await db.PropertyType.update(payload, {
			where: { id },
		})
	}

	async findByIdAndDelete(id) {
		return await db.PropertyType.destroy({ where: { id } })
	}
}

module.exports = new PropertyTypeRepo()
