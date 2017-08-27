import systemRouter from './system';
import flashGamesRouter from './flashGames';
import mangasReadingRouter from './mangasReading';
import profileRouter from './profile';

const routes = (models, factories) => {
  const { FlashGames, MangasReading } = models;

  return {
    system: systemRouter(factories),
    flash_games: flashGamesRouter(FlashGames, factories),
    mangas_reading: mangasReadingRouter(MangasReading, factories),
    profile: profileRouter(factories)
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
