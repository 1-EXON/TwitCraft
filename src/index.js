const tmi = require('tmi.js')
const robot = require('robotjs')

const client = new tmi.Client({
	options: { debug: true },
	identity: {
		username: process.env.BOT_ID,
		password: process.env.BOT_TOKEN
	},
	channels: [ 'exondev' ]
});

client.connect();

client.on('message', (channel, tags, message, self) => {
	// Ignore echoed messages.
	if (self) return

	if (message.toLowerCase() === '!hello') {
		// "@alca, heya!"
		client.say(channel, `@${tags.username}, heya!`)
	}
})

// https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=<clien_id>&redirect_uri=http://localhost&scope=chat:read+chat:edit