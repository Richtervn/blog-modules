import React from 'react';

import BagItemsEditor from 'containers/MuOnline/Darksteam97d99i/ServerChannel/ServerPages/BagItemsEditor';
import ShopEditor from 'containers/MuOnline/Darksteam97d99i/ServerChannel/ServerPages/ShopEditor';
import QuestEditor from 'containers/MuOnline/Darksteam97d99i/ServerChannel/ServerPages/QuestEditor';
import MonsterSetBase from 'containers/MuOnline/Darksteam97d99i/ServerChannel/ServerPages/MonsterSetBase';

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
    default:
      return null;
  }
};
