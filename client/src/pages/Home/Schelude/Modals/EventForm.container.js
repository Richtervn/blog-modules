import { connect } from 'react-redux';
import EventForm from './EventForm.component';

import { addEvent, editEvent } from '../Schelude.module';

export default connect(
	({ schelude }) => ({
		timeValues: schelude.timeValues,
		eventDetail: schelude.eventDetail,
		selectedEvent: schelude.selectedEvent
	}),
	dispatch => ({
		onAddEvent(formBody) {
			dispatch(addEvent(formBody));
		},
		onEditEvent(formBody) {
			dispatch(editEvent(formBody));
		}
	})
)(EventForm);
