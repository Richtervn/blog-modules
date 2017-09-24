import autoIncrement from 'mongoose-auto-increment';

import FlashGames from './FlashGames';
import MangasReading from './MangasReading';
import AppDiary from './AppDiary';
import PersonalDiary from './PersonalDiary';
import YugiohPocMods from './YugiohPocMods';
import YugiohPocDecks from './YugiohPocDecks';
import Music from './Music';
import StarcraftMaps from './StarcraftMaps';
import StarcraftCampaigns from './StarcraftCampaigns';
import StarcraftMods from './StarcraftMods';
import GamingHistory from './GamingHistory';
import MuOnlineTools from './MuOnlineTools';
import MuOnlineVersions from './MuOnlineVersions';

const models = db => {
  FlashGames.plugin(autoIncrement.plugin, 'FlashGames');
  MangasReading.plugin(autoIncrement.plugin, 'MangasReading');
  AppDiary.plugin(autoIncrement.plugin, 'AppDiary');
  PersonalDiary.plugin(autoIncrement.plugin, 'PersonalDiary');
  YugiohPocMods.plugin(autoIncrement.plugin, 'YugiohPocMods');
  YugiohPocDecks.plugin(autoIncrement.plugin, 'YugiohPocDecks');
  Music.plugin(autoIncrement.plugin, 'Music');
  StarcraftMaps.plugin(autoIncrement.plugin, 'StarcraftMaps');
  StarcraftCampaigns.plugin(autoIncrement.plugin, 'StarcraftCampaigns');
  StarcraftMods.plugin(autoIncrement.plugin, 'StarcraftMods');
  GamingHistory.plugin(autoIncrement.plugin, 'GamingHistory');
  MuOnlineTools.plugin(autoIncrement.plugin, 'MuOnlineTools');
  MuOnlineVersions.plugin(autoIncrement.plugin, 'MuOnlineVersions');

  return {
    FlashGames: db.model('FlashGames', FlashGames),
    MangasReading: db.model('MangasReading', MangasReading),
    AppDiary: db.model('AppDiary', AppDiary),
    PersonalDiary: db.model('PersonalDiary', PersonalDiary),
    YugiohPocMods: db.model('YugiohPocMods', YugiohPocMods),
    YugiohPocDecks: db.model('YugiohPocDecks', YugiohPocDecks),
    Music: db.model('Music', Music),
    StarcraftMaps: db.model('StarcraftMaps', StarcraftMaps),
    StarcraftCampaigns: db.model('StarcraftCampaigns', StarcraftCampaigns),
    StarcraftMods: db.model('StarcraftMods', StarcraftMods),
    GamingHistory: db.model('GamingHistory', GamingHistory),
    MuOnlineTools: db.model('MuOnlineTools', MuOnlineTools),
    MuOnlineVersions: db.model('MuOnlineVersions', MuOnlineVersions)
  };
};

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
};
