import socketIo from 'socket.io';

export default server => {
	const io = socketIo(server);

	io.on('connection', client => {
		console.log('new connection');
		client.emit('connected');
		client.on('darksteam97d99i/USER_LOGGED_IN', id => {
			console.log('logged In', id)
		})
	});

	return io;
};
