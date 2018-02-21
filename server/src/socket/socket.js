import http from 'http';
import express from 'express';

import socketIo from 'socket.io';
import * as muAppsHandlers from './MuOnline';

export default (config, MuApps) => {
  const app = express();
  const server = http.createServer(app);
  server.listen(config.socketPort);

  const io = socketIo(server);
  const { models, methods } = MuApps;

  io.on('connection', client => {
    muAppsHandlers.darksteam97d99i(client, models.darksteam97d99i, methods.darksteam97d99i);
  });

  return io;
};
