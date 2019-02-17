import './OpenWeatherMap.css';
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import classnames from 'classnames';

import { ContainerLoader } from 'common/Loaders';
import { CircleProgress } from 'components/Other';

export default ({ current, forecast, onGetCurrent, onGetForecast }) => {
  const [isRefreshing, setRefreshing] = useState(false);
  useEffect(() => {
    onGetForecast();
    onGetCurrent();
  }, []);
  useEffect(() => {
    setRefreshing(false);
  }, [forecast]);

  if (!current || !forecast) {
    return (
      <div id="owm-loader-container">
        <ContainerLoader />
      </div>
    );
  }

  return (
    <div id="open-weather-map">
      <div className="header">
        <div className="city">
          <div className="name">
            {current.name} - {current.sys.country}
          </div>
          <div className="date">{moment(current.dt * 1000).format('DD/MM/YYYY')}</div>
        </div>
        <a className="site" href="https://openweathermap.org" target="_blank" rel="noopener noreferrer">
          <img src="/images/icons/open-weather-map/site-logo.png" alt="OpenWeatherMap" />
          <div className="name">Open Weather Map</div>
        </a>
        <button
          onClick={() => {
            setRefreshing(true);
            onGetForecast();
            onGetCurrent();
          }}>
          {moment(current.dt * 1000).format('HH:mm')}&nbsp;&nbsp;
          <i className={classnames('fa fa-refresh', { 'fa-spin': isRefreshing })} />
        </button>
      </div>
      <div className="content">
        <div className="main-card">
          <div className="icons">
            {current.weather.map((w, i) => (
              <img key={i} src={`/images/icons/open-weather-map/${w.icon}.png`} alt={w.description} />
            ))}
          </div>
          <div className="temperature">
            <div className="current-temp">{current.main.temp}°C</div>
            <div className="temp-variant">
              <div className="min">{current.main.temp_min}°C</div>
              <div className="max">{current.main.temp_max}°C</div>
            </div>
          </div>
        </div>
        <div className="info-card">
          <div className="info-row">
            <div className="item">
              <div style={{ width: '120px' }}>
                <CircleProgress percentage={current.main.humidity} text={`${current.main.humidity}%`} />
              </div>
              <div className="label">Humidity</div>
            </div>
            <div className="item">
              <div style={{ width: '120px' }}>
                <CircleProgress percentage={current.clouds.all} text={`${current.clouds.all}%`} />
              </div>
              <div className="label">Cloud</div>
            </div>
            <div className="item">
              <div className="pressure">
                <div className="label">{current.main.pressure} hPa</div>
              </div>
              <div className="label">Atmospheric pressure</div>
            </div>
          </div>
          <div className="info-row">
            <div className="item">
              <div className="visibility">
                <div className="label">{current.visibility / 1000} km</div>
              </div>
              <div className="label">Visibility</div>
            </div>
            <div className="item">
              <div className="wind">
                <div className="label">{current.wind.speed} m/s</div>
                <div className="label">{current.wind.deg}°</div>
              </div>
              <div className="label">Wind</div>
            </div>
            <div className="item">
              <div className="rain">
                <div className="label">{current.rain ? current.rain['3h'] : 0} mm</div>
              </div>
              <div className="label">Rain volume</div>
            </div>
          </div>
        </div>
        <div className="local-time">
          <div className="local-time-card">
            <div className="icons">
              <img src="/images/icons/open-weather-map/sunrise.png" alt="sunrise" />
              <img src="/images/icons/open-weather-map/sunset.png" alt="sunrise" />
            </div>
            <div className="local-icon-container">
              <div className="layer1">
                <div className="parabol" />
              </div>
              <div className="left dot" />
              <div className="right dot" />
            </div>
            <div className="labels">
              <div>{moment(current.sys.sunrise * 1000).format('HH:mm')}</div>
              <div>{moment(current.sys.sunset * 1000).format('HH:mm')}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        {forecast.list.map((data, i) => (
          <div className="forecast-item" key={i}>
            <div className="timestamp">
              <div className="time">{moment(data.dt_txt, 'YYYY-MM-DD HH:mm:ss').format('HH:mm')}</div>
              <div className="date">{moment(data.dt_txt, 'YYYY-MM-DD HH:mm:ss').format('DD/MM')}</div>
            </div>
            <div className="forecast-content">
              <div className="forecast-icons">
                {data.weather.map((w, i) => (
                  <img key={i} src={`/images/icons/open-weather-map/${w.icon}.png`} alt={w.description} />
                ))}
              </div>
              <div className="forecast-temperature">
                <div className="forecast-temp">{data.main.temp}°C</div>
                <div className="forecast-temp-variant">
                  <div className="min">{data.main.temp_min}°C</div>
                  <div className="max">{data.main.temp_max}°C</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
