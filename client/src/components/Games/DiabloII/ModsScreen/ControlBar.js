import React from 'react';

import FormModal from 'components/FormModal';
import ModCard from './ModCard';

export default ({ mods, focusMod, onGetModDetail, addFormState, onAddMod }) => {
  return (
    <div className="d2-mod-control-bar">
      <div className="d2-add-card-btn" data-toggle="modal" data-target="#addD2ModModal">
        <i className="fa fa-plus-circle" />
      </div>
      {mods.map(mod => <ModCard key={mod._id} mod={mod} focusMod={focusMod} onGetModDetail={onGetModDetail} />)}
      <div style={{marginTop: '10px'}}/>
      <FormModal id="addD2ModModal" formBody={addFormState} onSubmit={(id, body) => onAddMod(body)} />
    </div>
  );
};
