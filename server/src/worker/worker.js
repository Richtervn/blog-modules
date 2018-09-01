import chalk from 'chalk';
import { CronJob } from 'cron';
import mangaNewDectector from './mangaNewDectector';
import mangaCheckStatus from './mangaCheckStatus';

export default ({ MangasReading }, factories, io) => {
  class NotificationHandler {
    constructor() {
      this.unreadNotifications = [];
      this.clientConnected = false;

      io.on('connection', client => {
        if (!this.clientConnected) {
          this.clientConnected = true;
          this.client = client;
        }
        if (this.unreadNotifications.length > 0) {
          this.sendUnreadNotifications();
        }
        client.on('disconnect', () => (this.clientConnected = false));
      });
    }

    send(eventName, data) {
      if (!this.clientConnected) {
        this.unreadNotifications.push({ eventName, data });
      } else {
        this.client.emit(eventName, data);
      }
    }

    sendUnreadNotifications() {
      this.unreadNotifications.forEach(notification => this.client.emit(notification.eventName, notification.data));
      this.unreadNotifications = [];
    }
  }

  const notificationHandler = new NotificationHandler();

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
