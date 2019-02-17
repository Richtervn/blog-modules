import appConfig from 'app/config';

const accuHN = 353412;
const accuApiKey = appConfig.ACCU_WEATHER_API_KEY;
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

const makeRequest = async (url, query, params) => {
  if (params) {
    params.forEach(param => (url += `/${param}`));
  }

  for (let key in query) {
    url += url.indexOf('?') === -1 ? '?' : '&';
    url += `${key}=${query[key]}`;
  }
  const response = await fetch(url, { method: 'GET' });
  return response;
};

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
  },
  accuWeather: {
    getCurrent(location = accuHN) {
      const data = makeRequest(
        'http://dataservice.accuweather.com/currentconditions/v1',
        { apikey: accuApiKey, details: true },
        [location]
      );
      return data;
    },
    getForecast(location = accuHN) {
      const data = makeRequest(
        'http://dataservice.accuweather.com/forecasts/v1/daily/5day',
        { apikey: accuApiKey, details: true, metric: true },
        [location]
      );
      return data;
    }
  }
};
