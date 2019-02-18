import { actionCreator } from 'helpers';
import services from './Weather.services';

const GET_OPEN_WEATHER_MAP_CURRENT = 'weather/GET_OPEN_WEATHER_MAP_CURRENT';
const GET_OPEN_WEATHER_MAP_FORECAST = 'weather/GET_OPEN_WEATHER_MAP_FORECAST';

const GET_ACCU_WEATHER_CURRENT = 'weather/GET_ACCU_WEATHER_CURRENT';
const GET_ACCU_WEATHER_FORECAST = 'weather/GET_ACCU_WEATHER_FORECAST';

export const getOpenWeatherMapCurrent = () =>
  actionCreator(GET_OPEN_WEATHER_MAP_CURRENT, services.openWeatherMap.getCurrent, { allowMessage: true })();
export const getOpenWeatherMapForecast = () =>
  actionCreator(GET_OPEN_WEATHER_MAP_FORECAST, services.openWeatherMap.getForecast, { allowMessage: true })();

export const getAccuWeatherCurrent = () => actionCreator(GET_ACCU_WEATHER_CURRENT, services.accuWeather.getCurrent)();
export const getAccuWeatherForecast = () =>
  actionCreator(GET_ACCU_WEATHER_FORECAST, services.accuWeather.getForecast)();

const initialState = {
  openWeatherMap: { current: null, forecast: null },
  accuWeather: { current: null, forecast: null }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${GET_OPEN_WEATHER_MAP_CURRENT}_SUCCESS`:
      return { ...state, openWeatherMap: { ...state.openWeatherMap, current: action.payload } };
    case `${GET_OPEN_WEATHER_MAP_FORECAST}_SUCCESS`:
      return { ...state, openWeatherMap: { ...state.openWeatherMap, forecast: action.payload } };
    case `${GET_ACCU_WEATHER_CURRENT}_SUCCESS`:
      return { ...state, accuWeather: { ...state.accuWeather, current: action.payload[0] } };
    case `${GET_ACCU_WEATHER_FORECAST}_SUCCESS`:
      return { ...state, accuWeather: { ...state.accuWeather, forecast: action.payload } };
    default:
      return state;
  }
};
