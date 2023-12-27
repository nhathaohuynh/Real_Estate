const statusCode = {
	BAD_REQUEST: 400,
	FORBIDDEN: 403,
	CONFLICT: 409,
	UNAUTHORIZED: 401,
}

const statusMessage = {
	BAD_REQUEST: 'Bad request',
	FORBIDDEN: 'Forbidden',
	CONFLICT: 'Conflict',
	UNAUTHORIZED: 'Unauthorized',
}

class ErrorResponse extends Error {
	constructor(message, status) {
		super(message)
		this.status = status
	}
}

class BadRequest extends ErrorResponse {
	constructor(
		message = statusMessage.BAD_REQUEST,
		status = statusCode.BAD_REQUEST,
	) {
		super(message, status)
	}
}

class Unauthorized extends ErrorResponse {
	constructor(
		message = statusMessage.UNAUTHORIZED,
		status = statusCode.UNAUTHORIZED,
	) {
		super(message, status)
	}
}

class Forbidden extends ErrorResponse {
	constructor(
		message = statusMessage.FORBIDDEN,
		status = statusCode.FORBIDDEN,
	) {
		super(message, status)
	}
}

class Conflict extends ErrorResponse {
	constructor(message = statusMessage.CONFLICT, status = statusCode.CONFLICT) {
		super(message, status)
	}
}
module.exports = {
	BadRequest,
	Forbidden,
	Conflict,
	Unauthorized,
}
