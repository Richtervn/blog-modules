import { serviceWrapper } from 'utilities';

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
  }),

  commonPostMultiplePart: serviceWrapper(async (link, formBody) => {
    let apiLink = `/api/${link}`;
    const formData = new FormData();
    for (let key in formBody) {
      formData.append(key, formBody[key]);
    }
    const response = await fetch(apiLink, { method: 'POST-MULTIPLEPART', body: formData });
    const resp = await response.json();
    return resp;
  })
};
