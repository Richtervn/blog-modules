import React from 'react';

import Introduction from './Introduction';
import Dashboard from './Dashboard';
import CharacterManager from './CharacterManager';

export default ({
  user,
  page,
  characters,
  focusCharacter,
  onEditProfile,
  onGetCharacters,
  onSetFocusCharacter,
  onAddPoint,
  errorAddPoint
}) => {
  switch (page) {
    case 'Introduction':
      return <Introduction />;
    case 'Dash Board':
      return <Dashboard user={user} onEditProfile={onEditProfile} />;
    case 'Character Manager':
      return (
        <CharacterManager
          user={user}
          characters={characters}
          focusCharacter={focusCharacter}
          onSetFocusCharacter={onSetFocusCharacter}
          onGetCharacters={onGetCharacters}
          onAddPoint={onAddPoint}
          errorAddPoint={errorAddPoint}
        />
      );
    default:
      return <Introduction />;
  }
};
