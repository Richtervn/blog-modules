import React from 'react';

export default ({ data, onGetData, onSelect }) => {
  if (!data.Maps) {
    onGetData('Maps');
    return null;
  }
  return (
    <div className="text-center">
      <select className="ds9799-form-selector" onChange={onSelect}>
        {data.Maps.map((map, i) => (
          <option key={i} value={map._id}>
            {map.Name}
          </option>
        ))}
      </select>
    </div>
  );
};
