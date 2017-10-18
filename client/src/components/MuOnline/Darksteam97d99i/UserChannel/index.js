import React from 'react';

import SideNavMenu from 'containers/MuOnline/Darksteam97d99i/UserChannel/SideNavMenu';
import UserPages from 'containers/MuOnline/Darksteam97d99i/UserChannel/UserPages';

export default () => (
  <div className="row no-row-margin">
    <div className="col-3 no-col-margin">
      <SideNavMenu/>
    </div>
    <div className="col-9 no-col-margin">
      <UserPages/>
    </div>
  </div>
)

// export default ({
//   user,
//   characters,
//   focusCharacter,
//   userPage,
//   activeSideForm,
//   onChangeActiveSideForm,
//   onRegister,
//   onLogin,
//   onLogout,
//   onEditProfile,
//   onChangeUserPage,
//   onSetFocusCharacter,
//   onGetCharacters,
//   onAddPoint,
//   onReset,
//   onGrandReset,
//   onResetQuest,
//   errorReset,
//   errorAddPoint,
//   errorGrandReset,
//   errorResetQuest,
//   onClearAddPointError,
//   onClearResetError,
//   onClearBankingError,
//   onClearGrandResetError,
//   onClearResetQuestError,
//   serverInfo,
//   gameSetting,
//   errorBanking,
//   onBuyCredit,
//   onLoan,
//   onDeposit,
//   onWithdraw,
//   onTransfer
// }) => (


//     </div>
//     <div className="col-9 no-col-margin">
//       <UserPages
//         user={user}
//         page={userPage}
//         onEditProfile={onEditProfile}
//         onSetFocusCharacter={onSetFocusCharacter}
//         onGetCharacters={onGetCharacters}
//         characters={characters}
//         focusCharacter={focusCharacter}
//         onAddPoint={onAddPoint}
//         onReset={onReset}
//         onLoan={onLoan}
//         onWithdraw={onWithdraw}
//         onDeposit={onDeposit}
//         onTransfer={onTransfer}
//         onBuyCredit={onBuyCredit}
//         errorAddPoint={errorAddPoint}
//         errorReset={errorReset}
//         errorBanking={errorBanking}
//         errorGrandReset={errorGrandReset}
//         errorResetQuest={errorResetQuest}
//         onClearAddPointError={onClearAddPointError}
//         onClearResetError={onClearResetError}
//         onClearBankingError={onClearBankingError}
//         gameSetting={gameSetting}
//         onGrandReset={onGrandReset}
//         onResetQuest={onResetQuest}
//         onClearGrandResetError={onClearGrandResetError}
//         onClearResetQuestError={onClearResetQuestError}
//       />

// );
