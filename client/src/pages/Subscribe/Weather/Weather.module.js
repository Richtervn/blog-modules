import { actionCreator } from 'helpers';
import services from './Weather.services';

const GET_OPEN_WEATHER_MAP_CURRENT = 'weather/GET_OPEN_WEATHER_MAP_CURRENT';
const GET_OPEN_WEATHER_MAP_FORECAST = 'weather/GET_OPEN_WEATHER_MAP_FORECAST';

export const getOpenWeatherMapCurrent = () =>
  actionCreator(GET_OPEN_WEATHER_MAP_CURRENT, services.openWeatherMap.getCurrent)();
export const getOpenWeatherMapForecast = () =>
  actionCreator(GET_OPEN_WEATHER_MAP_FORECAST, services.openWeatherMap.getForecast)();

const initialState = { openWeatherMap: { current: null, forecast: null } };

export default (state = initialState, action) => {
  switch (action.type) {
    case `${GET_OPEN_WEATHER_MAP_CURRENT}_SUCCESS`:
      return { ...state, openWeatherMap: { ...state.openWeatherMap, current: action.payload } };
    case `${GET_OPEN_WEATHER_MAP_FORECAST}_SUCCESS`:
      return { ...state, openWeatherMap: { ...state.openWeatherMap, forecast: action.payload } };
    default:
      return state;
  }
};
