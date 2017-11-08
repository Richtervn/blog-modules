import io from 'socket.io-client';

class SocketInstance {
	constructor() {
		this.instance = io.connect('http://localhost:3000');
	}

	getInstance() {
		return this.instance;
	}
}

let socketInstance;

if(!socketInstance){
	socketInstance = new SocketInstance();
}

const instance = socketInstance.getInstance();

export default instance;
