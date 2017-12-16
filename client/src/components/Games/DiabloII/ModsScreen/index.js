import React from 'react';

export default ({ mods, versions, onGetMods, focusMod, onSetFocusMod, onAddMod, onEditMod, onDeleteMod }) => {
  if (!mods) onGetMods();
  return null;
};
