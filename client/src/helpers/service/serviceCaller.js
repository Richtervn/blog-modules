import _ from 'underscore';
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
    return response;
  }),

  commonPostMultiplePart: serviceWrapper(async (link, formBody) => {
    let apiLink = `/api/${link}`;
    const formData = new FormData();
    for (let key in formBody) {
      formData.append(key, formBody[key]);
    }
    const response = await fetch(apiLink, { method: 'POST-MULTIPLEPART', body: formData });
    return response;
  }),

  commonPostMultipleFile: serviceWrapper(async (link, formBody, fileField = 'File') => {
    let apiLink = `/api/${link}`;
    const formData = new FormData();
    for (let key in formBody[fileField]) {
      if (!_.contains(['length', 'item'])) {
        formData.append(`${fileField}${key}`, formBody[fileField][key]);
      }
    }
    for (let key in _.omit(formBody, fileField)) {
      formData.append(key, formBody[key]);
    }
    formData.append('_fileCount', formBody[fileField].length);
    const response = await fetch(apiLink, { method: 'POST-MULTIPLEPART', body: formData });
    return response;
  }),

  commonPut: serviceWrapper(async (link, formBody) => {
    let apiLink = `/api/${link}`;
    const options = {};
    options.method = 'PUT';
    options.body = JSON.stringify(formBody);
    options.headers = { 'Content-Type': 'application/json; charset=utf-8' };
    const response = await fetch(apiLink, options);
    return response;
  }),

  commonPost: serviceWrapper(async (link, formBody) => {
    let apiLink = `/api/${link}`;
    const options = {};
    options.method = 'POST';
    options.body = JSON.stringify(formBody);
    options.headers = { 'Content-Type': 'application/json; charset=utf-8' };
    const response = await fetch(apiLink, options);
    return response;
  }),

  commonPutMultiplePart: serviceWrapper(async (link, formBody) => {
    let apiLink = `/api/${link}`;
    const formData = new FormData();
    for (let key in formBody) {
      formData.append(key, formBody[key]);
    }
    const response = await fetch(apiLink, { method: 'PUT-MULTIPLEPART', body: formData });
    return response;
  }),

  commonDelete: serviceWrapper(async (link, id) => {
    let apiLink = `/api/${link}`;
    if (id) {
      apiLink += `/${id}`;
    }
    const response = await fetch(apiLink, { method: 'DELETE' });
    return response;
  })
};
