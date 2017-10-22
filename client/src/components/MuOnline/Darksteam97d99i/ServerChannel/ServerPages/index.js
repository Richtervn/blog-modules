import React from 'react';

import BagItemsEditor from 'containers/MuOnline/Darksteam97d99i/ServerChannel/ServerPages/BagItemsEditor';
import ShopEditor from 'containers/MuOnline/Darksteam97d99i/ServerChannel/ServerPages/ShopEditor';
import QuestEditor from 'containers/MuOnline/Darksteam97d99i/ServerChannel/ServerPages/QuestEditor';
import MonsterSetBase from 'containers/MuOnline/Darksteam97d99i/ServerChannel/ServerPages/MonsterSetBase';
import VipSystem from 'containers/MuOnline/Darksteam97d99i/ServerChannel/ServerPages/VipSystem';

export default ({ page }) => {
  switch (page) {
    case 'Monster Set Base':
      return <MonsterSetBase/>;
    case 'Bag Items Editor':
      return <BagItemsEditor/>;
    case 'Shop Editor':
      return <ShopEditor/>
    case 'Quest Editor':
      return <QuestEditor/>
    case 'Vip System':
      return <VipSystem/>
    default:
      return null;
  }
};
