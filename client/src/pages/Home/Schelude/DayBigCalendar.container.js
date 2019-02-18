import { connect } from 'react-redux';
import DayBigCalendar from './DayBigCalendar.component';

import { setTimeValues } from 'pages/Setting/DayEvents/DayEvents.module';

export default connect(
  ({ dayEvents }) => ({
    dayEvents: dayEvents.events
  }),
  dispatch => ({
    onSetTimeValues(timeValues) {
      dispatch(setTimeValues(timeValues));
    }
  })
)(DayBigCalendar);
