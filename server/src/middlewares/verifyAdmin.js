const { Unauthorized } = require('../utils/error.response')
const asyncHandler = require('express-async-handler')

const ROLE_ADMIN = '2222'

const verifyAdmin = asyncHandler((req, _, next) => {
	const { role } = req.user

	if (role !== ROLE_ADMIN) {
		return next(new Unauthorized('Unauthorized'))
	}
	next()
})

module.exports = verifyAdmin
