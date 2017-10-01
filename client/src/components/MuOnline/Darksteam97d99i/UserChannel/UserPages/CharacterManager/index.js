import React from 'react';

import CharacterCard from './CharacterCard';
import CharacterInfo from './CharacterInfo';

export default ({ user, characters, onSetFocusCharacter, focusCharacter, onGetCharacters, onAddPoint, errorAddPoint }) => {
  if (!characters) {
    onGetCharacters(user.memb___id);
    return null;
  }

  return (
    <div className="row no-row-margin">
      <div className="col-4 no-col-margin">
        {characters.map((character, i) => (
          <CharacterCard
            key={i}
            character={character}
            onSelect={onSetFocusCharacter}
            isFocus={focusCharacter.Name == character.Name}
          />
        ))}
      </div>
      <div className="col-8 no-col-margin">
        <CharacterInfo user={user} character={focusCharacter} onAddPoint={onAddPoint} errorAddPoint={errorAddPoint} />
      </div>
    </div>
  );
};
