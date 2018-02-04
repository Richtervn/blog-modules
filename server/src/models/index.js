import autoIncrement from 'mongoose-auto-increment';

import AppDiary from './AppDiary';
import DiabloIICharacters from './DiabloIICharacters';
import DiabloIIMods from './DiabloIIMods';
import DiabloIISurvivalKits from './DiabloIISurvivalKits';
import DiabloIITools from './DiabloIITools';
import FlashGames from './FlashGames';
import GamingHistory from './GamingHistory';
import GamingHistoryAbout from './GamingHistoryAbout';
import MangasReading from './MangasReading';
import MuOnlineTools from './MuOnlineTools';
import MuOnlineVersions from './MuOnlineVersions';
import Music from './Music';
import PersonalDiary from './PersonalDiary';
import Projects from './Projects';
import StarcraftMaps from './StarcraftMaps';
import StarcraftCampaigns from './StarcraftCampaigns';
import StarcraftMods from './StarcraftMods';
import YugiohPocDecks from './YugiohPocDecks';
import YugiohPocMods from './YugiohPocMods';

const models = db => {
  AppDiary.plugin(autoIncrement.plugin, 'AppDiary');
  DiabloIICharacters.plugin(autoIncrement.plugin, 'DiabloIICharacters');
  DiabloIIMods.plugin(autoIncrement.plugin, 'DiabloIIMods');
  DiabloIITools.plugin(autoIncrement.plugin, 'DiabloIITools');
  DiabloIISurvivalKits.plugin(autoIncrement.plugin, 'DiabloIISurvivalKits');
  FlashGames.plugin(autoIncrement.plugin, 'FlashGames');
  GamingHistory.plugin(autoIncrement.plugin, 'GamingHistory');
  GamingHistoryAbout.plugin(autoIncrement.plugin, 'GamingHistoryAbout');
  MangasReading.plugin(autoIncrement.plugin, 'MangasReading');
  MuOnlineTools.plugin(autoIncrement.plugin, 'MuOnlineTools');
  MuOnlineVersions.plugin(autoIncrement.plugin, 'MuOnlineVersions');
  Music.plugin(autoIncrement.plugin, 'Music');
  PersonalDiary.plugin(autoIncrement.plugin, 'PersonalDiary');
  Projects.plugin(autoIncrement.plugin, 'Projects');
  StarcraftMaps.plugin(autoIncrement.plugin, 'StarcraftMaps');
  StarcraftCampaigns.plugin(autoIncrement.plugin, 'StarcraftCampaigns');
  StarcraftMods.plugin(autoIncrement.plugin, 'StarcraftMods');
  YugiohPocMods.plugin(autoIncrement.plugin, 'YugiohPocMods');
  YugiohPocDecks.plugin(autoIncrement.plugin, 'YugiohPocDecks');

  return {
    AppDiary: db.model('AppDiary', AppDiary),
    DiabloIICharacters: db.model('DiabloIICharacters', DiabloIICharacters),
    DiabloIITools: db.model('DiabloIITools', DiabloIITools),
    DiabloIIMods: db.model('DiabloIIMods', DiabloIIMods),
    DiabloIISurvivalKits: db.model('DiabloIISurvivalKits', DiabloIISurvivalKits),
    FlashGames: db.model('FlashGames', FlashGames),
    GamingHistory: db.model('GamingHistory', GamingHistory),
    GamingHistoryAbout: db.model('GamingHistoryAbout', GamingHistoryAbout),
    MangasReading: db.model('MangasReading', MangasReading),
    MuOnlineTools: db.model('MuOnlineTools', MuOnlineTools),
    MuOnlineVersions: db.model('MuOnlineVersions', MuOnlineVersions),
    Music: db.model('Music', Music),
    PersonalDiary: db.model('PersonalDiary', PersonalDiary),
    Projects: db.model('Projects', Projects),
    StarcraftMaps: db.model('StarcraftMaps', StarcraftMaps),
    StarcraftCampaigns: db.model('StarcraftCampaigns', StarcraftCampaigns),
    StarcraftMods: db.model('StarcraftMods', StarcraftMods),
    YugiohPocMods: db.model('YugiohPocMods', YugiohPocMods),
    YugiohPocDecks: db.model('YugiohPocDecks', YugiohPocDecks)
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
