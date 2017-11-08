import socketIo from 'socket.io';

export default server => {
	const io = socketIo(server);

	io.on('connection', client => {
		console.log('new connection');
		client.emit('connected');
	});

	return io;
};
