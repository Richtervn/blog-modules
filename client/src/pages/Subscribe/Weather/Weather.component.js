import './Weather.css';
import React from 'react';

import OpenWeatherMap from './OpenWeatherMap.container';

export default () => {
  return (
    <div id="weather-page">
      <OpenWeatherMap />
    </div>
  );
};
