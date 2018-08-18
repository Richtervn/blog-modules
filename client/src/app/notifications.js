import socket from './socket';
import config from './config';

const Notification = window.Notification;

if (Notification.permission !== 'granted') {
  Notification.requestPermission();
}

socket.on('appManga/notification', data => {
  const notification = new Notification(data.title, {
    body: data.body,
    icon: data.icon.replace('./public', config.API_HOST)
  });
  if (data.link) {
    notification.onclick = e => {
      e.preventDefault();
      e.stopImmediatePropagation();
      window.open(data.link, '_blank');
    };
  }
});
