import DayEventsForm from './DayEventsForm.component';
import { connect } from 'react-redux';

import { addEvent, editEvent, getEventDetail, deleteEvent } from '../DayEvents.module';

export default connect(
  ({ dayEvents }) => ({
    timeValues: dayEvents.timeValues,
    selectedEvent: dayEvents.selectedEvent,
    eventDetail: dayEvents.eventDetail
  }),
  dispatch => ({
    onAddEvent(formBody) {
      dispatch(addEvent(formBody));
    },
    onGetEventDetail(id) {
      dispatch(getEventDetail(id));
    },
    onEditEvent(formBody) {
      dispatch(editEvent(formBody));
    },
    onDeleteEvent(id) {
      dispatch(deleteEvent(id));
    }
  })
)(DayEventsForm);
