const tmi = require('tmi.js')

const { clickKey } = require('./utils/clickKey')

class App {
	client = null

	constructor() {
		this.initClient(process.env.BOT_ID, process.env.BOT_TOKEN)
		this.client.connect()
		
		this.chatOn()
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

	chatOn() {
		this.client.on('message', (channel, tags, message, self) => {
			if (self) return
			const msgList = message.toLowerCase().split(' ')

			if (msgList[0] === '!forward' || msgList[0] === '!fd') {
				if (msgList.length > 1) {
					clickKey('w', parseInt(msgList[1]))
				} else {
					clickKey('w', 100)
				}
			} else if (msgList[0] === '!backward' || msgList[0] === '!bd') {
				if (msgList.length > 1) {
					clickKey('s', parseInt(msgList[1]))
				} else {
					clickKey('s', 100)
				}
			} else if (msgList[0] === '!left' || msgList[0] === '!lt') {
				if (msgList.length > 1) {
					clickKey('a', parseInt(msgList[1]))
				} else {
					clickKey('a', 100)
				}
			} else if (msgList[0] === '!right' || msgList[0] === '!rt') {
				if (msgList.length > 1) {
					clickKey('d', parseInt(msgList[1]))
				} else {
					clickKey('d', 100)
				}
			} else if (msgList[0] === '!space' || msgList[0] === '!sp' || msgList[0] === '!jump') {
				clickKey('space', 10)
			} else if (msgList[0] === '!run') {
				if (msgList.length > 1) {
					clickKey('s', 20)
					clickKey('s', parseInt(msgList[1]))
				} else {
					clickKey('s', 20)
					clickKey('s', 100)
				}
			}
		})
	}
}

new App()

// https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=<clien_id>&redirect_uri=http://localhost&scope=chat:read+chat:edit