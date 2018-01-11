import Promise from 'bluebird';
import fetchIntercept from 'fetch-intercept';

fetchIntercept.register({
  request: function(url, config) {
    url = process.env.API_HOST + url;
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

  requestError: function(error) {
    console.log('requestError');
    console.log(error);
    return Promise.reject(error);
  },

  response: function(response) {
    return response;
  },

  responseError: function(error) {
    console.log('responseError');
    console.log(error);
    return Promise.reject(error);
  }
});