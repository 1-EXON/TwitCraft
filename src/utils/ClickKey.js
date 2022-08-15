const robot = require('robotjs')

export default function ClickKey(keyType, clickTime) {
    robot.keyToggle(keyType, 'down')
	setTimeout(() => {
		robot.keyToggle('w', 'up')
	}, clickTime)
}