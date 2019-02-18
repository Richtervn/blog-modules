import './DayBigCalendar.css';

import React from 'react';
import moment from 'moment';
import BigCalendar from 'react-big-calendar';
import { withRouter } from 'react-router-dom';
import { openModal } from 'common/Modal';

const localizer = BigCalendar.momentLocalizer(moment);

const ToolBar = withRouter(({ label, history, onRedirecting }) => (
  <div className="big-calendar-toolbar">
    <div className="label">{label}</div>
    <button
      onClick={() => {
        onRedirecting();
        history.push('/day_events');
      }}>
      <i className="fa fa-chain" />
    </button>
  </div>
));

export default ({ events = [], selectedDate, onSelectSlot, onSelectEvent, dayEvents = [], onSetTimeValues }) => {
  if (!dayEvents) {
    return null;
  }

  const displayEvents = events
    .map(event => ({ ...event, eventType: 'schelude' }))
    .concat(dayEvents.map(event => ({ ...event, eventType: 'day', allDay: true })));

  return (
    <div className="day-big-calendar">
      <BigCalendar
        onSelectEvent={onSelectEvent}
        eventPropGetter={event => {
          if (event.color) {
            return { style: { backgroundColor: event.color } };
          }
        }}
        defaultView="day"
        onNavigate={() => null}
        views={['day']}
        date={selectedDate}
        onSelectSlot={slot => onSelectSlot(slot)}
        events={displayEvents}
        selectable={true}
        localizer={localizer}
        components={{
          toolbar: props => (
            <ToolBar
              {...props}
              onRedirecting={() => {
                onSetTimeValues({
                  start: moment(selectedDate).startOf('day'),
                  end: moment(selectedDate).startOf('day')
                });
                openModal('AddDayEvent');
              }}
            />
          )
        }}
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  );
};
