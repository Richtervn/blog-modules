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

  const FlashGamesSchema = db.model('FlashGames', FlashGames);
  const MangasReadingSchema = db.model('MangasReading', MangasReading);
  const AppDiarySchema = db.model('AppDiary', AppDiary);
  const PersonalDiarySchema = db.model('PersonalDiary', PersonalDiary);
  const YugiohPocModsSchema = db.model('YugiohPocMods', YugiohPocMods);
  const YugiohPocDecksSchema = db.model('YugiohPocDecks', YugiohPocDecks);
  const MusicSchema = db.model('Music', Music);
  const StarcraftMapsSchema = db.model('StarcraftMaps', StarcraftMaps);
  const StarcraftCampaignsSchema = db.model('StarcraftCampaigns', StarcraftCampaigns);
  const StarcraftModsSchema = db.model('StarcraftMods', StarcraftMods);

  return {
    FlashGames: FlashGamesSchema,
    MangasReading: MangasReadingSchema,
    AppDiary: AppDiarySchema,
    PersonalDiary: PersonalDiarySchema,
    YugiohPocMods: YugiohPocModsSchema,
    YugiohPocDecks: YugiohPocDecksSchema,
    Music: MusicSchema,
    StarcraftMaps: StarcraftMapsSchema,
    StarcraftCampaigns: StarcraftCampaignsSchema,
    StarcraftMods: StarcraftModsSchema
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
