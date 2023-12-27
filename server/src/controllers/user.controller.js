const userService = require('../services/user.service.js')
const { OkResponse } = require('../utils/success.response')

class UserController {
	async getCurrentUser(req, res) {
		return new OkResponse({
			metaData: await userService.getCurrentUser(req.user),
			message: 'OK',
		}).send(res)
	}
}

module.exports = new UserController()
