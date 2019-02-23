import { serviceCaller } from 'helpers';

const { commonPost } = serviceCaller;

export default {
  downloadMP3(formBody) {
    const data = commonPost('utils/download_youtube_mp3', formBody);
    return data;
  },
  getDownloadedMP3: async query => {
    let apiLink = `/api/utils/downloaded_mp3`;
    for (let key in query) {
      apiLink += apiLink.indexOf('?') === -1 ? '?' : '&';
      apiLink += `${key}=${query[key]}`;
    }

    const response = await fetch(apiLink, { method: 'GET' });
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${decodeURIComponent(query.fileName)}.mp3`;
    document.body.appendChild(a);
    a.click();
    a.remove();

    return;
  }
};
