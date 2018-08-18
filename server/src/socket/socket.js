import chalk from 'chalk';
import http from 'http';
import express from 'express';

import socketIo from 'socket.io';
import { darksteam97d99i as initDs9799SocketHandler } from './muonline';

export default (config, MuApps) => {
  const app = express();
  const server = http.createServer(app);
  server.listen(config.socketPort);
  console.log(`${chalk.bold.green('[APP]')} Socket is listenning on port ${config.socketPort}`);

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
