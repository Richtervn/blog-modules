/* eslint-disable */
import './OpenWeatherMap.css';
import React, { useEffect } from 'react';
import currentData from './current.data';

// coord
// coord.lon City geo location, longitude
// coord.lat City geo location, latitude
// weather (more info Weather condition codes)
// weather.id Weather condition id
// weather.main Group of weather parameters (Rain, Snow, Extreme etc.)
// weather.description Weather condition within the group
// weather.icon Weather icon id

// main
// main.temp Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
// main.pressure Atmospheric pressure (on the sea level, if there is no sea_level or grnd_level data), hPa
// main.humidity Humidity, %
// main.temp_min Minimum temperature at the moment. This is deviation from current temp that is possible for large cities and megalopolises geographically expanded (use these parameter optionally). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
// main.temp_max Maximum temperature at the moment. This is deviation from current temp that is possible for large cities and megalopolises geographically expanded (use these parameter optionally). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
// main.sea_level Atmospheric pressure on the sea level, hPa
// main.grnd_level Atmospheric pressure on the ground level, hPa
// wind
// wind.speed Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour.
// wind.deg Wind direction, degrees (meteorological)
// clouds
// clouds.all Cloudiness, %
// rain
// rain.1h Rain volume for the last 1 hour, mm
// rain.3h Rain volume for the last 3 hours, mm
// snow
// snow.1h Snow volume for the last 1 hour, mm
// snow.3h Snow volume for the last 3 hours, mm
// dt Time of data calculation, unix, UTC
// sys
// sys.type Internal parameter
// sys.id Internal parameter
// sys.message Internal parameter
// sys.country Country code (GB, JP etc.)
// sys.sunrise Sunrise time, unix, UTC
// sys.sunset Sunset time, unix, UTC
// id City ID
// name City name
// cod Internal parameter

//***ForeCast****
// code Internal parameter
// message Internal parameter
// city
// city.id City ID
// city.name City name
// city.coord
// city.coord.lat City geo location, latitude
// city.coord.lon City geo location, longitude
// city.country Country code (GB, JP etc.)
// cnt Number of lines returned by this API call
// list
// list.dt Time of data forecasted, unix, UTC
// list.main
// list.main.temp Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
// list.main.temp_min Minimum temperature at the moment of calculation. This is deviation from 'temp' that is possible for large cities and megalopolises geographically expanded (use these parameter optionally). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
// list.main.temp_max Maximum temperature at the moment of calculation. This is deviation from 'temp' that is possible for large cities and megalopolises geographically expanded (use these parameter optionally). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
// list.main.pressure Atmospheric pressure on the sea level by default, hPa
// list.main.sea_level Atmospheric pressure on the sea level, hPa
// list.main.grnd_level Atmospheric pressure on the ground level, hPa
// list.main.humidity Humidity, %
// list.main.temp_kf Internal parameter
// list.weather (more info Weather condition codes)
// list.weather.id Weather condition id
// list.weather.main Group of weather parameters (Rain, Snow, Extreme etc.)
// list.weather.description Weather condition within the group
// list.weather.icon Weather icon id
// list.clouds
// list.clouds.all Cloudiness, %
// list.wind
// list.wind.speed Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour.
// list.wind.deg Wind direction, degrees (meteorological)
// list.rain
// list.rain.3h Rain volume for last 3 hours, mm
// list.snow
// list.snow.3h Snow volume for last 3 hours
// list.dt_txt Data/time of calculation, UTC

export default ({ current = currentData, forecast, onGetCurrent, onGetForecast }) => {
  // useEffect(() => {
  //   onGetForecast();
  // }, []);

  return <div id="open-weather-map">.</div>;
};
