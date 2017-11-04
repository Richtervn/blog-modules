import React from 'react';

import AccountsManager from 'containers/MuOnline/Darksteam97d99i/AdminChannel/AdminPages/AccountsManager';

export default ({ page }) => {
  switch (page) {
    case 'Accounts Manager':
      return <AccountsManager/>;
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
