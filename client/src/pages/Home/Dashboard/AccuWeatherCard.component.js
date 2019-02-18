import './AccuWeatherCard.css';
import React, { useEffect } from 'react';
import moment from 'moment';

import { withRouter } from 'react-router-dom';

import { CircleProgress } from 'components/Other';
import { ContainerLoader } from 'common/Loaders';
import { getAccuWeatherBackground } from 'utils';

const getThermometerProps = uvIndex => {
  if (uvIndex <= 4) {
    return { className: `fa fa-2x fa-thermometer-${uvIndex}` };
  } else {
    return { className: 'fa fa-2x fa-thermometer-4', style: { color: `rgba(200, 0, 0, 0.${uvIndex})` } };
  }
};

const AccuWeatherCard = ({ weather, onGetWeather, history }) => {
  useEffect(() => {
    onGetWeather();
  }, []);

  if (!weather) {
    return (
      <div className="accu-weather-card">
        <ContainerLoader color="#222"/>
      </div>
    );
  }

  return (
    <div
      onClick={() => history.push('/weather')}
      className="accu-weather-card"
      style={{ backgroundImage: `url(${getAccuWeatherBackground(weather.WeatherIcon)})` }}>
      <div className="overlay">
        <div className="city">Hà Nội</div>
        <div className="date">{moment(weather.EpochTime * 1000).format('DD/MM/YYYY')}</div>
        <div className="weather-wrapper">
          <div className="weather-icon">
            <div className="icon">
              <img src={`/images/icons/accu-weather/${weather.WeatherIcon}.png`} alt={weather.WeatherText} />
            </div>
            <div className="weather-text">{weather.WeatherText}</div>
          </div>
          <div className="current-temperature">
            {weather.Temperature.Metric.Value}°C
            {weather.Past24HourTemperatureDeparture.Metric.Value > 0 && (
              <div className="increase">
                <i className="fa fa-sort-up" />
                <div className="value">&nbsp;{weather.Past24HourTemperatureDeparture.Metric.Value}°C</div>
              </div>
            )}
            {weather.Past24HourTemperatureDeparture.Metric.Value < 0 && (
              <div className="decrease">
                <i className="fa fa-sort-down" />
                <div className="value">&nbsp;{weather.Past24HourTemperatureDeparture.Metric.Value}°C</div>
              </div>
            )}
          </div>
        </div>
        <div className="weather-info">
          <div>{`Outdoor: ${weather.ApparentTemperature.Metric.Value}°C`}</div>
          <div>{`RealFeel®: ${weather.RealFeelTemperature.Metric.Value} °C`}</div>
          <div className="uv">
            <i {...getThermometerProps(weather.UVIndex)} />
            UV {weather.UVIndexText}: {weather.UVIndex}
          </div>
        </div>
        <div className="info-card">
          <div className="info-row">
            <div className="item">
              <div style={{ width: '120px' }}>
                <CircleProgress percentage={weather.RelativeHumidity} text={`${weather.RelativeHumidity}%`} />
              </div>
              <div className="label">Humidity</div>
            </div>
            <div className="item">
              <div style={{ width: '120px' }}>
                <CircleProgress percentage={weather.CloudCover} text={`${weather.CloudCover}%`} />
              </div>
              <div className="label">Cloud</div>
              <div className="sub">
                Ceiling: {weather.Ceiling.Metric.Value} {weather.Ceiling.Metric.Unit}
              </div>
            </div>
            <div className="item">
              <div className="pressure">
                <div className="label">
                  {weather.Pressure.Metric.Value} {weather.Pressure.Metric.Unit}
                  {weather.PressureTendency.Code === 'F' && <i className="fa fa-angle-double-down" />}
                  {weather.PressureTendency.Code === 'R' && <i className="fa fa-angle-double-up" />}
                </div>
              </div>
              <div className="label">Atmospheric pressure</div>
            </div>
          </div>
          <div className="info-row">
            <div className="item">
              <div className="visibility">
                <div className="label">
                  {weather.Visibility.Metric.Value} {weather.Visibility.Metric.Unit}
                </div>
              </div>
              <div className="label">Visibility</div>
              {weather.ObstructionsToVisibility && <div className="sub">({weather.ObstructionsToVisibility})</div>}
            </div>
            <div className="item">
              <div className="wind">
                <div className="label">
                  {weather.Wind.Speed.Metric.Value} {weather.Wind.Speed.Metric.Unit}
                </div>
                <div className="label">{weather.Wind.Direction.Degrees}°</div>
              </div>
              <div className="label">Wind</div>
              <div className="sub">
                Chill: {weather.WindChillTemperature.Metric.Value}°C | Gust: {weather.WindGust.Speed.Metric.Value}{' '}
                {weather.WindGust.Speed.Metric.Unit}
              </div>
            </div>
            <div className="item">
              <div className="rain">
                <div className="label">
                  {weather.HasPrecipitation ? weather.Precip1hr.Metric.Value : 0}{' '}
                  {weather.HasPrecipitation ? weather.Precip1hr.Metric.Unit : 'mm'}
                </div>
              </div>
              <div className="label">{weather.HasPrecipitation ? weather.PrecipitationType : 'Rain'}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(AccuWeatherCard);
