import React from 'react';

import AccountsManager from 'containers/MuOnline/Darksteam97d99i/AdminChannel/AdminPages/AccountsManager';
import CharactersManager from 'containers/MuOnline/Darksteam97d99i/AdminChannel/AdminPages/CharactersManager';
import BankingManager from 'containers/MuOnline/Darksteam97d99i/AdminChannel/AdminPages/BankingManager';
import CreditManager from 'containers/MuOnline/Darksteam97d99i/AdminChannel/AdminPages/CreditManager';
import WebShopManager from 'containers/MuOnline/Darksteam97d99i/AdminChannel/AdminPages/WebShopManager';
import LuxuryShopManager from 'containers/MuOnline/Darksteam97d99i/AdminChannel/AdminPages/LuxuryShopManager';

export default ({ page }) => {
  switch (page) {
    case 'Accounts Manager':
      return <AccountsManager />;
    case 'Characters Manager':
      return <CharactersManager />;
    case 'Members Banking Manager':
      return <BankingManager />;
    case 'Members Credits Manager':
      return <CreditManager />;
    case 'Web Shop Manager':
      return <WebShopManager />;
    case 'Luxury Shop Manager':
      return <LuxuryShopManager/>;
    default:
      return null;
  }
};
