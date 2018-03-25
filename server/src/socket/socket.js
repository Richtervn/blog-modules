import http from 'http';
import express from 'express';

import socketIo from 'socket.io';
import { darksteam97d99i as initDs9799SocketHandler } from './muonline';

export default (config, MuApps) => {
  const app = express();
  const server = http.createServer(app);
  server.listen(config.socketPort);

  const io = socketIo(server);

  io.on('connection', client => {
    initDs9799SocketHandler(
      MuApps.darksteam97d99i.models,
      client,
      MuApps.darksteam97d99i.methods,
      MuApps.darksteam97d99i.helpers
    );
  });

  return io;
};
