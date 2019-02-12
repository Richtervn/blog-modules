import './Schelude.css';
import React, { Component } from 'react';
import BigCalendar from 'components/Other/BigCalendar';

// events={myEventsList}

export default () => (
  <div id="schelude-page">
    <div className="calendar-container">
      <BigCalendar />
    </div>
  </div>
);
