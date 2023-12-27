const express = require('express')
const asyncHandler = require('express-async-handler')
const userController = require('../../controllers/user.controller.js')
const { verifyToken } = require('../../middlewares/verifyToken.js')

const router = express.Router()

router.get(
	'/current-user',
	verifyToken,
	asyncHandler(userController.getCurrentUser),
)

module.exports = router
