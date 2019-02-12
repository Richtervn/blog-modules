import moment from 'moment';
import { connect } from 'react-redux';
import Schelude from './Schelude.component';

import { getEvents, setTimeValues, setSelectedEvent } from './Schelude.module';

export default connect(
  ({ schelude }) => ({
    events: schelude.events
      ? schelude.events.map(event => ({
          ...event,
          start: moment(event.start).toDate(),
          end: moment(event.end).toDate()
        }))
      : null,
    selectedEvent: schelude.selectedEvent
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
    }
  })
)(Schelude);
