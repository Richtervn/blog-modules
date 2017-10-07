import React from 'react';

export default ({ data, onGetData, onSelect }) => {
  if (!data.EventItemBagList) {
    onGetData('EventItemBagList');
    return null;
  }
  return (
    <select className="ds9799-form-selector" onChange={onSelect}>
      {data.EventItemBagList.map((bag, i) => (
        <option key={i} value={bag.Name}>{`${bag.File} - ${bag.Name}`}</option>
      ))}
    </select>
  );
};
