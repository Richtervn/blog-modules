import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import express from 'express';
import expressWinston from 'express-winston';
import fileUpload from 'express-fileupload';
import winston from 'winston';

import pluginsRender from './pluginsRender';

export default (context, config, routes, MuApps, L2Apps) => {
  const app = express();

  const logger = new winston.Logger({
    transports: [
      new winston.transports.Console({
        timestamp: () => new Date().toLocaleString()
      })
    ]
  });
  logger.cli();

  // trust first proxy

  app.use(
    expressWinston.logger({
      winstonInstance: logger,
      expressFormat: true,
      meta: false
    })
  );

  app.use(bodyParser.json({ limit: '1000mb' }));
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());

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

  app.use(express.static('public'));
  app.use(fileUpload());

  for (let key in routes) {
    app.use(`/api/${key}`, routes[key]);
  }

  for (let muApp in MuApps) {
    for (let route in MuApps[muApp].routers) {
      app.use(`/api/${muApp}/${route}`, MuApps[muApp].routers[route]);
    }
  }

  for (let l2App in L2Apps) {
    for (let route in L2Apps[l2App].routers) {
      app.use(`/api/${l2App}/${route}`, L2Apps[l2App].routers[route]);
    }
  }

  app.get('/plugins', async (req, res) => {
    const html = await pluginsRender(__dirname, './plugins.hb', {
      ...context.getInfo()
    });
    res.send(html);
  });

  // app.get('/test', async (req, res) => {
  //   console.log(app.routes);
  //   res.send(ap.routes);
  // });

  app.use((req, res, next) => {
    const err = new Error('Not found');
    err.status = 404;
    next(err);
  });

  if (app.get('env') === 'development') {
    app.use((err, req, res, next) => {
      if (err.status != 404) console.error(err);
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
