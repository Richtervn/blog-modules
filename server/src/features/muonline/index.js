import darksteam97d99iApp from './darksteam97d99i';

const muApps = async (factories, config, models) => {
  if(!models) return;
  const { MuOnlineGuides } = models;
  const darksteam97d99i = await darksteam97d99iApp(factories, config, MuOnlineGuides);

  return { darksteam97d99i };
};

export default {
  name: 'Mu Online Webportals',
  description: 'Mu Web Portals for many versions',
  services: {
    MuApps: {
      require: ['factories', 'config', 'models'],
      func: muApps
    }
  },
  exports: ['MuApps']
};
