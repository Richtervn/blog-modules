const replaceObjectData = (obj, apiHost) => {
  Object.keys(obj).forEach(key => {
    if (obj[key] && typeof obj[key] === 'string') {
      obj[key] = obj[key].replace('./public', apiHost);
    }
  });
  return obj;
};

export default async (response, apiHost) => {
  try {
    let respData = await response.json();
    if (respData instanceof Array) {
      respData = respData.map(obj => replaceObjectData(obj, apiHost));
    } else {
      respData = replaceObjectData(respData, apiHost);
    }
    return respData;
  } catch (e) {
    return response;
  }
};
