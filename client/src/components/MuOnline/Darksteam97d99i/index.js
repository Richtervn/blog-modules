import React from 'react';

import TopNavBar from './TopNavBar';

import UserChannel from './UserChannel';
import AdminChannel from './AdminChannel';
import ServerChannel from './ServerChannel';

export default ({
  user,
  characters,
  gameSetting,
  serverInfo,
  focusCharacter,
  activeChannel,
  onChangeActiveChannel,
  activeSideForm,
  onChangeActiveSideForm,
  onRegister,
  onLogin,
  errorRegister,
  errorLogin,
  userPage,
  onLogout,
  onEditProfile,
  onChangeUserPage,
  onGetCharacters,
  onSetFocusCharacter,
  onAddPoint,
  onReset,
  errorAddPoint,
  errorReset,
  onClearAddPointError,
  onClearResetError,
  onClearBankingError,
  onGetGameSetting,
  onGetServerInfo,
  errorBanking,
  onDeposit,
  onWithDraw,
  onLoan,
  onTransfer,
  onBuyCredit
}) => {
  if (!serverInfo) {
    onGetServerInfo();
    return null;
  }

  if(!gameSetting){
    onGetGameSetting();
    return null;
  }

  return (
    <div className="ds9799-main-screen">
      <div className="mo-main-screen-background">
        <TopNavBar activeChannel={activeChannel} onChangeActiveChannel={onChangeActiveChannel} />
        {activeChannel == 'User' && (
          <UserChannel
            activeSideForm={activeSideForm}
            serverInfo={serverInfo}
            gameSetting={gameSetting}
            onChangeActiveSideForm={onChangeActiveSideForm}
            onRegister={onRegister}
            onLogin={onLogin}
            user={user}
            characters={characters}
            focusCharacter={focusCharacter}
            userPage={userPage}
            onLogout={onLogout}
            onEditProfile={onEditProfile}
            onChangeUserPage={onChangeUserPage}
            onGetCharacters={onGetCharacters}
            onSetFocusCharacter={onSetFocusCharacter}
            onAddPoint={onAddPoint}
            onReset={onReset}
            errorAddPoint={errorAddPoint}
            errorReset={errorReset}
            onClearAddPointError={onClearAddPointError}
            onClearResetError={onClearResetError}
            errorBanking={errorBanking}
            onDeposit={onDeposit}
            onWithDraw={onWithDraw}
            onLoan={onLoan}
            onTransfer={onTransfer}
            onBuyCredit={onBuyCredit}
            onClearBankingError={onClearBankingError}
          />
        )}
        {activeChannel == 'Server' && <ServerChannel />}
        {activeChannel == 'Admin' && <AdminChannel />}
        {!user && errorRegister && <div className="alert alert-danger">{errorRegister}</div>}
        {!user && errorLogin && <div className="alert alert-danger">{errorLogin}</div>}
      </div>
    </div>
  );
};
