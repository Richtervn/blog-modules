import './Schelude.css';
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { TabLoader } from 'common/Loaders';
import { openModal } from 'common/Modal';

import MonthBigCalendar from './MonthBigCalendar.component';
import DayBigCalendar from './DayBigCalendar.component';

export default ({ events, onGetEvents, onSetTimeValues, selectedEvent, onSetSelectedEvent }) => {
  useEffect(() => {
    onGetEvents();
  }, []);
  const [date, setDate] = useState(moment().toDate());

  if (!events) {
    return <TabLoader />;
  }

  return (
    <div id="schelude-page">
      <div className="month-calendar">
        <MonthBigCalendar
          // selected={selectedEvent}
          onSelectSlot={slot => {
            if (slot.action === 'click') {
              setDate(moment(slot.start).toDate());
            }
            if (slot.action === 'select') {
              onSetTimeValues({ start: slot.start, end: slot.end });
              openModal('AddEvent');
            }
          }}
          // onSelectEvent={event => {
          //   console.log(event);
          //   console.log(selectedEvent);
          //   onSetSelectedEvent(event);
          // }}
          events={events}
        />
      </div>
      <div className="day-calendar">
        <DayBigCalendar
          selected={selectedEvent}
          events={events}
          date={date}
          onSelectSlot={slot => {
            if (slot.action === 'select') {
              onSetTimeValues({ start: slot.start, end: slot.end });
              openModal('AddEvent');
            }
          }}
          onSelectEvent={event => {
            console.log(event);
            onSetSelectedEvent(event);
          }}
        />
      </div>
    </div>
  );
};
