import './Schelude.css';
import React, { useMemo } from 'react';
import { TabLoader } from 'common/Loaders';
import { openModal } from 'common/Modal';

import MonthBigCalendar from './MonthBigCalendar.container';
import DayBigCalendar from './DayBigCalendar.container';

export default ({
  events,
  dayEvents,
  onGetEvents,
  onSetTimeValues,
  onSetSelectedEvent,
  onSetSelectedDate,
  onGetDayEvents,
  selectedDate
}) => {
  useMemo(() => {
    onGetEvents();
    onGetDayEvents();
  }, []);

  if (!events || !dayEvents) {
    return <TabLoader />;
  }

  return (
    <div id="schelude-page">
      <div className="month-calendar">
        <MonthBigCalendar
          onSelectSlot={slot => {
            if (slot.action === 'click') {
              onSetSelectedDate(slot.start);
            }
            if (slot.action === 'select') {
              onSetTimeValues({ start: slot.start, end: slot.end });
              openModal('AddEvent');
            }
          }}
          onSelectEvent={event => {
            onSetSelectedEvent(event);
            openModal('EditEvent');
          }}
          events={events}
        />
      </div>
      <div className="day-calendar">
        <DayBigCalendar
          selectedDate={selectedDate}
          events={events}
          onSelectSlot={slot => {
            if (slot.action === 'select') {
              onSetTimeValues({ start: slot.start, end: slot.end });
              openModal('AddEvent');
            }
          }}
          onSelectEvent={event => {
            onSetSelectedEvent(event);
            openModal('EventDetails');
          }}
        />
      </div>
    </div>
  );
};
