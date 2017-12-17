import React from 'react';
import FormModal from 'components/FormModal';

export default ({
  mods,
  versions,
  onGetMods,
  focusMod,
  onSetFocusMod,
  onAddMod,
  onEditMod,
  onDeleteMod,
  addFormState,
  editFormState
}) => {
  if (!mods) onGetMods();
  return (
    <div>
      <button className="btn btn-primary" data-toggle="modal" data-target="#addD2ModModal">
        Test
      </button>
      <FormModal id="addD2ModModal" formBody={addFormState} onSubmit={(id, body) => console.log(body)} />
    </div>
  );
};
