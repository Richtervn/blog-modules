import systemRouter from './system';
import flashGamesRouter from './flashGames';
import mangasReadingRouter from './mangasReading';
import profileRouter from './profile';
import yugiohPocRouter from './yugiohPoc';

const routes = (models, factories) => {
  const { FlashGames, MangasReading, YugiohPocMods, YugiohPocDecks } = models;

  return {
    system: systemRouter(factories),
    flash_games: flashGamesRouter(FlashGames, factories),
    mangas_reading: mangasReadingRouter(MangasReading, factories),
    profile: profileRouter(factories),
    yugioh_poc: yugiohPocRouter(YugiohPocMods, YugiohPocDecks, factories)
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
