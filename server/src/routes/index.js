import systemRouter from './system';
import flashGamesRouter from './flashGames';

const routes = (models, factories) => {
  const { FlashGames } = models;

  return {
    system: systemRouter(factories),
    flash_games: flashGamesRouter(FlashGames, factories)
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
