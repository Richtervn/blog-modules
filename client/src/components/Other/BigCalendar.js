import './BigCalendar.css';

import React from 'react';
import moment from 'moment';
import BigCalendar from 'react-big-calendar';

//

const localizer = BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

const ToolBar = props => {
  const { label, onNavigate } = props;
  console.log(props);
  return (
    <div className="big-calendar-toolbar">
      <button className="nav-btn" onClick={() => onNavigate('PREV')} style={{textAlign: 'left'}}>
        <i className="fa fa-2x fa-angle-left" />
      </button>
      <div className="label">{label}</div>
      <button className="nav-btn" onClick={() => onNavigate('NEXT')} style={{textAlign: 'right'}}>
        <i className="fa fa-2x fa-angle-right" />
      </button>
    </div>
  );
};

export default ({ events = [] }) => (
  <BigCalendar
    onSelectSlot={slot => console.log(slot)}
    events={events}
    selectable={true}
    localizer={localizer}
    startAccessor="start"
    endAccessor="end"
    components={{
      toolbar: ToolBar
    }}
  />
);
