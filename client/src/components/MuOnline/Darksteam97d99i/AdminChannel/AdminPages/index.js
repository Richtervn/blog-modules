import React from 'react';

import AccountsManager from './AccountsManager';

export default ({ page, accounts, onGetAccounts, onSetActiveAccount, activeAccount }) => {
  switch (page) {
    case 'Accounts Manager':
      return (
        <AccountsManager
          accounts={accounts}
          onGetAccounts={onGetAccounts}
          onSetActiveAccount={onSetActiveAccount}
          activeAccount={activeAccount}
        />
      );
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
