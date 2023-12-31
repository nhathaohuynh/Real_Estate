const JWT = require('jsonwebtoken')
const { APP_SECRET } = require('../config/env')

module.exports = {
	generateToken: (payload, expiresIn) => {
		return JWT.sign(payload, APP_SECRET, { expiresIn: expiresIn })
	},
}
