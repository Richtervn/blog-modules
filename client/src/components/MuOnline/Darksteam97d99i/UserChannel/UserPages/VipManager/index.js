import React from 'react';

import CharacterCard from '../CharacterManager/CharacterCard';

export default ({user, characters, onGetCharacters, focusCharacter, onSetFocusCharacter}) => {
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

      </div>
    </div>
  );
};
