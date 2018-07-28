import { CronJob } from 'cron';
import mangaNewDectector from './mangaNewDectector';
import mangaCheckStatus from './mangaCheckStatus';

export default ({ MangasReading }, factories) => {
  new CronJob({
    cronTime: '0 0 */4 * * *',
    runOnInit: true,
    start: true,
    onTick: async () => {
      console.log('[Worker] Checking new mangas');
      mangaNewDectector(MangasReading, factories);
    }
  });
  new CronJob({
    cronTime: '0 0 0 0 */1 *',
    runOnInit: true,
    start: true,
    onTick: async () => {
      console.log('[Worker] Checking mangas status');
      mangaCheckStatus(MangasReading);
    }
  });
};
