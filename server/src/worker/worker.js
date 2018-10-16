import chalk from 'chalk';
import { CronJob } from 'cron';
import mangaNewDectector from './mangaNewDectector';
import mangaCheckStatus from './mangaCheckStatus';
import NotificationHandler from './NotificationHandler';

export default ({ MangasReading }, factories, io) => {
  const notificationHandler = new NotificationHandler(io);

  new CronJob({
    cronTime: '0 * * * *',
    runOnInit: true,
    start: true,
    onTick: async () => {
      console.log(`${chalk.bold.yellow('[Worker]')} Checking new mangas`);
      await mangaNewDectector(MangasReading, factories, notificationHandler);
    }
  });
  
  new CronJob({
    cronTime: '0 0 1 * *',
    runOnInit: true,
    start: true,
    onTick: async () => {
      console.log(`${chalk.bold.yellow('[Worker]')} Checking mangas status`);
      await mangaCheckStatus(MangasReading, notificationHandler);
    }
  });
};
