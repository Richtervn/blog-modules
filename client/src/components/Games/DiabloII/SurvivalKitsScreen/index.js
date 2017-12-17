import React from 'react';

export default ({
  versions,
  survivalKits,
  onGetSurvivalKits,
  focusSurvivalKit,
  onSetFocusSurvivalKit,
  onAddSurvivalKit,
  onEditSurvivalKit,
  onDeleteSurvivalKit,
  addFormState,
  editFormState
}) => {
  if (!survivalKits) onGetSurvivalKits();
  return null;
};
