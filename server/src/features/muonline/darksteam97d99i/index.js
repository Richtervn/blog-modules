import express from 'express';
import dbModels from './models';
import * as routes from './routes';

const muApp = async (factories, config) => {
  const models = await dbModels(config);
  const router = express.Router();
  for (let key in routes) {
    routes[key](models, router, factories);
  }
  return router;
};

export default muApp;
