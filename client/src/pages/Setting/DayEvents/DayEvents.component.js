import './DayEvents.css';
import React from 'react';
import { openModal } from 'common/Modal';

import MonthBigCalendar from 'pages/Home/Schelude/MonthBigCalendar.container';

export default ({ onSetTimeValues, isLoading, onGetEvents }) => {
  return (
    <div id="day-events-page">
      <MonthBigCalendar
        onSelectSlot={slot => {
          console.log(slot);
          onSetTimeValues({ start: slot.start, end: slot.end });
          openModal('AddDayEvent');
        }}
      />
    </div>
  );
};

// onSelectSlot, onSelectEvent
