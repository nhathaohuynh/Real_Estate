const {
	DB_USERNAME,
	DB_NAME,
	DB_PASSWORD,
	DB_HOST,
	DB_DIALECT,
} = require('../config/env')
const { Sequelize } = require('sequelize')
class Database {
	constructor() {
		this.DB_USERNAME = DB_USERNAME
		this.DB_NAME = DB_NAME
		this.DB_PASSWORD = DB_PASSWORD
		this.DB_HOST = DB_HOST
		this.DB_DIALECT = DB_DIALECT
	}

	async conect() {
		const sequelize = new Sequelize(
			this.DB_NAME,
			this.DB_USERNAME,
			this.DB_PASSWORD,
			{
				host: this.DB_HOST,
				dialect: this.DB_DIALECT,
				logging: false,
			},
		)

		try {
			await sequelize.authenticate()
			console.log('Connection database has been established successfully.')
		} catch (error) {
			console.error('Unable to connect to the database:', error)
			throw error
		}
	}

	static async getInstance() {
		if (!this.instance) {
			this.instance = new Database()
			await this.instance.conect()
		}
		return this.instance
	}
}

module.exports = {
	connectDB: async () => {
		return await Database.getInstance()
	},
}
