import './Weather.css';
import React from 'react';

import OpenWeatherMap from './OpenWeatherMap.container';
import AccuWeather from './AccuWeather.container';

const backgrounds = [
  { codes: [1, 2, 3, 4, 5, 6], url: '/images/backgrounds/sunny.jpg' },
  { codes: [12, 13, 14, 16, 17], url: '/images/backgrounds/light-rain.jpg' }
];

const getBackground = weatherCode => {
  let bgUrl = '/images/backgrounds/sunny.jpg';
  if (weatherCode === null) {
    return bgUrl;
  }

  for (let i = 0; i < backgrounds.length; i++) {
    if (backgrounds[i].codes.includes(weatherCode)) {
      bgUrl = backgrounds[i].url;
      break;
    }
  }

  return bgUrl;
};

export default ({ weatherCode }) => (
  <div id="weather-page" style={{ backgroundImage: `url(${getBackground(weatherCode)})`, backgroundSize: 'cover' }}>
    <div className="overlay" style={{ background: 'rgba(0, 0, 0, 0.6)' }}>
      <OpenWeatherMap />
      <div style={{ marginTop: '10px' }} />
      <AccuWeather />
    </div>
  </div>
);
