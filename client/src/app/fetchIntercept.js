import appConfig from './config';
import fetchIntercept from 'fetch-intercept';
import { dataTransform } from 'utils';

fetchIntercept.register({
  request(url, config) {
    // console.log(url);
    if (url.indexOf('get-internal-source') !== -1) {
      return [url, config];
    }
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
    const respData = await dataTransform(response, appConfig.API_HOST);
    return respData;
  }
});
