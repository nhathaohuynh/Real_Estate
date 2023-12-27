const db = require('../models/index')
class UserRepo {
	async insertUser({ phone, password, fullName, role, email }) {
		return await db.User.findOrCreate({
			where: { phone: phone },
			defaults: {
				password,
				phone,
				name: fullName,
				role,
				email,
			},
		})
	}

	async findUserByPhone(phone) {
		return await db.User.findOne({
			where: { phone },
		})
	}

	async findUserById(uid) {
		return await db.User.findByPk(uid)
	}
}

module.exports = new UserRepo()
