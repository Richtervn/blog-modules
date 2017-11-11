import bodyParser from 'body-parser';
import cookieParse from 'cookie-parser';
import express from 'express';
import expressWinston from 'express-winston';
import winston from 'winston';

export default (config, routes, MuApps) => {
  const app = express();

  const logger = new winston.Logger({
    transports: [
      new winston.transports.Console({
        timestamp: () => new Date().toLocaleString()
      })
    ]
  });
  logger.cli();

  app.use(
    expressWinston.logger({
      winstonInstance: logger,
      expressFormat: true,
      meta: false
    })
  );

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParse());
  app.use(express.static('public'));

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials'
    );
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
  });

  for (let key in routes) {
    app.use(`/api/${key}`, routes[key]);
  }

  for (let key in MuApps.router) {
    app.use(`/api/mu/${key}`, MuApps.router[key]);
  }

  app.use((req, res, next) => {
    const err = new Error('Not found');
    err.status = 404;
    next(err);
  });

  if (app.get('env') === 'development') {
    app.use((err, req, res, next) => {
      if (err.status != 404) console.log(err);
      res.status(err.status || 500);
      res.send({ message: err.message });
    });
  }

  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({ message: err.message });
  });

  return app;
};
