import { connect } from 'react-redux';
import DayEvents from './DayEvents.component';

import { setTimeValues, getEvents, setSelectedEvent } from './DayEvents.module';

export default connect(
  ({ dayEvents }) => ({ events: dayEvents.events }),
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
)(DayEvents);
