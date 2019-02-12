import './MonthBigCalendar.css';

import React from 'react';
import moment from 'moment';
import BigCalendar from 'react-big-calendar';

const localizer = BigCalendar.momentLocalizer(moment);

const ToolBar = props => {
  const { label, onNavigate } = props;
  return (
    <div className="big-calendar-toolbar">
      <button className="nav-btn" onClick={() => onNavigate('PREV')} style={{ textAlign: 'left' }}>
        <i className="fa fa-2x fa-angle-left" />
      </button>
      <div className="label">{label}</div>
      <button className="nav-btn" onClick={() => onNavigate('NEXT')} style={{ textAlign: 'right' }}>
        <i className="fa fa-2x fa-angle-right" />
      </button>
    </div>
  );
};

export default ({ events = [], onSelectSlot, onSelectEvent, selected }) => (
  <div className="month-big-calendar">
    <BigCalendar
      selected={selected}
      onSelectSlot={slot => onSelectSlot(slot)}
      events={events}
      views={['month']}
      selectable={true}
      localizer={localizer}
      onSelectEvent={onSelectEvent}
      components={{
        toolbar: ToolBar
      }}
    />
  </div>
);
