import { connect } from 'react-redux';
import MonthBigCalendar from './MonthBigCalendar.component';

import { getEvents } from 'pages/Setting/DayEvents/DayEvents.module';

export default connect(
  ({ dayEvents }) => ({
    dayEvents: dayEvents.events
  }),
  dispatch => ({
    onGetDayEvents() {
      dispatch(getEvents());
    }
  })
)(MonthBigCalendar);
