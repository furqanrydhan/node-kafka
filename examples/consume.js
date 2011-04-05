var kafka = require('../kafka-node')

var consumer = new kafka.Consumer({
	host:'localhost',
	port:9092,
	topic:'test'
})

consumer.connect()
consumer.on('message', function(message) {
	console.log('Consumed message:', message)
})