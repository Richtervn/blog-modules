import React from 'react';

// import AccountsManager from './AccountsManager';
// , accounts, onGetAccounts, onSetActiveAccount, activeAccount

export default ({ page }) => {
  switch (page) {
    case 'Accounts Manager':
      // return (
      //   <AccountsManager/>
      // );
    case 'Characters Manager':
      return null;
    case 'Members Banking Manager':
      return null;
    case 'Members Credits Manager':
      return null;
    default:
      return null;
  }
};
