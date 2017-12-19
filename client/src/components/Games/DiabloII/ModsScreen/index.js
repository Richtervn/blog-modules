import React from 'react';

import LoadingScreen from 'components/LoadingScreen';
import FormModal from 'components/FormModal';
import ControlBar from './ControlBar';
import ModInfo from './ModInfo';

export default ({
  mods,
  versions,
  onGetMods,
  onGetModDetail,
  focusMod,
  onAddMod,
  onEditMod,
  onDeleteMod,
  addFormState,
  editFormState
}) => {
  if (!mods) {
    onGetMods();
    return <LoadingScreen />;
  }

  return (
    <div className="row no-row-margin">
      <div className="col-3 no-col-margin">
        <ControlBar mods={mods} focusMod={focusMod} onGetModDetail={onGetModDetail} onAddMod={onAddMod} addFormState={addFormState}/>
      </div>
      <div className="col-9 no-col-margin">
        <ModInfo mod={focusMod} editFormState={editFormState} onEditMod={onEditMod} onDeleteMod={onEditMod}/>
      </div>
    </div>
  );
};
