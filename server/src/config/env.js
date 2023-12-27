require('dotenv').config()

module.exports = {
	PORT: process.env.PORT,
	DB_USERNAME: process.env.DB_USERNAME,
	DB_NAME: process.env.DB_NAME,
	DB_PASSWORD: process.env.DB_PASSWORD,
	DB_HOST: process.env.DB_HOST,
	DB_DIALECT: process.env.DB_DIALECT,
	APP_SECRET: process.env.APP_SECRET,
	LIMIT: process.env.LIMIT,
}
