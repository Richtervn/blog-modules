import React from 'react';

import Introduction from './Introduction';

import Dashboard from './Dashboard';
import CharacterManager from './CharacterManager';
import BankingManager from './BankingManager';

export default ({
  user,
  page,
  characters,
  focusCharacter,
  onEditProfile,
  onGetCharacters,
  onSetFocusCharacter,
  onAddPoint,
  onReset,
  onDeposit,
  onWithdraw,
  onLoan,
  onTransfer,
  onBuyCredit,
  errorAddPoint,
  errorReset,
  errorBanking,
  onClearAddPointError,
  onClearResetError,
  onClearBankingError,
  gameSetting
}) => {
  switch (page) {
    case 'Introduction':
      return <Introduction/>;
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
          onClearAddPointError={onClearAddPointError}
          onReset={onReset}
          errorReset={errorReset}
          onClearResetError={onClearResetError}
        />
      );
    case 'Banking Manager':
      return (
        <BankingManager
          user={user}
          characters={characters}
          onSetFocusCharacter={onSetFocusCharacter}
          onGetCharacters={onGetCharacters}
          focusCharacter={focusCharacter}
          gameSetting={gameSetting}
          errorBanking={errorBanking}
          onClearBankingError={onClearBankingError}
          onDeposit={onDeposit}
          onLoan={onLoan}
          onWithdraw={onWithdraw}
          onTransfer={onTransfer}
          onBuyCredit={onBuyCredit}
        />
      );
    default:
      return <Introduction />;
  }
};
