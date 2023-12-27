const userRepo = require('../repositories/user.repo')
const { Unauthorized } = require('../utils/error.response')
const { unselectFields } = require('../utils/heplers')

class UserService {
	async getCurrentUser({ uid }) {
		const user = await userRepo.findUserById(uid)

		if (!user) throw new Unauthorized('Account does not exist')

		console.log(user)
		return {
			user: unselectFields(user, ['password']),
		}
	}
}

module.exports = new UserService()
