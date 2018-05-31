import React from 'react';

export default ({ data, onGetData, onSelect }) => {
  if (!data.ShopList) {
    onGetData('ShopList');
    return null;
  }
  return (
    <select className="ds9799-form-selector" onChange={onSelect}>
      {data.ShopList.map((shop, i) => (
        <option key={i} value={shop.Name}>{`${shop.File} - ${shop.Name}`}</option>
      ))}
    </select>
  );
};
