const Joi = require('joi')

class JoiSchema {
	#string = Joi.string().allow(null, '')

	#stringRequired = Joi.string().required()

	#number = Joi.number().allow(null, '')

	#phone = Joi.string()
		.regex(/^0\d{9}$/)
		.required()
		.error((errors) => {
			errors.forEach((err) => {
				err.message = 'Phone is wrong format'
			})
			return errors
		})

	#email = Joi.string()
		.regex(
			/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
		)
		.required()
		.error((errors) => {
			errors.forEach((err) => {
				err.message = 'Email is wrong format'
			})
			return errors
		})

	#numberRequired = Joi.number().required()

	#array = Joi.array().allow(null, '')

	#arrayRequired = Joi.array().required()

	#role = Joi.string()
		.valid('0000', '1111', '2222')
		.error((errors) => {
			errors.forEach((err) => {
				err.message = 'Wrong authentication role'
			})
			return errors
		})
	registerSchema = {
		password: this.#stringRequired,
		phone: this.#phone,
		fullName: this.#stringRequired,
		role: this.#role,
		email: this.#email,
	}

	loginSchema = {
		password: this.#stringRequired,
		phone: this.#phone,
	}

	insertPropTypeSchema = {
		name: this.#stringRequired,
		description: this.#stringRequired,
		image: this.#string,
	}

	updatePropTypeSchema = {
		name: this.#string,
		description: this.#string,
		image: this.#string,
	}
}

module.exports = new JoiSchema()
