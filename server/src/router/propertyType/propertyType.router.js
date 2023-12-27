const express = require('express')
const asyncHandler = require('express-async-handler')
const PropertyTypeController = require('../../controllers/propertyType.controller.js')
const { verifyToken } = require('../../middlewares/verifyToken.js')
const verifyAdmin = require('../../middlewares/verifyAdmin.js')
const validatation = require('../../middlewares/validation/app.validate.js')
const Joi = require('joi')
const {
	insertPropTypeSchema,
	updatePropTypeSchema,
} = require('../../middlewares/validation/joiSchema.js')

const router = express.Router()

router.post(
	'/',
	verifyToken,
	verifyAdmin,
	validatation(Joi.object(insertPropTypeSchema)),
	asyncHandler(PropertyTypeController.insertHandler),
)

router.get(
	'/',
	verifyToken,
	asyncHandler(PropertyTypeController.getListHandler),
)

router.patch(
	'/:id',
	verifyToken,
	verifyAdmin,
	validatation(Joi.object(updatePropTypeSchema)),
	asyncHandler(PropertyTypeController.updateHandler),
)

router.delete(
	'/:id',
	verifyToken,
	verifyAdmin,
	asyncHandler(PropertyTypeController.deleteHandler),
)

module.exports = router
