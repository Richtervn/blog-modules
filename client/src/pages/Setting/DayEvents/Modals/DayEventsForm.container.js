import DayEventsForm from './DayEventsForm.component';
import { connect } from 'react-redux';

import { addEvent } from '../DayEvents.module';

export default connect(
  ({ dayEvents }) => ({
    timeValues: dayEvents.timeValues
  }),
  dispatch => ({
    onAddEvent(formBody) {
      dispatch(addEvent(formBody));
    }
  })
)(DayEventsForm);
