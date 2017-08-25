import systemRouter from './system';

const routes = (models, factories) => {
  const { AppMenu } = models;

  return {
    system: systemRouter(AppMenu, factories)
  };
};

export default {
  name: 'Routes',
  description: 'Provide Routes',
  services: {
    routes: {
      require: ['models', 'factories'],
      func: routes
    }
  },
  exports: ['routes']
};
