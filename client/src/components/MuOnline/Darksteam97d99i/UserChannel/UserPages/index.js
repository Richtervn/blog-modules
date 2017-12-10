import React from 'react';

import Introduction from './Introduction';

import Dashboard from 'containers/MuOnline/Darksteam97d99i/UserChannel/UserPages/Dashboard';
import CharacterManager from 'containers/MuOnline/Darksteam97d99i/UserChannel/UserPages/CharacterManager';
import BankingManager from 'containers/MuOnline/Darksteam97d99i/UserChannel/UserPages/BankingManager';
import VipManager from 'containers/MuOnline/Darksteam97d99i/UserChannel/UserPages/VipManager';
import WebQuest from 'containers/MuOnline/Darksteam97d99i/UserChannel/UserPages/WebQuest';
import WebShop from 'containers/MuOnline/Darksteam97d99i/UserChannel/UserPages/WebShop';
import LuxuryShop from 'containers/MuOnline/Darksteam97d99i/UserChannel/UserPages/LuxuryShop';
import BlackSmith from 'containers/MuOnline/Darksteam97d99i/UserChannel/UserPages/BlackSmith';
import UpgradeItems from 'containers/MuOnline/Darksteam97d99i/UserChannel/UserPages/UpgradeItems';

export default ({ page }) => {
  switch (page) {
    case 'Introduction':
      return <Introduction />;
    case 'Dash Board':
      return <Dashboard />;
    case 'Character Manager':
      return <CharacterManager />;
    case 'Banking Manager':
      return <BankingManager />;
    case 'Vip Manager':
      return <VipManager />;
    case 'Web Quest':
      return <WebQuest />;
    case 'Web Shop':
      return <WebShop />;
    case 'Luxury Shop':
      return <LuxuryShop />;
    case 'Blacksmith':
      return <BlackSmith />;
    case 'Upgrade Items':
      return <UpgradeItems />;
    default:
      return <Introduction />;
  }
};
