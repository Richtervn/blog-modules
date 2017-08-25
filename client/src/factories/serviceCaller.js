import {serviceWrapper} from 'utilities';

export default {
  commonGet: serviceWrapper(async (link, params, query) => {
    let apiLink = `/api/${link}`;
    if (params) {
      params.forEach(param => (apiLink += `/${param}`));
    }
    if (query) {
      for (let key in query) {
        apiLink += apiLink.indexOf('?') == -1 ? '?' : '&';
        apiLink += `${key}=${query[key]}`;
      }
    }
    const response = await fetch(apiLink, { method: 'GET' });
    const resp = await response.json();
    return resp;
  })
};
