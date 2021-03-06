import moment from 'moment';
import { connect } from 'react-redux';
import Schelude from './Schelude.component';

import { getEvents, setTimeValues, setSelectedEvent, setSelectedDate } from './Schelude.module';
import { getEvents as getDayEvents } from 'pages/Setting/DayEvents/DayEvents.module';

export default connect(
  ({ schelude, dayEvents }) => ({
    events: schelude.events
      ? schelude.events.map(event => ({
          ...event,
          start: moment(event.start).toDate(),
          end: moment(event.end).toDate(),
          isSelected: schelude.selectedEvent && event._id === schelude.selectedEvent._id
        }))
      : null,
    selectedEvent: schelude.selectedEvent,
    dayEvents: dayEvents.events,
    selectedDate: schelude.selectedDate
  }),
  dispatch => ({
    onGetEvents() {
      dispatch(getEvents());
    },
    onSetTimeValues(values) {
      dispatch(setTimeValues(values));
    },
    onSetSelectedEvent(event) {
      dispatch(setSelectedEvent(event));
    },
    onSetSelectedDate(date) {
      dispatch(setSelectedDate(date));
    },
    onGetDayEvents() {
      dispatch(getDayEvents());
    }
  })
)(Schelude);
