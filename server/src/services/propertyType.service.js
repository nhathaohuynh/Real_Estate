'use strict'

const { LIMIT } = require('../config/env')
const { Sequelize } = require('../models')
const propertTypeRepo = require('../repositories/propertType.repo')
const { BadRequest } = require('../utils/error.response')

class PropertyTypeService {
	async insert(payload) {
		const response = await propertTypeRepo.checkUniqueAndInsert(payload)

		if (!response[1]) throw new BadRequest('Dulicate property type.')

		return {
			propTypes: response[0],
		}
	}

	async getList(payload) {
		let options = {}
		const { limit, page, fields, sort, ...query } = payload

		// filter
		const queries = Object.entries(query).map(([key, value]) => ({
			[key]: Sequelize.where(
				Sequelize.fn('LOWER', Sequelize.col(key)),
				'Like',
				`%${value.toLocaleLowerCase()}%`,
			),
		}))

		if (fields) {
			const attributes = fields.split(',')
			const isExclude = attributes[0].startsWith('-')

			isExclude
				? (options.attributes = {
						exclude: attributes.map((attribute) => attribute.replace('-', '')),
				  })
				: (options.attributes = attributes)
		}

		// pagination

		const pageNumber = page - 1 > 0 ? page : 1

		const limiPage = !!limit ? limit : LIMIT
		const offset = (pageNumber - 1) * limiPage

		options.offset = +offset
		options.limit = +limiPage

		// sort
		if (sort) {
			const order = sort
				.split(',')
				.map((el) =>
					el.startsWith('-') ? [el.replace('-', ''), 'DESC'] : [el, 'ASC'],
				)
			options.order = order
		}

		if (queries.length > 0) {
			const response = await propertTypeRepo.findAllAndCounts(queries, options)
			return {
				propTypes: response,
			}
		} else {
			const response = await propertTypeRepo.findAllAndCounts(options)
			return {
				propTypes: response,
			}
		}
	}

	async update(payload, id) {
		if (!id) throw new BadRequest('PropertyTypeID is null. Please provide it')

		const foundProperType = await propertTypeRepo.findByID(id)

		if (!foundProperType) throw new BadRequest('PropertType doest not exists')

		const reponse = await propertTypeRepo.findAndUpdate(payload, id)

		if (!reponse[0])
			throw new BadRequest('Something went wrong. Please try again!')

		return {
			id: id,
		}
	}

	async delete(id) {
		if (!id) throw new BadRequest('PropertyTypeID is null. Please provide it')

		const foundProperType = await propertTypeRepo.findByID(id)

		if (!foundProperType) throw new BadRequest('PropertType doest not exists')

		const response = await propertTypeRepo.findByIdAndDelete(id)

		if (!response)
			throw new BadRequest('Something went wrong. Please try again!')

		return {
			id: id,
		}
	}
}

module.exports = new PropertyTypeService()
