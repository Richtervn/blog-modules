'use strict';

const interval = 1000 * 60 * 60;

const microsecondsPerWeek = 1000 * 60 * 60 * 24 * 7;
const oneWeekAgo = new Date().getTime() - microsecondsPerWeek;

let supportedSites = {};

const getSupportedSites = () => {
  const client = new XMLHttpRequest();
  client.onload = supportedSitesResponseHandler;
  client.open('GET', 'http://localhost:3000/api/mangas_reading/supported_sites');
  client.send();
};

function supportedSitesResponseHandler() {
  if (this.status == 200 || this.status == 304) {
    supportedSites = JSON.parse(this.responseText);
    main();
  }
}

const checkMyHistory = () => {
  chrome.history.search({ text: '', startTime: oneWeekAgo }, historyItems => {
    const validItems = historyItems.filter(item => {
      const url = item.url.slice(0);

      const urlFrags = url
        .replace('http://', '')
        .replace('https://', '')
        .replace('.html', '')
        .replace('www.', '')
        .split('/');

      const site = urlFrags[0].replace('www.', '');
      return supportedSites.subscribe.includes(site);
    });
    if (validItems.length > 0) {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'http://localhost:3000/api/mangas_reading/history');
      xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
      xhr.send(JSON.stringify(validItems));
    }
  });
};

const main = () => {
  if (!supportedSites.subscribe) {
    getSupportedSites();
    return;
  }
  checkMyHistory();
};

main();
setInterval(() => {
  main();
}, interval);
