import './Dashboard.css';
import React from 'react';

import AccuWeatherCard from './AccuWeatherCard.container';
import CalendarCard from './CalendarCard.component';
import ScheludeCard from './ScheludeCard.container';

export default () => (
  <div id="dashboard-page">
    <div className="cards-row">
      <div className="dashboard-item">
        <AccuWeatherCard />
      </div>
      <div className="dashboard-item">
        <CalendarCard />
      </div>
      <div className="dashboard-item">
        <ScheludeCard />
      </div>
    </div>
  </div>
);
