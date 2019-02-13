import './DayEvents.css';
import React from 'react';
import { openModal } from 'common/Modal';

import MonthBigCalendar from 'pages/Home/Schelude/MonthBigCalendar.component';

export default ({ onSetTimeValues }) => {
  return (
    <div id="day-events-page">
      <MonthBigCalendar
        onSelectSlot={slot => {
          onSetTimeValues({ start: slot.start, end: slot.end });
          openModal('AddDayEvent');
        }}
      />
    </div>
  );
};

// onSelectSlot, onSelectEvent
