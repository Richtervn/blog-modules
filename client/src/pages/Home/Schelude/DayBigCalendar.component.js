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

export default ({ events = [], date, onSelectSlot, onSelectEvent, selected }) => (
  <div className="day-big-calendar">
    <BigCalendar
      selected={selected}
      onSelectEvent={onSelectEvent}
      defaultView="day"
      onNavigate={() => null}
      views={['day']}
      date={date}
      onSelectSlot={slot => onSelectSlot(slot)}
      events={events}
      selectable={true}
      localizer={localizer}
      components={{
        toolbar: ToolBar
      }}
    />
  </div>
);
