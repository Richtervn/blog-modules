import diabloIIRouter from './diabloII';
import systemRouter from './system';
import flashGamesRouter from './flashGames';
import mangasReadingRouter from './mangasReading';
import profileRouter from './profile';
import yugiohPocRouter from './yugiohPoc';
import musicRouter from './music';
import starcraftRouter from './starcraft';
import gamingHistoryRouter from './gamingHistory';
import muOnlineRouter from './muOnline';
import toolRouter from './tool';

const routes = (models, factories) => {
  const {
    DiabloIIMods,
    DiabloIICharacters,
    DiabloIITools,
    DiabloIISurvivalKits,
    FlashGames,
    MangasReading,
    YugiohPocMods,
    YugiohPocDecks,
    Music,
    StarcraftMaps,
    StarcraftCampaigns,
    StarcraftMods,
    GamingHistory,
    MuOnlineTools,
    MuOnlineVersions
  } = models;

  return {
    system: systemRouter(factories),
    flash_games: flashGamesRouter(FlashGames, factories),
    mangas_reading: mangasReadingRouter(MangasReading, factories),
    profile: profileRouter(factories),
    yugioh_poc: yugiohPocRouter(YugiohPocMods, YugiohPocDecks, factories),
    music: musicRouter(Music, factories),
    starcraft: starcraftRouter(StarcraftMaps, StarcraftCampaigns, StarcraftMods, factories),
    gaming_history: gamingHistoryRouter(GamingHistory, factories),
    mu_online: muOnlineRouter(MuOnlineTools, MuOnlineVersions, factories),
    diabloII: diabloIIRouter(DiabloIICharacters, DiabloIIMods, DiabloIITools, DiabloIISurvivalKits, factories),
    tool: toolRouter(models, factories)
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
