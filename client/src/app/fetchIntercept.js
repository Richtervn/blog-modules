import appConfig from './config';
import fetchIntercept from 'fetch-intercept';
import { dataTransform } from 'utils';

const whiteListedRequests = ['api.openweathermap.org', 'dataservice.accuweather.com', 'get-internal-source'];
const whiteListedResponses = ['api/utils/downloaded_mp3'];

fetchIntercept.register({
  request(url, config) {
    let isWhiteListed = false;
    for (let i = 0; i < whiteListedRequests.length; i++) {
      if (url.indexOf(whiteListedRequests[i]) !== -1) {
        isWhiteListed = true;
        break;
      }
    }

    if (isWhiteListed) return [url, config];

    url = appConfig.API_HOST + url;
    if (config && config.method === 'POST') {
      config.headers = { 'Content-Type': 'application/json; charset=utf-8' };
    }
    if (config && config.method === 'PUT') {
      config.headers = { 'Content-Type': 'application/json; charset=utf-8' };
    }
    if (config && config.method === 'POST-MULTIPLEPART') {
      config.method = 'POST';
    }
    if (config && config.method === 'PUT-MULTIPLEPART') {
      config.method = 'PUT';
    }
    return [url, config];
  },

  response: async response => {
    let isWhiteListed = false;
    for (let i = 0; i < whiteListedResponses.length; i++) {
      if (response.url.indexOf(whiteListedResponses[i]) !== -1) {
        isWhiteListed = true;
        break;
      }
    }

    if (isWhiteListed) return response;

    const respData = await dataTransform(response, appConfig.API_HOST);
    return respData;
  }
});
