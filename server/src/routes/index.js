import systemRouter from './system';
import flashGamesRouter from './flashGames';
import mangasReadingRouter from './mangasReading';
import profileRouter from './profile';
import yugiohPocRouter from './yugiohPoc';
import musicRouter from './music';
import starcraftRouter from './starcraft';

const routes = (models, factories) => {
  const {
    FlashGames,
    MangasReading,
    YugiohPocMods,
    YugiohPocDecks,
    Music,
    StarcraftMaps,
    StarcraftCampaigns,
    StarcraftMods
  } = models;

  return {
    system: systemRouter(factories),
    flash_games: flashGamesRouter(FlashGames, factories),
    mangas_reading: mangasReadingRouter(MangasReading, factories),
    profile: profileRouter(factories),
    yugioh_poc: yugiohPocRouter(YugiohPocMods, YugiohPocDecks, factories),
    music: musicRouter(Music, factories),
    starcraft: starcraftRouter(StarcraftMaps, StarcraftCampaigns, StarcraftMods, factories)
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
