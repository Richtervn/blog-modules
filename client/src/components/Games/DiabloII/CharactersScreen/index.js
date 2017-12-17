import React from 'react';

export default ({
  versions,
  characters,
  onGetCharacters,
  focusCharacter,
  onSetFocusCharacter,
  onAddCharacter,
  onEditCharacter,
  onDeleteCharacter,
  addFormState,
  editFormState
}) => {
  if (!characters) onGetCharacters();
  return null;
};


