import React from 'react';

import AccountsManager from './AccountsManager';

export default ({ page, accounts, onGetAccounts }) => {
  switch (page) {
    default:
      return <AccountsManager accounts={accounts} onGetAccounts={onGetAccounts} />;
  }
};
