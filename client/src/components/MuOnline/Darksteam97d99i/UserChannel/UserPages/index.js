import React from 'react';

import Introduction from './Introduction';

import Dashboard from 'containers/MuOnline/Darksteam97d99i/UserChannel/UserPages/Dashboard';
import CharacterManager from 'containers/MuOnline/Darksteam97d99i/UserChannel/UserPages/CharacterManager';
import BankingManager from 'containers/MuOnline/Darksteam97d99i/UserChannel/UserPages/BankingManager';
import VipManager from 'containers/MuOnline/Darksteam97d99i/UserChannel/UserPages/VipManager';
import WebQuest from 'containers/MuOnline/Darksteam97d99i/UserChannel/UserPages/WebQuest';

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
    case 'Web Quest':
      return <WebQuest/>
    default:
      return <Introduction/>
  }
}
