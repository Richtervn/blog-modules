import initModels from './models';
import initMethods from './methods';
import * as helpers from './helpers';
import * as routerCreators from './routes';

export default async (factories, config) => {
  try {
    const models = await initModels(config);
    const methods = initMethods(models, factories);

    const routers = {};
    for (let key in routerCreators) {
      routers[key] = routerCreators[key](models, methods, factories, helpers);
    }

    console.log('[Darksteam97d99i] App started');
    return { routers, models, methods, helpers };
  } catch (e) {
    console.log(e);
    console.log('[Darksteam97d99i] App failed to start');
    return {};
  }
};
