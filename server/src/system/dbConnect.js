import mongoose from 'mongoose';
import Promise from 'bluebird';
import chalk from 'chalk';

export default config => {
  Promise.promisifyAll(mongoose);

  mongoose.Promise = Promise;
  mongoose.connect(
    config.mongodbUrl,
    { useNewUrlParser: true },
  );
  mongoose.set('useCreateIndex', true);

  const db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log(`${chalk.bold.green('[APP]')} Database connect successfully`);
  });

  return db;
};
