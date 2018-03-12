import initModels from './models';
import initWorker from './worker';
import initMethods from './methods';
import * as routerCreators from './routes';

export default async (factories, config, io) => {
  const models = await initModels(config);
  const methods = initMethods(models, factories);

  io.on('connection', client => {
    initWorker(models, client, methods);
  })
  // io.on('connection', client => {
  //   muAppsHandlers.darksteam97d99i(client, models.darksteam97d99i, methods.darksteam97d99i);
  // });

  const routers = {};
  for (let key in routerCreators) {
    routers[key] = routerCreators[key](models, factories, io);
  }

  return routers;
};
