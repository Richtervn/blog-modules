import React from 'react';

import Introduction from './Introduction';

import Dashboard from 'containers/MuOnline/Darksteam97d99i/UserChannel/UserPages/Dashboard';
import CharacterManager from 'containers/MuOnline/Darksteam97d99i/UserChannel/UserPages/CharacterManager';
// import BankingManager from './BankingManager';

export default ({page}) => {
  switch(page){
    case 'Introduction':
      return <Introduction/>
    case 'Dash Board':
      return <Dashboard/>
    case 'Character Manager':
      return <CharacterManager/>
    default:
      return <Introduction/>
  }
}

// export default ({
//   user,
//   page,
//   characters,
//   focusCharacter,
//   onEditProfile,
//   onGetCharacters,
//   onSetFocusCharacter,
//   onAddPoint,
//   onReset,
//   onGrandReset,
//   onResetQuest,
//   onDeposit,
//   onWithdraw,
//   onLoan,
//   onTransfer,
//   onBuyCredit,
//   errorAddPoint,
//   errorReset,
//   errorBanking,
//   errorGrandReset,
//   errorResetQuest,
//   onClearAddPointError,
//   onClearResetError,
//   onClearBankingError,
//   onClearGrandResetError,
//   onClearResetQuestError,
//   gameSetting
// }) => {
//   switch (page) {
//     case 'Introduction':
//       return <Introduction />;
//     case 'Dash Board':
//       return <Dashboard user={user} onEditProfile={onEditProfile} />;
//     case 'Character Manager':
//       return (

//       );
//     case 'Banking Manager':
//       return (
//         <BankingManager
//           user={user}
//           characters={characters}
//           onSetFocusCharacter={onSetFocusCharacter}
//           onGetCharacters={onGetCharacters}
//           focusCharacter={focusCharacter}
//           gameSetting={gameSetting}
//           errorBanking={errorBanking}
//           onClearBankingError={onClearBankingError}
//           onDeposit={onDeposit}
//           onLoan={onLoan}
//           onWithdraw={onWithdraw}
//           onTransfer={onTransfer}
//           onBuyCredit={onBuyCredit}
//         />
//       );
//     default:
//       return <Introduction />;
//   }
// };
