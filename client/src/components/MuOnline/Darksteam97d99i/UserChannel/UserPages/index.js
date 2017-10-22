import React from 'react';

import Introduction from './Introduction';

import Dashboard from 'containers/MuOnline/Darksteam97d99i/UserChannel/UserPages/Dashboard';
import CharacterManager from 'containers/MuOnline/Darksteam97d99i/UserChannel/UserPages/CharacterManager';
import BankingManager from 'containers/MuOnline/Darksteam97d99i/UserChannel/UserPages/BankingManager';
import VipManager from 'containers/MuOnline/Darksteam97d99i/UserChannel/UserPages/VipManager';

export default ({page}) => {
  switch(page){
    case 'Introduction':
      return <Introduction/>
    case 'Dash Board':
      return <Dashboard/>
    case 'Character Manager':
      return <CharacterManager/>
    case 'Banking Manager':
      return <BankingManager/>
    case 'Vip Manager':
      return <VipManager/>
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

//       );
//     default:
//       return <Introduction />;
//   }
// };
