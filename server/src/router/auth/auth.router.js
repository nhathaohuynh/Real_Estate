const express = require('express')
const asyncHandler = require('express-async-handler')
const authController = require('../../controllers/auth.controller')

const Joi = require('joi')
const joiSchema = require('../../middlewares/validation/joiSchema')
const validatation = require('../../middlewares/validation/app.validate')
const router = express.Router()

router.post(
	'/register',
	validatation(Joi.object(joiSchema.registerSchema)),
	asyncHandler(authController.register),
)

router.post(
	'/login',
	validatation(Joi.object(joiSchema.loginSchema)),
	asyncHandler(authController.login),
)

module.exports = router
