import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';
import Promise from 'bluebird';
import chalk from 'chalk';

export default config => {
  Promise.promisifyAll(mongoose);
  Promise.promisifyAll(autoIncrement);
  mongoose.Promise = Promise;
  mongoose.connect(config.mongodbUrl, { useMongoClient: true });

  const db = mongoose.connection;
  autoIncrement.initialize(db);

  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log(`${chalk.bold.green('[APP]')} Database connect successfully`);
  });

  return db;
};
