import socketIo from 'socket.io';
import * as muAppsHandlers from './MuOnline';

export default (server, MuApps) => {
	const io = socketIo(server);
	const { models, methods } = MuApps;

	io.on('connection', client => {
		muAppsHandlers.darksteam97d99i(client, models.darksteam97d99i, methods.darksteam97d99i);
	});

	return io;
};
