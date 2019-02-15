import React, { useState } from 'react';

import { hideModal } from 'common/Modal';
import { ModalHeader } from 'components/Modal';

import DayEventForm from './DayEventForm.container';

export default ({
  edit,
  onAddEvent,
  onEditEvent,
  timeValues,
  onGetEventDetail,
  eventDetail,
  selectedEvent,
  onDeleteEvent
}) => {
  const [isConfirmingDelete, setIsConfirmingDelete] = useState(false);

  if (isConfirmingDelete) {
    return [
      <ModalHeader key="def_h" iconUrl="/images/icons/calendar-icon.png" label={`Delete ${eventDetail.title}`} />,
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
            onDeleteEvent(eventDetail._id);
            hideModal();
          }}>
          Yes
        </button>
        <button className="btn btn-danger" onClick={() => setIsConfirmingDelete(false)}>
          No
        </button>
      </div>
    ];
  }

  return [
    <ModalHeader
      key="def_h"
      iconUrl="/images/icons/calendar-icon.png"
      label={edit ? `Update ${eventDetail.title}` : 'Add New Event'}
    />,
    <DayEventForm
      key="def_f"
      edit={edit}
      onGetEventDetail={onGetEventDetail}
      eventDetail={eventDetail}
      selectedEvent={selectedEvent}>
      {edit && (
        <button className="btn btn-danger" onClick={() => setIsConfirmingDelete(true)}>
          Delete
        </button>
      )}
    </DayEventForm>
  ];
};
