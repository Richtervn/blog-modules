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
  errorReset,
  errorAddPoint,
  onClearAddPointError,
  onClearResetError,
  onClearBankingError,
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
        onClearAddPointError={onClearAddPointError}
        onClearResetError={onClearResetError}
        onClearBankingError={onClearBankingError}
        gameSetting={gameSetting}
      />
    </div>
  </div>
);
