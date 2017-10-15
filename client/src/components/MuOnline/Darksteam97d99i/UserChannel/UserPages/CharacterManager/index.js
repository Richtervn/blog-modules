import React from 'react';

import CharacterCard from './CharacterCard';
import CharacterInfo from './CharacterInfo';

export default ({
  user,
  characters,
  onSetFocusCharacter,
  focusCharacter,
  onGetCharacters,
  onAddPoint,
  errorAddPoint,
  onClearAddPointError,
  onReset,
  onGrandReset,
  onResetQuest,
  errorGrandReset,
  errorResetQuest,
  errorReset,
  onClearResetError,
  onClearGrandResetError,
  onClearResetQuestError
}) => {
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
        <CharacterInfo
          user={user}
          character={focusCharacter}
          onAddPoint={onAddPoint}
          errorAddPoint={errorAddPoint}
          onClearAddPointError={onClearAddPointError}
          onReset={onReset}
          onGrandReset={onGrandReset}
          onResetQuest={onResetQuest}
          errorReset={errorReset}
          onClearResetError={onClearResetError}
          errorResetQuest={errorResetQuest}
          errorGrandReset={errorGrandReset}
          onClearGrandResetError={onClearGrandResetError}
          onClearResetQuestError={onClearResetQuestError}
        />
      </div>
    </div>
  );
};
