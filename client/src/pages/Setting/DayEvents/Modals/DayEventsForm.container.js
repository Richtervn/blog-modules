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
    onGetEventDetail(event) {
      dispatch(getEventDetail(event._id));
    },
    onEditEvent(formBody) {
      dispatch(editEvent(formBody));
    },
    onDeleteEvent(id) {
      dispatch(deleteEvent(id));
    },
    onAddEvent(formBody) {
      dispatch(addEvent(formBody));
    }
  })
)(DayEventsForm);
