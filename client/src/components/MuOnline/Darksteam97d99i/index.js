import React from 'react';

import TopNavBar from './TopNavBar';

import UserChannel from 'containers/MuOnline/Darksteam97d99i/UserChannel';
// import AdminChannel from './AdminChannel';
// import ServerChannel from './ServerChannel';

export default ({
  channels,
  activeChannel,
  serverInfo,
  gameSetting,
  onChangeActiveChannel,
  onGetServerInfo,
  onGetGameSetting
}) => {
  if (!serverInfo) {
    onGetServerInfo();
    return null;
  }

  if (!gameSetting) {
    onGetGameSetting();
    return null;
  }
  return (
    <div className="ds9799-main-screen">
      <div className="mo-main-screen-background">
        <TopNavBar
          channels={channels}
          activeChannel={activeChannel}
          onChangeActiveChannel={onChangeActiveChannel}
        />
        {activeChannel == 'User' && <UserChannel />}
      </div>
    </div>
  );
};

//         {activeChannel == 'User' && (
//           <UserChannel
//             activeSideForm={activeSideForm}
//             serverInfo={serverInfo}
//             gameSetting={gameSetting}
//             onChangeActiveSideForm={onChangeActiveSideForm}
//             onRegister={onRegister}
//             onLogin={onLogin}
//             user={user}
//             characters={characters}
//             focusCharacter={focusCharacter}
//             userPage={userPage}
//             onLogout={onLogout}
//             onEditProfile={onEditProfile}
//             onChangeUserPage={onChangeUserPage}
//             onGetCharacters={onGetCharacters}
//             onSetFocusCharacter={onSetFocusCharacter}
//             onAddPoint={onAddPoint}
//             onReset={onReset}
//             errorAddPoint={errorAddPoint}
//             errorReset={errorReset}
//             errorGrandReset={errorGrandReset}
//             errorResetQuest={errorResetQuest}
//             onClearAddPointError={onClearAddPointError}
//             onClearResetError={onClearResetError}
//             onClearGrandResetError={onClearGrandResetError}
//             onClearResetQuestError={onClearResetQuestError}
//             errorBanking={errorBanking}
//             onDeposit={onDeposit}
//             onWithDraw={onWithDraw}
//             onLoan={onLoan}
//             onTransfer={onTransfer}
//             onBuyCredit={onBuyCredit}
//             onClearBankingError={onClearBankingError}
//             onGrandReset={onGrandReset}
//             onResetQuest={onResetQuest}
//           />
//         )}

// export default ({
//   data,
//   user,
//   characters,
//   gameSetting,
//   serverInfo,
//   focusCharacter,
//   activeChannel,
//   onChangeActiveChannel,
//   activeSideForm,
//   onChangeActiveSideForm,
//   onRegister,
//   onLogin,
//   errorRegister,
//   errorLogin,
//   userPage,
//   adminPage,
//   serverPage,
//   adminAccounts,
//   onLogout,
//   onEditProfile,
//   onChangeUserPage,
//   onChangeAdminPage,
//   onChangeServerPage,
//   onGetCharacters,
//   onSetFocusCharacter,
//   onAddPoint,
//   onReset,
//   onGrandReset,
//   onResetQuest,
//   errorAddPoint,
//   errorReset,
//   errorGrandReset,
//   errorResetQuest,
//   onClearAddPointError,
//   onClearResetError,
//   onClearGrandResetError,
//   onClearResetQuestError,
//   onClearBankingError,
//   onGetGameSetting,
//   onGetServerInfo,
//   errorBanking,
//   onDeposit,
//   onWithDraw,
//   onLoan,
//   onTransfer,
//   onBuyCredit,
//   onGetData,
//   onAdminGetAccounts,
//   onAdminSetActiveAccount,
//   adminActiveAccount
// }) => {

//   return (
// <div className="ds9799-main-screen">
//   <div className="mo-main-screen-background">
//     <TopNavBar activeChannel={activeChannel} onChangeActiveChannel={onChangeActiveChannel} />

//         {activeChannel == 'Server' && (
//           <ServerChannel
//             page={serverPage}
//             onChangePage={onChangeServerPage}
//             data={data}
//             onGetData={onGetData}
//           />
//         )}
//         {activeChannel == 'Admin' && (
//           <AdminChannel
//             onGetAccounts={onAdminGetAccounts}
//             accounts={adminAccounts}
//             page={adminPage}
//             onChangePage={onChangeAdminPage}
//             onSetActiveAccount={onAdminSetActiveAccount}
//             focusAccount={adminActiveAccount}
//           />
//         )}
//         {!user && errorRegister && <div className="alert alert-danger">{errorRegister}</div>}
//         {!user && errorLogin && <div className="alert alert-danger">{errorLogin}</div>}
//       </div>
//     </div>
//   );
// };
