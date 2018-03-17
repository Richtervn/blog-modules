import initModels from './models';
import initWorker from './worker';
import initMethods from './methods';
import * as helpers from './helpers';
import * as routerCreators from './routes';

export default async (factories, config, io) => {
  try {
    const models = await initModels(config);
    const methods = initMethods(models, factories, io);

    io.on('connection', client => {
      initWorker(models, client, methods, helpers);
    });

    const routers = {};
    for (let key in routerCreators) {
      routers[key] = routerCreators[key](models, methods, factories, helpers, io);
    }

    console.log('[Darksteam97d99i] App started');
    return routers;
  } catch (e) {
    console.log(e);
    console.log('[Darksteam97d99i] App failed to start');
    return {};
  }
};
