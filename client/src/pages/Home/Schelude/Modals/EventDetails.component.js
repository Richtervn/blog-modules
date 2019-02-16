import './EventDetails.css';
import React, { Fragment, useState, useEffect } from 'react';
import { hideModal } from 'common/Modal';
import { ButtonsNavBar } from 'components/Buttons';
import { withRouter } from 'react-router-dom';

import EventForm from './EventForm.container';
import EventDetail from './EventDetail.component';
import DayEventForm from 'pages/Setting/DayEvents/Modals/DayEventForm.container';

const views = [
	{ name: 'Add', icon: 'fa-plus', tooltip: 'Open insert form' },
	{ name: 'Detail', icon: 'fa-file-o', tooltip: 'Open detail view' },
	{ name: 'Edit', icon: 'fa-pencil', tooltip: 'Open edit form' },
	{ name: 'Delete', icon: 'fa-times', tooltip: 'Open delete box' }
];

const EventDetails = ({
	eventDetail,
	selectedEvent,
	onGetEventDetail,
	defaultView,
	eventType,
	onDeleteEvent,
	history
}) => {
	const [view, setView] = useState('Add');
	useEffect(() => {
		setView(defaultView);
	}, [defaultView]);

	return [
		<div key="ed_h" className="modal-header">
			<div className="event-details-header">
				<div className="label-container">
					<img className="modal-icon" src="/images/icons/calendar-icon.png" alt="Modal Icon" />
					{view === 'Add' && <div className="label">Add new event</div>}
					{view === 'Edit' && <div className="label">{`Edit ${selectedEvent.title}`}</div>}
					{view === 'Delete' && <div className="label">{`Remove ${selectedEvent.title}`}</div>}
					{view === 'Detail' && <div className="label">{selectedEvent.title}</div>}
				</div>
				<div>
					<ButtonsNavBar features={views} activeFeature={view} onChangeFeature={v => setView(v)} />
					<button type="button" className="close" data-dismiss="modal">
						<span>&times;</span>
					</button>
				</div>
			</div>
		</div>,
		<Fragment key="ed_m">
			{view === 'Add' && <EventForm onGetEventDetail={onGetEventDetail} />}
			{view === 'Edit' && selectedEvent.eventType === 'day' && (
				<DayEventForm
					edit
					onGetEventDetail={onGetEventDetail}
					eventDetail={eventDetail}
					selectedEvent={selectedEvent}
				/>
			)}
			{view === 'Edit' && selectedEvent.eventType === 'schelude' && (
				<EventForm edit onGetEventDetail={onGetEventDetail} />
			)}
			{view === 'Delete' && [
				<div key="def_b" className="modal-body">
					<div className="alert alert-danger">
						Are you sure you want to delete this event?
						<br />
						<b>{eventDetail.title}</b>
					</div>
				</div>,
				<div className="modal-footer" key="def_f">
					<button
						className="btn btn-success"
						onClick={() => {
							onDeleteEvent(eventDetail, selectedEvent.eventType);
							hideModal();
						}}>
						Yes
					</button>
					<button className="btn btn-danger" data-dismiss="modal">
						No
					</button>
				</div>
			]}
			{view === 'Detail' && [
				<EventDetail key="et_v" event={eventDetail} />,
				<div className="modal-footer" key="et_f">
					<button
						className="btn btn-success"
						onClick={() => {
							if (selectedEvent.eventType === 'day') {
								history.push(`/content_mirror/DayEvents/${eventDetail._id}`);
							} else {
								history.push(`/content_mirror/ScheludeEvents/${eventDetail._id}`);
							}
							hideModal();
						}}>
						<i className="fa fa-edit" />
						HTML
					</button>
					<button className="btn btn-danger" data-dismiss="modal">
						Close
					</button>
				</div>
			]}
		</Fragment>
	];
};

export default withRouter(EventDetails);
