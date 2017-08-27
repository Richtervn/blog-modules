import autoIncrement from 'mongoose-auto-increment';

import FlashGames from './FlashGames';
import MangasReading from './MangasReading';
import AppDiary from './AppDiary';
import PersonalDiary from './PersonalDiary';

const models = db => {
  FlashGames.plugin(autoIncrement.plugin, 'FlashGames');
  MangasReading.plugin(autoIncrement.plugin, 'MangasReading');
  AppDiary.plugin(autoIncrement.plugin, 'AppDiary');
  PersonalDiary.plugin(autoIncrement.plugin, 'PersonalDiary');

  const FlashGamesSchema = db.model('FlashGames', FlashGames);
  const MangasReadingSchema = db.model('MangasReading', MangasReading);
  const AppDiarySchema = db.model('AppDiary', AppDiary);
  const PersonalDiarySchema = db.model('PersonalDiary', PersonalDiary);

  return {
    FlashGames: FlashGamesSchema,
    MangasReading: MangasReadingSchema,
    AppDiary: AppDiarySchema,
    PersonalDiary: PersonalDiarySchema
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
