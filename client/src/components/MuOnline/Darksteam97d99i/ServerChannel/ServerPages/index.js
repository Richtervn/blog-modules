import React from 'react';
import BagItemsEditor from './BagItemsEditor';

export default ({ page, data, onGetData }) => {
  switch (page) {
    case 'Bag Items Editor':
      return <BagItemsEditor data={data} onGetData={onGetData}/>;
    default:
      return null;
  }
};
