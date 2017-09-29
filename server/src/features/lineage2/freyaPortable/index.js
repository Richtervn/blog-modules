import express from 'express';
import dbModels from './models';
// import * as routes from './routes';
// import * as helpers from './helpers';
// import * as appConfigs from './appConfigs';

// const muApp = async (factories, config) => {
//   const router = express.Router();
//   try {
//     const models = await dbModels(config);
//     for (let key in routes) {
//       routes[key](models, router, factories, helpers, appConfigs);
//     }
//     return router;
//   } catch(e){
//     console.log('[ERR-MUAPP] Darksteam97d99i database is not active')
//     return router;
//   }
// };

// export default muApp;

const l2App = async (factories, config) => {
  const router = express.Router();
  try {
    const models = await dbModels(config);
  } catch (e) {
    console.log(e);
    console.log('[ERR-L2APP] Freya Portable database is not active');
  }
  return router;
}

export default l2App;