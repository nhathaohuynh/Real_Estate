const { Unauthorized } = require('../utils/error.response')
const asyncHandler = require('express-async-handler')
const ROLE_AGENT = '1111'

const verifyAgent = asyncHandler((req, _, next) => {
	const {
		user: { role },
	} = req.user

	if (role !== ROLE_AGENT) return next(new Unauthorized('Unauthorized'))

	next()
})

module.exports = verifyAgent
