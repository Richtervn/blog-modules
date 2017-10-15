import React from 'react';

import SideNavMenu from './SideNavMenu';
import UserPages from './UserPages';

export default ({
  user,
  characters,
  focusCharacter,
  userPage,
  activeSideForm,
  onChangeActiveSideForm,
  onRegister,
  onLogin,
  onLogout,
  onEditProfile,
  onChangeUserPage,
  onSetFocusCharacter,
  onGetCharacters,
  onAddPoint,
  onReset,
  onGrandReset,
  onResetQuest,
  errorReset,
  errorAddPoint,
  errorGrandReset,
  errorResetQuest,
  onClearAddPointError,
  onClearResetError,
  onClearBankingError,
  onClearGrandResetError,
  onClearResetQuestError,
  serverInfo,
  gameSetting,
  errorBanking,
  onBuyCredit,
  onLoan,
  onDeposit,
  onWithdraw,
  onTransfer
}) => (
  <div className="row no-row-margin">
    <div className="col-3 no-col-margin">
      <SideNavMenu
        user={user}
        activeForm={activeSideForm}
        onChangeActiveForm={onChangeActiveSideForm}
        onRegister={onRegister}
        onLogin={onLogin}
        onLogout={onLogout}
        onChangeUserPage={onChangeUserPage}
        userPage={userPage}
        serverInfo={serverInfo}
        gameSetting={gameSetting}
      />
    </div>
    <div className="col-9 no-col-margin">
      <UserPages
        user={user}
        page={userPage}
        onEditProfile={onEditProfile}
        onSetFocusCharacter={onSetFocusCharacter}
        onGetCharacters={onGetCharacters}
        characters={characters}
        focusCharacter={focusCharacter}
        onAddPoint={onAddPoint}
        onReset={onReset}
        onLoan={onLoan}
        onWithdraw={onWithdraw}
        onDeposit={onDeposit}
        onTransfer={onTransfer}
        onBuyCredit={onBuyCredit}
        errorAddPoint={errorAddPoint}
        errorReset={errorReset}
        errorBanking={errorBanking}
        errorGrandReset={errorGrandReset}
        errorResetQuest={errorResetQuest}
        onClearAddPointError={onClearAddPointError}
        onClearResetError={onClearResetError}
        onClearBankingError={onClearBankingError}
        gameSetting={gameSetting}
        onGrandReset={onGrandReset}
        onResetQuest={onResetQuest}
        onClearGrandResetError={onClearGrandResetError}
        onClearResetQuestError={onClearResetQuestError}
      />
    </div>
  </div>
);
