import React, { useState } from 'react';
import moment from 'moment';

import { hideModal } from 'common/Modal';
import { ModalHeader, ModalFooter } from 'components/Modal';
import { FormGroupRow, FormGroupArea, FormGroupTwitterColor } from 'components/FormTools';

export default ({ edit, event, onAddEvent, onEditEvent, timeValues }) => {
  const [state, setState] = useState({
    title: edit ? event.title : '',
    description: edit ? event.description : '',
    url: edit ? event.url : '',
    imageUrl: edit ? event.imageUrl : '',
    HTML: edit ? event.HTML : '',
    CSS: edit ? event.CSS : '',
    color: edit ? event.color : '',
    start: edit ? moment(event.start) : moment(timeValues.start),
    end: edit ? moment(event.end) : moment(timeValues.end)
  });
  const [error, setError] = useState({});
  // useEffect()

  return [
    <ModalHeader
      key="gh_h"
      iconUrl="/images/icons/calendar-icon.png"
      label={edit ? `Update ${event.title}` : 'Add New Event'}
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
          value={state.url}
          onChange={e => setState({ ...state, url: e.target.value })}
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
        edit ? onEditEvent({ ...state, _id: event._id }) : onAddEvent(state);
        hideModal();
      }}
    />
  ];
};
