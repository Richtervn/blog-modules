import autoIncrement from 'mongoose-auto-increment';

import AppDiary from './AppDiary';
import DiabloIICharacters from './DiabloIICharacters';
import DiabloIIMods from './DiabloIIMods';
import DiabloIISurvivalKits from './DiabloIISurvivalKits';
import DiabloIITools from './DiabloIITools';
import FlashGames from './FlashGames';
import MangasReading from './MangasReading';
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
  DiabloIICharacters.plugin(autoIncrement.plugin, 'DiabloIICharacters');
  DiabloIIMods.plugin(autoIncrement.plugin, 'DiabloIIMods');
  DiabloIITools.plugin(autoIncrement.plugin, 'DiabloIITools');
  DiabloIISurvivalKits.plugin(autoIncrement.plugin, 'DiabloIISurvivalKits');

  return {
    AppDiary: db.model('AppDiary', AppDiary),
    DiabloIICharacters: db.model('DiabloIICharacters', DiabloIICharacters),
    DiabloIITools: db.model('DiabloIITools', DiabloIITools),
    DiabloIIMods: db.model('DiabloIIMods', DiabloIIMods),
    DiabloIISurvivalKits: db.model('DiabloIISurvivalKits', DiabloIISurvivalKits),
    FlashGames: db.model('FlashGames', FlashGames),
    MangasReading: db.model('MangasReading', MangasReading),
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
