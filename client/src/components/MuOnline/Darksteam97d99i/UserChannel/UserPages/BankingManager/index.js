import React from 'react';

import CharacterCard from '../CharacterManager/CharacterCard';

export default ({characters, onSetFocusCharacter, focusCharacter}) => (
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
    <div className="col-8 no-col-margin" />
  </div>
);
