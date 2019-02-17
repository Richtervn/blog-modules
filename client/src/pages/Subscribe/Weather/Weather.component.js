import './Weather.css';
import React from 'react';

import OpenWeatherMap from './OpenWeatherMap.container';
import AccuWeather from './AccuWeather.container';

export default () => {
  return (
    <div
      id="weather-page"
      style={{ backgroundImage: `url(/images/backgrounds/light-rain.jpg)`, backgroundSize: 'cover' }}>
      <div className="overlay" style={{ background: 'rgba(0, 0, 0, 0.6)' }}>
        <OpenWeatherMap />
        <div style={{ marginTop: '10px' }} />
        <AccuWeather />
      </div>
    </div>
  );
};
