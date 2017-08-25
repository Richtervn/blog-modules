import autoIncrement from 'mongoose-auto-increment';

import AppMenu from './AppMenu';

const models = db => {
  AppMenu.plugin(autoIncrement.plugin, 'AppMenu');
  const AppMenuSchema = db.model('AppMenu', AppMenu);

  return {
    AppMenu: AppMenuSchema
  }
}

export default {
  name: 'Database Models',
  description: 'Provide Models',
  services: {
    models: {
      require: ['db'],
      func: models
    }
  },
  exports: ['models']
}