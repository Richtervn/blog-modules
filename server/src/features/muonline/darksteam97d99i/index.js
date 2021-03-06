import chalk from 'chalk';

import initModels from './models';
import initMethods from './methods';
import * as helpers from './helpers';
import * as routerCreators from './routes';

export default async (factories, config, MuOnlineGuides) => {
  try {
    const models = await initModels(config);
    const methods = initMethods(models, factories);

    const routers = {};
    for (let key in routerCreators) {
      routers[key] = routerCreators[key](models, methods, factories, helpers, MuOnlineGuides);
    }

    console.log(`${chalk.bold.blue('[Darksteam97d99i]')} App started`);
    return { routers, models, methods, helpers };
  } catch (e) {
    console.log(`${chalk.bold.red('[Darksteam97d99i]')} App failed to start`);
    return {};
  }
};
