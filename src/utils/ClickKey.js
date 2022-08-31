const robot = require('robotjs')

function clickKey(keyType, clickTime) {
    robot.keyToggle(keyType, 'down')
	setTimeout(() => {
		robot.keyToggle(keyType, 'up')
	}, clickTime)
}

exports.clickKey = clickKey