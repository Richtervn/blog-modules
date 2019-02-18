import { connect } from 'react-redux';
import DayBigCalendar from './DayBigCalendar.component';

export default connect(({ dayEvents }) => ({
  dayEvents: dayEvents.events
}))(DayBigCalendar);
