import socket from './socket';

export default {
	name: 'Socket IO',
	description: 'Socket IO',
	services: {
		socket: {
			require: ['server'],
			func: socket
		}
	},
	exports: ['socket']
};