import express from 'express';
import initModels from './models';

import * as helpers from './helpers';
import * as routerCreators from './routes';

export default async (factories, config) => {
  try {
    const models = await initModels(config);
    // const methods = initMethods(models, factories);

    const routers = {};
    for (let key in routerCreators) {
      routers[key] = routerCreators[key](models, factories, helpers);
    }

    console.log('[L2-Freya] App started');
    return { routers, models, helpers };
  } catch (e) {
    console.log('[L2-Freya] App failed to start');
    return {};
  }
};
