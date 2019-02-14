import React, { useState, useEffect } from 'react';
import moment from 'moment';

import { hideModal } from 'common/Modal';
import { ModalHeader } from 'components/Modal';
import { ModalLoader } from 'common/Loaders';
import { FormGroupRow, FormGroupArea, FormGroupTwitterColor, FormGroupSelect } from 'components/FormTools';

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
  const [state, setState] = useState({
    title: '',
    description: '',
    link: '',
    imageUrl: '',
    HTML: '',
    CSS: '',
    color: '',
    priority: '',
    type: 'ONE_TIME',
    start: moment(timeValues.start),
    end: moment(timeValues.end)
  });
  const [error, setError] = useState({});
  const [isConfirmingDelete, setIsConfirmingDelete] = useState(false);

  useEffect(() => {
    if (edit && selectedEvent._id !== eventDetail._id) {
      onGetEventDetail(selectedEvent._id);
      return;
    }
  }, [edit, selectedEvent]);

  useEffect(() => {
    if (edit) return;
    setState({
      ...state,
      start: moment(timeValues.start),
      end: moment(timeValues.end)
    });
  }, [timeValues]);

  useEffect(() => {
    if (!edit) return;
    setState({
      title: eventDetail.title || '',
      description: eventDetail.description || '',
      link: eventDetail.link || '',
      imageUrl: eventDetail.imageUrl || '',
      HTML: eventDetail.HTML || '',
      CSS: eventDetail.CSS || '',
      color: eventDetail.color || '',
      priority: eventDetail.priority || '',
      type: eventDetail.type || 'ONE_TIME',
      start: moment(eventDetail.start),
      end: moment(eventDetail.end)
    });
  }, [eventDetail]);

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

    // return (

    //   <ModalDelete
    //     iconUrl="/images/icons/calendar-icon.png"
    //     label={`Delete ${eventDetail.title}`}
    //     onClickSubmit={() => {}}
    //     text={`Are you sure you want to delete this event ?`}
    //   />
    // );
  }

  return [
    <ModalHeader
      key="gh_h"
      iconUrl="/images/icons/calendar-icon.png"
      label={edit ? `Update ${eventDetail.title}` : 'Add New Event'}
    />,
    <div key="gh_b" className="modal-body">
      <form className="text-right">
        <FormGroupRow
          type="text"
          label="Title"
          value={state.title}
          onChange={e => setState({ ...state, title: e.target.value })}
          error={error.title}
        />
        <FormGroupTwitterColor
          label="Color"
          onChange={c => setState({ ...state, color: c })}
          color={state.color}
          error={error.color}
        />
        <FormGroupArea
          label="Description"
          value={state.description}
          onChange={e => setState({ ...state, description: e.target.value })}
        />
        <FormGroupRow
          type="text"
          label="Link"
          value={state.link}
          onChange={e => setState({ ...state, link: e.target.value })}
        />
        <FormGroupRow
          type="number"
          label="Priority"
          value={state.priority}
          onChange={e => setState({ ...state, priority: e.target.value })}
        />
        <FormGroupSelect
          options={['ONE_TIME', 'REPEATABLE_SOLAR', 'REPEATABLE_LUNAR']}
          value={state.type}
          onChange={e => setState({ ...state, type: e.target.value })}
          label="Type"
        />
        <FormGroupRow
          type="text"
          label="Image Url"
          value={state.imageUrl}
          onChange={e => setState({ ...state, imageUrl: e.target.value })}
        />
        <FormGroupArea label="HTML" value={state.HTML} onChange={e => setState({ ...state, HTML: e.target.value })} />
        <FormGroupArea label="CSS" value={state.CSS} onChange={e => setState({ ...state, CSS: e.target.value })} />
        <FormGroupRow
          type="text"
          label="Start Time"
          value={state.start.format('DD/MM/YYYY hh:mm:ss')}
          disabled
          readOnly
        />
        <FormGroupRow type="text" label="End Time" value={state.end.format('DD/MM/YYYY hh:mm:ss')} disabled readOnly />
      </form>
      {edit && selectedEvent._id !== eventDetail._id && <ModalLoader />}
    </div>,
    <div className="modal-footer" key="gh_f">
      <button
        className="btn btn-success"
        onClick={() => {
          const hasError = !state.title || !state.color;
          setError({
            title: !state.title,
            color: !state.color
          });
          if (hasError) {
            return;
          }
          edit ? onEditEvent({ ...state, _id: eventDetail._id }) : onAddEvent(state);
          hideModal();
        }}>
        Save
      </button>
      <button className="btn btn-danger" onClick={() => setIsConfirmingDelete(true)}>
        Delete
      </button>
      <button className="btn btn-danger" data-dismiss="modal">
        Close
      </button>
    </div>
  ];
};
