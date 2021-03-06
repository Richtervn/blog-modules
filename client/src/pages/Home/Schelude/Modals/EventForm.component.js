import React, { useState, useEffect } from 'react';
import moment from 'moment';

import { hideModal } from 'common/Modal';
import { ModalFooter } from 'components/Modal';
import { FormGroupRow, FormGroupArea, FormGroupTwitterColor } from 'components/FormTools';

export default ({ edit, eventDetail, onAddEvent, onEditEvent, timeValues, selectedEvent, onGetEventDetail }) => {
  const [state, setState] = useState({
    title: '',
    description: '',
    link: '',
    imageUrl: '',
    HTML: '',
    CSS: '',
    color: '',
    priority: '',
    start: moment(timeValues.start),
    end: moment(timeValues.end)
  });

  useEffect(() => {
    if (edit && selectedEvent._id && selectedEvent._id !== eventDetail._id) {
      onGetEventDetail(selectedEvent);
      return;
    }
  }, [edit, selectedEvent]);

  const [error, setError] = useState({});

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
      start: moment(eventDetail.start),
      end: moment(eventDetail.end)
    });
  }, [eventDetail]);

  return [
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
          type="number"
          label="Priority"
          value={state.priority}
          onChange={e => setState({ ...state, priority: e.target.value })}
        />
        <FormGroupRow
          type="text"
          label="Link"
          value={state.link}
          onChange={e => setState({ ...state, link: e.target.value })}
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
    </div>,
    <ModalFooter
      key="gh_f"
      onClickSubmit={() => {
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
      }}
    />
  ];
};
