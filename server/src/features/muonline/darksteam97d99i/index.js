import express from 'express';
import models from './models';
import * as routes from './routes';

const muApp = async (factories, config) => {
  const sequelize = await models(config);
  const router = express.Router();
  for (let key in routes) {
    routes[key](sequelize.models, router, factories);
  }
  return router;
};

export default muApp;
