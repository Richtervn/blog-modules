import socket from './socket';
import config from './config';
import store from './store';

import { QUICK_UPDATE } from 'pages/MangasReading';

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
  if (data.type === 'UPDATE_MANGAS_READING_CHAPTER') {
    store.dispatch({ type: `${QUICK_UPDATE}_SUCCESS`, payload: data.data });
  }
});
