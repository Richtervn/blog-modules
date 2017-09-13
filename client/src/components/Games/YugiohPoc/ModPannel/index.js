import React from 'react';
import ModCard from './ModCard';

import FormModal from 'components/FormModal';

export default ({ onModSubmit, addModFormState, modList, modFocus, onSelectMod }) => (
  <div className="text-center">
    {modList.map(mod => (
      <ModCard key={mod._id} mod={mod} onSelectMod={onSelectMod} isSelected={mod._id == modFocus._id} />
    ))}
    <div className="ygo-add-mod-card">
      <div className="ygo-add-mod-card-icon" data-toggle="modal" data-target="#addYgoModModal">
        <i className="fa fa-plus-circle ygo-add-mod-card-button" />
      </div>
    </div>
    <FormModal id="addYgoModModal" onSubmit={onModSubmit} formBody={addModFormState} />
  </div>
);
