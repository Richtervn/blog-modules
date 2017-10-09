import React from 'react';
import BagItemsEditor from './BagItemsEditor';
import ShopEditor from './ShopEditor';
import QuestEditor from './QuestEditor';

export default ({ page, data, onGetData }) => {
  switch (page) {
    case 'Bag Items Editor':
      return <BagItemsEditor data={data} onGetData={onGetData}/>;
    case 'Shop Editor':
      return <ShopEditor data={data} onGetData={onGetData}/>
    case 'Quest Editor':
      return <QuestEditor data={data} onGetData={onGetData}/>
    default:
      return null;
  }
};
