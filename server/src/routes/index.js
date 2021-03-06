import accountRouter from './account';
import appDiaryRouter from './appDiary';
import bookShelvesRouter from './bookShelves';
import dayEventsRouter from './dayEvents';
import diabloIIRouter from './diabloII';
import flashGamesRouter from './flashGames';
import galleryRouter from './gallery';
import gamingHistoryRouter from './gamingHistory';
import mangasReadingRouter from './mangasReading';
import muOnlineRouter from './muOnline';
import musicRouter from './music';
import notebookRouter from './notebook';
import profileRouter from './profile';
import projectsRouter from './projects';
import rssRouter from './rss';
import scheludeEventsRouter from './scheludeEvents';
import starcraftRouter from './starcraft';
import mangaNewsRouter from './mangaNews';
import systemRouter from './system';
import toolsRouter from './tools';
import utilsRouter from './utils';
import yugiohPocRouter from './yugiohPoc';

const routes = (models, factories, socket) => {
  if(!models) return {};

  const {
    Account,
    AppDiary,
    BookShelves,
    DayEvents,
    DiabloIIMods,
    DiabloIICharacters,
    DiabloIITools,
    DiabloIISurvivalKits,
    FlashGames,
    GamingHistory,
    GamingHistoryAbout,
    GamingHistoryGuide,
    GamingHistoryOverview,
    MangasReading,
    MuOnlineCharacters,
    MuOnlineGuides,
    MuOnlineTools,
    MuOnlineVersions,
    Music,
    Notebook,
    Projects,
    RssProviders,
    ScheludeEvents,
    StarcraftCampaigns,
    StarcraftMaps,
    StarcraftMods,
    YugiohPocDecks,
    YugiohPocMods
  } = models;

  return {
    account: accountRouter(Account, factories),
    app_diary: appDiaryRouter(AppDiary, factories),
    book_shelves: bookShelvesRouter(BookShelves, factories),
    day_events: dayEventsRouter(DayEvents, factories),
    diabloII: diabloIIRouter(DiabloIICharacters, DiabloIIMods, DiabloIITools, DiabloIISurvivalKits, factories),
    flash_games: flashGamesRouter(FlashGames, factories),
    gallery: galleryRouter(factories),
    gaming_history: gamingHistoryRouter(
      GamingHistory,
      GamingHistoryAbout,
      GamingHistoryGuide,
      GamingHistoryOverview,
      factories
    ),
    manga_news: mangaNewsRouter(factories),
    mangas_reading: mangasReadingRouter(MangasReading, factories, socket),
    mu_online: muOnlineRouter(MuOnlineCharacters, MuOnlineGuides, MuOnlineTools, MuOnlineVersions, factories),
    music: musicRouter(Music, factories),
    notebook: notebookRouter(Notebook, factories),
    profile: profileRouter(factories),
    projects: projectsRouter(Projects, factories),
    starcraft: starcraftRouter(StarcraftMaps, StarcraftCampaigns, StarcraftMods, factories),
    rss: rssRouter(RssProviders, factories),
    schelude_events: scheludeEventsRouter(ScheludeEvents, factories),
    system: systemRouter(models, factories),
    tools: toolsRouter(models, factories),
    utils: utilsRouter(factories),
    yugioh_poc: yugiohPocRouter(YugiohPocMods, YugiohPocDecks, factories)
  };
};

export default {
  name: 'Routes',
  description: 'Provide Routes',
  services: {
    routes: {
      require: ['models', 'factories', 'socket'],
      func: routes
    }
  },
  exports: ['routes']
};
