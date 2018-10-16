class NotificationHandler {
  constructor(io) {
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

export default NotificationHandler;
