// import initMethods from './methods';
// import * as helpers from './helpers';

import initModels from './models';
import initWorker from './worker';
import * as routerCreators from './routes';

export default async (factories, config, io) => {
  const models = await initModels(config);

  io.on('connection', client => {
    // initWorker(models, client);  
    console.log('connected');  
  })

  const routers = {};
  for (let key in routerCreators) {
    routers[key] = routerCreators[key](models, factories, io);
  }

  return routers;
};
