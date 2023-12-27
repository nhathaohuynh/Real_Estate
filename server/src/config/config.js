const {
	DB_DIALECT,
	DB_HOST,
	DB_PASSWORD,
	DB_USERNAME,
	DB_NAME,
} = require('./env')
module.exports = {
	development: {
		username: DB_USERNAME,
		password: DB_PASSWORD,
		database: DB_NAME,
		host: DB_HOST,
		dialect: DB_DIALECT,
		logging: false,
		timeZone: '+07:00',
	},
}
