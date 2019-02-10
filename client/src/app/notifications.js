import socket from './socket';
import appConfig from './config';
import store from './store';

import { QUICK_UPDATE } from 'pages/Collections/MangasReading';

const Notification = window.Notification;

if (Notification.permission !== 'granted') {
  Notification.requestPermission();
}

socket.on('appManga/notification', data => {
  const notification = new Notification(data.title, {
    body: data.body,
    icon: data.icon.replace('./public', appConfig.API_HOST)
  });
  if (data.link) {
    notification.onclick = e => {
      e.preventDefault();
      e.stopImmediatePropagation();
      window.open(data.link, '_blank');
    };
  }
  if (data.type === 'UPDATE_MANGAS_READING_CHAPTER') {
    store.dispatch({
      type: `${QUICK_UPDATE}_SUCCESS`,
      payload: { ...data.data, CoverUri: data.data.CoverUri.replace('./public', appConfig.API_HOST) }
    });
  }
});
