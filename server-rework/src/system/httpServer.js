// import http from 'http';

// export default app => {
//   const server = http.createServer(app);

//   server.listen(process.env.PORT);

//   server.on('error', err => {
//     if (err.syscall !== 'listen') throw err;
//     const port = process.env.PORT;
//     const bindErr = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

//     switch (err.code) {
//       case 'EACCES':
//         console.error(`${bindErr} requires elevated privileges`);
//         process.exit(1);
//         break;
//       case 'EADDRINUSE':
//         console.error(`${bindErr} is already in use`);
//         process.exit(1);
//         break;
//       default:
//         throw err;
//     }
//   });

//   server.on('listening', () => {
//     const addr = server.address();
//     const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
//     let addrInfo = '';
//     if (addr.address != '::') {
//       addrInfo = `${addr.address}:${addr.port}`;
//     } else {
//       addrInfo = `port ${addr.port}`;
//     }
//     console.log(`[APP] Server is running on ${addrInfo}`);
//   });

//   return server;
// };
