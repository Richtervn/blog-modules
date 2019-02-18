import { connect } from 'react-redux';
import AccuWeatherCard from './AccuWeatherCard.component';

import { getAccuWeatherCurrent } from 'pages/Subscribe/Weather/Weather.module';

export default connect(
  ({ weather }) => ({
    weather: weather.accuWeather.current
  }),
  dispatch => ({
    onGetWeather() {
      dispatch(getAccuWeatherCurrent());
    }
  })
)(AccuWeatherCard);
