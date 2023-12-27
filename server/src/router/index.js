const express = require('express')

const router = express.Router()

router.use('/auth', require('./auth/auth.router'))
router.use('/user', require('./user/user.router'))
router.use('/property-type', require('./propertyType/propertyType.router'))

module.exports = router
