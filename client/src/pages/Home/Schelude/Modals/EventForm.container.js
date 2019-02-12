import { connect } from 'react-redux';
import EventForm from './EventForm.component';

import { addEvent } from '../Schelude.module';

export default connect(
  ({ schelude }) => ({
    timeValues: schelude.timeValues
  }),
  dispatch => ({
    onAddEvent(formBody) {
      dispatch(addEvent(formBody));
    }
  })
)(EventForm);
