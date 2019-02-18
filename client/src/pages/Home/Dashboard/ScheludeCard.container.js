import { connect } from 'react-redux';
import ScheludeCard from './ScheludeCard.component';
import moment from 'moment';

import { getEvents, setSelectedDate, setSelectedEvent, setTimeValues } from '../Schelude/Schelude.module';
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
    dayEvents: dayEvents.events
  }),
  dispatch => ({
    onGetEvents() {
      dispatch(getEvents());
    },
    onGetDayEvents() {
      dispatch(getDayEvents());
    },
    onSetSelectedDate(date) {
      dispatch(setSelectedDate(date));
    },
    onSetTimeValues(values) {
      dispatch(setTimeValues(values));
    },
    onSetSelectedEvent(event) {
      dispatch(setSelectedEvent(event));
    }
  })
)(ScheludeCard);
