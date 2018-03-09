import http from 'http';
import express from 'express';

import socketIo from 'socket.io';

export default config => {
  const app = express();
  const server = http.createServer(app);
  server.listen(config.socketPort);

  const io = socketIo(server);

  return io;
};
