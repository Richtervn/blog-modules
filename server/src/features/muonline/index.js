import darksteam97d99i from './darksteam97d99i';

const muApps = async (factories, config) => {
  return { darksteam97d99i: await darksteam97d99i(factories, config) };
};

export default {
  name: 'Mu Online Webportals',
  description: 'Mu Web Portals for many versions',
  services: {
    MuRouter: {
      require: ['factories', 'config'],
      func: muApps
    }
  },
  exports: ['MuRouter']
};
