import { connect } from 'react-redux';
import DayEventForm from './DayEventForm.component';

import { addEvent, editEvent, deleteEvent } from '../DayEvents.module';

export default connect(
	({ dayEvents }) => ({
		timeValues: dayEvents.timeValues
	}),
	dispatch => ({
		onAddEvent(formBody) {
			dispatch(addEvent(formBody));
		},
		onEditEvent(formBody) {
			dispatch(editEvent(formBody));
		},
		onDeleteEvent(id) {
			dispatch(deleteEvent(id));
		}
	})
)(DayEventForm);
