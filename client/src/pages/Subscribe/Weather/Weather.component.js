import './Weather.css';
import React from 'react';

import OpenWeatherMap from './OpenWeatherMap.container';
import AccuWeather from './AccuWeather.container';

import { getAccuWeatherBackground } from 'utils';

export default ({ weatherCode }) => (
  <div
    id="weather-page"
    style={{
      backgroundImage: `url(${getAccuWeatherBackground(weatherCode)})`,
      backgroundSize: 'cover'
    }}>
    <div className="overlay" style={{ background: 'rgba(0, 0, 0, 0.6)' }}>
      <OpenWeatherMap />
      <div style={{ marginTop: '10px' }} />
      <AccuWeather />
    </div>
  </div>
);
