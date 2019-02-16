import { connect } from 'react-redux';
import EventDetails from './EventDetails.component';

import { getEventDetail, deleteEvent } from '../Schelude.module';
import { deleteEvent as deleteDayEvent } from 'pages/Setting/DayEvents/DayEvents.module';

export default connect(
	({ schelude }) => ({
		selectedEvent: schelude.selectedEvent,
		eventDetail: schelude.eventDetail
	}),
	dispatch => ({
		onGetEventDetail(event) {
			dispatch(getEventDetail(event));
		},
		onDeleteEvent(event, type) {
			if (type === 'day') {
				dispatch(deleteDayEvent(event._id));
			}
			if (type === 'schelude') {
				dispatch(deleteEvent(event._id));
			}
		}
	})
)(EventDetails);
