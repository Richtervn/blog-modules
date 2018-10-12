import { MongooseAutoIncrementID } from 'mongoose-auto-increment-reworked';
import * as schemas from './schemas';

const models = db => {
  const dbModels = {};
  for (let key in schemas) {
    schemas[key].plugin(MongooseAutoIncrementID.plugin, { modelName: key });
    dbModels[key] = db.model(key, schemas[key]);
  }
  return dbModels;
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
