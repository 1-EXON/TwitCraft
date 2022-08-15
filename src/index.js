const tmi = require('tmi.js')

const ClickKey = require('./utils/ClickKey')

class App {
	client = null

	constructor() {
		this.initClient(process.env.BOT_ID, process.env.BOT_TOKEN)
		this.client.connect()
		
		this.client.on('message', (channel, tags, message, self) => {
			if (self) return
		
			if (message.toLowerCase() === '!forward') {
				ClickKey('w', 100)
			} else if (message.toLowerCase() === '!backward') {
				ClickKey('s'), 100
			}
		})
	}

	initClient(id, token) {
		this.client = new tmi.Client({
			options: { debug: true },
			identity: {
				username: id,
				password: token
			},
			channels: ['exondev']
		})
	}
}

new App()

// https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=<clien_id>&redirect_uri=http://localhost&scope=chat:read+chat:edit