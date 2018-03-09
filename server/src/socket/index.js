import socket from './socket';

export default {
	name: 'Socket IO',
	description: 'Socket IO',
	services: {
		socket: {
			require: ['config'],
			func: socket
		}
	},
	exports: ['socket']
};