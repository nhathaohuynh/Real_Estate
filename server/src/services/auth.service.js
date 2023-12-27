const userRepo = require('../repositories/user.repo')
const { Unauthorized } = require('../utils/error.response')
const { generateToken } = require('../utils/generateToken')
const { unselectFields } = require('../utils/heplers')

const bcrypt = require('bcrypt')

// const ROLE_ADMIN = '2222'
class AuthService {
	async register(payload) {
		if (payload.role === ROLE_ADMIN) {
			throw new Unauthorized('Unauthorized')
		}

		const response = await userRepo.insertUser(payload)

		const isSuccess = response[1]

		if (!isSuccess)
			throw new Unauthorized(
				'Account already has been created. Please try again',
			)

		const user = unselectFields(response[0]?.dataValues, ['password'])

		const payloadToken = {
			uid: user.id,
			role: user.role,
		}

		const expiresInToken = '1days'

		const accessToken = generateToken(payloadToken, expiresInToken)

		return {
			user,
			accessToken,
		}
	}

	async login({ phone, password }) {
		const user = await userRepo.findUserByPhone(phone)

		if (!user)
			throw new Unauthorized('Account does not exist. Please register accont')

		const isMatchPassword = bcrypt.compareSync(password, user?.password)

		if (!isMatchPassword)
			throw new Unauthorized('Phone or password went wrong. Please try again')

		const payloadToken = {
			uid: user.id,
			role: user.role,
		}

		const expiresInToken = '1days'

		const accessToken = generateToken(payloadToken, expiresInToken)

		return {
			user: unselectFields(user, ['password']),
			accessToken,
		}
	}
}

module.exports = new AuthService()
