import io from 'socket.io-client';

const socket = io.connect('http://localhost:3000');
socket.on('connected', () => {
	console.log('connected');
})

export default socket;