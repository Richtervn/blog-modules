import appDiaryRouter from './appDiary';
import diabloIIRouter from './diabloII';
import flashGamesRouter from './flashGames';
import gamingHistoryRouter from './gamingHistory';
import mangasReadingRouter from './mangasReading';
import muOnlineRouter from './muOnline';
import musicRouter from './music';
import profileRouter from './profile';
import projectsRouter from './projects';
import starcraftRouter from './starcraft';
import systemRouter from './system';
import toolsRouter from './tools';
import yugiohPocRouter from './yugiohPoc';

const routes = (models, factories) => {
  const {
    AppDiary,
    DiabloIIMods,
    DiabloIICharacters,
    DiabloIITools,
    DiabloIISurvivalKits,
    FlashGames,
    GamingHistory,
    MangasReading,
    MuOnlineTools,
    MuOnlineVersions,
    Music,
    Projects,
    StarcraftCampaigns,
    StarcraftMaps,
    StarcraftMods,
    YugiohPocDecks,
    YugiohPocMods
  } = models;

  return {
    app_diary: appDiaryRouter(AppDiary, factories),
    diabloII: diabloIIRouter(DiabloIICharacters, DiabloIIMods, DiabloIITools, DiabloIISurvivalKits, factories),
    flash_games: flashGamesRouter(FlashGames, factories),
    gaming_history: gamingHistoryRouter(GamingHistory, factories),
    mangas_reading: mangasReadingRouter(MangasReading, factories),
    mu_online: muOnlineRouter(MuOnlineTools, MuOnlineVersions, factories),
    music: musicRouter(Music, factories),
    profile: profileRouter(factories),
    projects: projectsRouter(Projects, factories),
    starcraft: starcraftRouter(StarcraftMaps, StarcraftCampaigns, StarcraftMods, factories),
    system: systemRouter(factories),
    tools: toolsRouter(models, factories),
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
