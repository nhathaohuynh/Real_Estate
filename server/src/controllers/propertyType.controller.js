const propertyTypeService = require('../services/propertyType.service')
const { OkResponse } = require('../utils/success.response')

class PropertyTypeController {
	async insertHandle(req, res) {
		return new OkResponse({
			message: 'OK',
			metaData: await propertyTypeService.insert(req.body),
		}).send(res)
	}

	async getListHandler(req, res) {
		return new OkResponse({
			metaData: await propertyTypeService.getList(req.query),
		}).send(res)
	}

	async updateHandler(req, res) {
		const id = req.params.id

		return new OkResponse({
			metaData: await propertyTypeService.update(req.body, id),
		}).send(res)
	}

	async deleteHandler(req, res) {
		const id = req.params.id

		return new OkResponse({
			metaData: await propertyTypeService.delete(id),
		}).send(res)
	}
}

module.exports = new PropertyTypeController()
