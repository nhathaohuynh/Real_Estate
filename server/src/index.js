const express = require('express')
const http = require('http')
const expressApp = require('./express-app')

const { PORT } = require('./config/env')
const { connectDB } = require('./database')

class Server {
	constructor() {
		this.app = express()
		this.server = http.createServer(this.app)
		this.PORT = PORT || 8080
	}

	async start() {
		await expressApp(this.app)
		await connectDB()
		this.runServer().setupErrorHandling()
	}

	runServer() {
		this.server.listen(this.PORT, () => {
			console.log(`Server is running on port ${this.PORT}`)
		})
		return this
	}

	setupErrorHandling() {
		this.app.on('error', (err) => {
			console.error(err)
			process.exit(1)
		})
	}
}

const serverInstance = new Server()

serverInstance.start()
