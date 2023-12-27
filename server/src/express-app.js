const express = require('express')
const cors = require('cors')
const { notFound } = require('./middlewares/notFound')
const { errorHandler } = require('./middlewares/errorHandler')
const morgan = require('morgan')

module.exports = async (app) => {
	app.use(express.urlencoded({ extended: true }))
	app.use(express.json())
	app.use(cors())
	app.use(morgan('dev'))

	// api
	app.use('/property/api/v1', require('./router'))

	// not found
	app.use(notFound)

	// error handling
	app.use(errorHandler)
}
