let timerId = setTimeout(log, 2000)

function log() {
	console.log('hello');
	timerId = setTimeout(log, 2000)
	
} 