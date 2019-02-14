import './DayEvents.css';
import React, { useMemo } from 'react';
import { openModal } from 'common/Modal';
import { PageLoader } from 'common/Loaders';

import MonthBigCalendar from 'pages/Home/Schelude/MonthBigCalendar.container';

export default ({ onSetTimeValues, events, onGetEvents, onSetSelectedEvent }) => {
  useMemo(() => {
    onGetEvents();
  }, []);

  if (!events) {
    return <PageLoader />;
  }

  return (
    <div id="day-events-page">
      <MonthBigCalendar
        onSelectSlot={slot => {
          onSetTimeValues({ start: slot.start, end: slot.end });
          openModal('AddDayEvent');
        }}
        onSelectEvent={event => {
          onSetSelectedEvent(event);
          openModal('EditDayEvent');
        }}
      />
    </div>
  );
};

