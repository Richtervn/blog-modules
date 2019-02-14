import './DayBigCalendar.css';

import React from 'react';
import moment from 'moment';
import BigCalendar from 'react-big-calendar';

const localizer = BigCalendar.momentLocalizer(moment);

const ToolBar = props => {
  const { label } = props;
  return (
    <div className="big-calendar-toolbar">
      <div className="label">{label}</div>
    </div>
  );
};

export default ({ events = [], date, onSelectSlot, onSelectEvent, dayEvents = [] }) => {
  if (!dayEvents) {
    return null;
  }
  // console.log(dayEvents);

  const displayEvents = events
    .map(event => ({ ...event, eventType: 'schelude' }))
    .concat(dayEvents.map(event => ({ ...event, eventType: 'day', allDay: true })));

  console.log(displayEvents);

  return (
    <div className="day-big-calendar">
      <BigCalendar
        onSelectEvent={onSelectEvent}
        defaultView="day"
        onNavigate={() => null}
        views={['day']}
        date={date}
        onSelectSlot={slot => onSelectSlot(slot)}
        events={displayEvents}
        selectable={true}
        localizer={localizer}
        components={{
          toolbar: ToolBar
        }}
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  );
};
