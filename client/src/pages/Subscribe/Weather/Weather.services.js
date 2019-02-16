import appConfig from 'app/config';

// const accuHN = 353412;
// const accuApiKey = appConfig.ACCU_WEATHER_API_KEY;
const owmHN = 1581130;
const owmAppId = appConfig.OPEN_WEATHER_APP_ID;

const parserOWMQuery = (query = {}) => {
  const { lat, lon, cityId, cityName, zipCode } = query;
  if (lat && lon) {
    return { lat, lon };
  }
  if (cityName) {
    return { q: cityName };
  }
  if (cityId) {
    return { id: cityId };
  }
  if (zipCode) {
    return { zip: zipCode };
  }
  return { id: owmHN };
};

const makeRequest = async (url, query) => {
  for (let key in query) {
    url += url.indexOf('?') === -1 ? '?' : '&';
    url += `${key}=${query[key]}`;
  }
  const response = await fetch(url, { method: 'GET' });
  return response;
};

// http://dataservice.accuweather.com/currentconditions/v1/353412?apikey=4DBMJElm9nnqf6kzb5qXgBXO2u0xWlGa&language=vi-vn&details=true

export default {
  openWeatherMap: {
    getCurrent(query) {
      const data = makeRequest('http://api.openweathermap.org/data/2.5/weather', {
        ...parserOWMQuery(query),
        APPID: owmAppId,
        units: 'metric'
      });
      return data;
    },
    getForecast(query) {
      const data = makeRequest('http://api.openweathermap.org/data/2.5/forecast', {
        ...parserOWMQuery(query),
        APPID: owmAppId,
        units: 'metric'
      });
      return data;
    }
  }
};
