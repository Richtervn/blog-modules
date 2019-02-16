import moment from 'moment';

moment.locale('vi');

const appConfig = {
  API_HOST: 'http://localhost:3000',
  SOCKET_HOST: 'http://localhost:3001',
  OPEN_WEATHER_APP_ID: process.env.REACT_APP_OPEN_WEATHER_MAP_APPID,
  ACCU_WEATHER_API_KEY: process.env.REACT_APP_ACCU_WEATHER_API_KEY
};

window.appConfig = appConfig;

export default appConfig;
