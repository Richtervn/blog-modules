import appConfig from './config';
import io from 'socket.io-client';

const socket = io.connect(appConfig.SOCKET_HOST);

export default socket; 
