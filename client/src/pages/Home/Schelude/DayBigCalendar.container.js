import { connect } from 'react-redux';
import DayBigCalendar from './DayBigCalendar.component';

export default connect(({ schelude, dayEvents }) => ({
  selectedDate: schelude.selectedDate,
  dayEvents: dayEvents.events
}))(DayBigCalendar);
