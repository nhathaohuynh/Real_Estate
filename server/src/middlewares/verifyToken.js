const { APP_SECRET } = require('../config/env')
const userRepo = require('../repositories/user.repo')
const { Unauthorized } = require('../utils/error.response')
const ROLE_USER = ['0000', '1111', '2222']

const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')

const verifyToken = asyncHandler((req, res, next) => {
	const token = req.headers?.authorization?.startsWith('Bearer')

	if (!token) return next(new Unauthorized('credentials does not provide !!'))

	const rawToken = req.headers.authorization?.split(' ')[1]

	if (!rawToken) return next(new Unauthorized('Token does not provide !!'))

	jwt.verify(rawToken, APP_SECRET, async (err, decoded) => {
		if (err) {
			if (err.message === 'JsonWebTokenError') {
				return next(new Unauthorized('Unauthorized'))
			} else {
				return next(new BadRequest(err.message))
			}
		}

		if (!ROLE_USER.includes(decoded?.role))
			return next(new Unauthorized('Unauthorized'))

		const user = await userRepo.findUserById(decoded.uid)

		if (!user) return next(new Unauthorized('Unauthorized'))

		req.user = decoded
		next()
	})
})

module.exports = {
	verifyToken,
}
