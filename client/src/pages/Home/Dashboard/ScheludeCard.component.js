import './ScheludeCard.css';
import React, { useEffect } from 'react';
import moment from 'moment';

import { ContainerLoader } from 'common/Loaders';
import { openModal } from 'common/Modal';

import DayBigCalendar from '../Schelude/DayBigCalendar.component';

export default ({
  events,
  dayEvents,
  onGetEvents,
  onGetDayEvents,
  onSetSelectedDate,
  onSetTimeValues,
  onSetSelectedEvent,
  onSetDayValues
}) => {
  useEffect(() => {
    if (!events) {
      onGetEvents();
    }
    if (!dayEvents) {
      onGetDayEvents();
    }
  }, []);

  if (!events || !dayEvents) {
    return (
      <div className="dashboard-schelude-card">
        <ContainerLoader color="#222" />
      </div>
    );
  }

  return (
    <div className="dashboard-schelude-card">
      <DayBigCalendar
        selectedDate={moment().toDate()}
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
        onSetTimeValues={values => onSetDayValues(values)}
      />
    </div>
  );
};
