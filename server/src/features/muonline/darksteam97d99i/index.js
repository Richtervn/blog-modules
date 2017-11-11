import express from 'express';
import dbModels from './models';
import initMethods from './methods';
import * as routes from './routes';
import * as helpers from './helpers';
import * as appConfigs from './appConfigs';

const muApp = async (factories, config) => {
  const router = express.Router();
  try {
    const models = await dbModels(config);
    const methods = initMethods(models, helpers);

    for (let key in routes) {
      routes[key](models, router, factories, helpers, appConfigs, methods);
    }

    return { router, models, methods };
  } catch (e) {
    console.error(e);
    console.log('[ERR-MUAPP] Darksteam97d99i database is not active');
    return router;
  }
};

export default muApp;
