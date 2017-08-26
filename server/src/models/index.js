import autoIncrement from 'mongoose-auto-increment';

import FlashGames from './FlashGames';

const models = db => {
  FlashGames.plugin(autoIncrement.plugin, 'FlashGames');
  const FlashGamesSchema = db.model('FlashGames', FlashGames);

  return {
    FlashGames: FlashGamesSchema
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