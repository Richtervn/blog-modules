import React from 'react';

export default ({
  versions,
  characters,
  onGetCharacters,
  focusCharacter,
  onSetFocusCharacter,
  onAddCharacter,
  onEditCharacter,
  onDeleteCharacter
}) => {
  if (!characters) onGetCharacters();
  return null;
};
