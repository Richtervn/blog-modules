import { connect } from 'react-redux';
import MonthBigCalendar from './MonthBigCalendar.component';

export default connect(({ dayEvents }) => ({
  dayEvents: dayEvents.events
}))(MonthBigCalendar);
