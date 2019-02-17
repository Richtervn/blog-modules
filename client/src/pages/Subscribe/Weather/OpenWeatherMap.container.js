import { connect } from 'react-redux';
import OpenWeatherMap from './OpenWeatherMap.component';

import { getOpenWeatherMapForecast, getOpenWeatherMapCurrent } from './Weather.module';

export default connect(
  ({ weather }) => ({
    current: weather.openWeatherMap.current,
    forecast: weather.openWeatherMap.forecast
  }),
  dispatch => ({
    onGetCurrent() {
      dispatch(getOpenWeatherMapCurrent());
    },
    onGetForecast() {
      dispatch(getOpenWeatherMapForecast());
    }
  })
)(OpenWeatherMap);
