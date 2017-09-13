import autoIncrement from 'mongoose-auto-increment';

import FlashGames from './FlashGames';
import MangasReading from './MangasReading';
import AppDiary from './AppDiary';
import PersonalDiary from './PersonalDiary';
import YugiohPocMods from './YugiohPocMods';
import YugiohPocDecks from './YugiohPocDecks';
import Music from './Music';

const models = db => {
  FlashGames.plugin(autoIncrement.plugin, 'FlashGames');
  MangasReading.plugin(autoIncrement.plugin, 'MangasReading');
  AppDiary.plugin(autoIncrement.plugin, 'AppDiary');
  PersonalDiary.plugin(autoIncrement.plugin, 'PersonalDiary');
  YugiohPocMods.plugin(autoIncrement.plugin, 'YugiohPocMods');
  YugiohPocDecks.plugin(autoIncrement.plugin, 'YugiohPocDecks');
  Music.plugin(autoIncrement.plugin, 'Music');

  const FlashGamesSchema = db.model('FlashGames', FlashGames);
  const MangasReadingSchema = db.model('MangasReading', MangasReading);
  const AppDiarySchema = db.model('AppDiary', AppDiary);
  const PersonalDiarySchema = db.model('PersonalDiary', PersonalDiary);
  const YugiohPocModsSchema = db.model('YugiohPocMods', YugiohPocMods);
  const YugiohPocDecksSchema = db.model('YugiohPocDecks', YugiohPocDecks);
  const MusicSchema = db.model('Music', Music);

  return {
    FlashGames: FlashGamesSchema,
    MangasReading: MangasReadingSchema,
    AppDiary: AppDiarySchema,
    PersonalDiary: PersonalDiarySchema,
    YugiohPocMods: YugiohPocModsSchema,
    YugiohPocDecks: YugiohPocDecksSchema,
    Music: MusicSchema
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
