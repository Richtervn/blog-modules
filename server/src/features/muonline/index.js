import darksteam97d99i from './darksteam97d99i';

const muApps = async (factories, config) => {
  const Darksteam97d99i = await darksteam97d99i(factories, config);
  return {
    router: {
      darksteam97d99i: Darksteam97d99i.router
    },
    models: {
      darksteam97d99i: Darksteam97d99i.models
    },
    methods: {
      darksteam97d99i: Darksteam97d99i.methods
    }
  };
};

export default {
  name: 'Mu Online Webportals',
  description: 'Mu Web Portals for many versions',
  services: {
    MuApps: {
      require: ['factories', 'config'],
      func: muApps
    }
  },
  exports: ['MuApps']
};
