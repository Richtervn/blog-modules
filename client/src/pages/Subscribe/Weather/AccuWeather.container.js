import { connect } from 'react-redux';
import AccuWeather from './AccuWeather.component';

import { getAccuWeatherCurrent, getAccuWeatherForecast } from './Weather.module';

export default connect(
  ({ weather }) => ({
    // current: weather.accuWeather.current,
    // forecast: weather.accuWeather.forecast
  }),
  dispatch => ({
    onGetCurrent() {
      dispatch(getAccuWeatherCurrent());
    },
    onGetForecast() {
      dispatch(getAccuWeatherForecast());
    }
  })
)(AccuWeather);
