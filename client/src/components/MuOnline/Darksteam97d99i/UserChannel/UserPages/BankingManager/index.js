import React from 'react';

import CharacterCard from '../CharacterManager/CharacterCard';
import BankingInfo from './BankingInfo';

export default ({
  user,
  characters,
  onSetFocusCharacter,
  focusCharacter,
  gameSetting,
  onGetCharacters,
  errorBanking,
  onClearBankingError,
  onDeposit,
  onWithdraw,
  onLoan,
  onTransfer,
  onBuyCredit
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
        <BankingInfo
          user={user}
          character={focusCharacter}
          gameSetting={gameSetting}
          errorBanking={errorBanking}
          onClearBankingError={onClearBankingError}
          onTransfer={onTransfer}
          onWithdraw={onWithdraw}
          onDeposit={onDeposit}
          onLoan={onLoan}
          onBuyCredit={onBuyCredit}
        />
      </div>
    </div>
  );
};
