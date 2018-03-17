import serviceWrapper from './serviceWrapper';

export default {
  commonGet: serviceWrapper(async (link, params, query) => {
    let apiLink = `/api/${link}`;
    if (params) {
      params.forEach(param => (apiLink += `/${param}`));
    }
    if (query) {
      for (let key in query) {
        apiLink += apiLink.indexOf('?') === -1 ? '?' : '&';
        apiLink += `${key}=${query[key]}`;
      }
    }
    const response = await fetch(apiLink, { method: 'GET' });
    // const resp = await response.json();
    return response;
  }),

  commonPostMultiplePart: serviceWrapper(async (link, formBody) => {
    let apiLink = `/api/${link}`;
    const formData = new FormData();
    for (let key in formBody) {
      formData.append(key, formBody[key]);
    }
    const response = await fetch(apiLink, { method: 'POST-MULTIPLEPART', body: formData });
    // const resp = await response.json();
    return response;
  }),

  commonPut: serviceWrapper(async (link, formBody) => {
    let apiLink = `/api/${link}`;
    const options = {};
    options.method = 'PUT';
    options.body = JSON.stringify(formBody);
    options.headers = { 'Content-Type': 'application/json; charset=utf-8' };
    const response = await fetch(apiLink, options);
    // const resp = await response.json();
    return response;
  }),

  commonPost: serviceWrapper(async (link, formBody) => {
    let apiLink = `/api/${link}`;
    const options = {};
    options.method = 'POST';
    options.body = JSON.stringify(formBody);
    options.headers = { 'Content-Type': 'application/json; charset=utf-8' };
    const response = await fetch(apiLink, options);
    // const resp = await response.json();
    return response;
  }),

  commonPutMultiplePart: serviceWrapper(async (link, formBody) => {
    let apiLink = `/api/${link}`;
    const formData = new FormData();
    for (let key in formBody) {
      formData.append(key, formBody[key]);
    }
    const response = await fetch(apiLink, { method: 'PUT-MULTIPLEPART', body: formData });
    // const resp = await response.json();
    return response;
  }),

  commonDelete: serviceWrapper(async link => {
    let apiLink = `/api/${link}`;
    const response = await fetch(apiLink, { method: 'DELETE' });
    // const resp = await response.json();
    return response;
  })
};
