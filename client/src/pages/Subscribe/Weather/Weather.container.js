import { connect } from 'react-redux';
import Weather from './Weather.component';

export default connect(({ weather }) => ({
	weatherCode: weather.accuWeather.current ? weather.accuWeather.current.WeatherIcon : null
}))(Weather);
