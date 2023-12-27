const authService = require('../services/auth.service')
const { CreatedResponse, OkResponse } = require('../utils/success.response')

class AuthController {
	async register(req, res) {
		return new CreatedResponse({
			metaData: await authService.register(req.body),
			message: 'Account has already been created successfully',
		}).send(res)
	}

	async login(req, res) {
		return new OkResponse({
			metaData: await authService.login(req.body),
			message: 'Login successfully',
		}).send(res)
	}
}

module.exports = new AuthController()
