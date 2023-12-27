const { BadRequest } = require('../../utils/error.response')

const validatation = (schema) => {
	return (req, _, next) => {
		const { error } = schema.validate(req.body)

		if (error)
			throw new BadRequest(error?.details[0]?.message.replaceAll(`\"`, ''))

		next()
	}
}

module.exports = validatation
