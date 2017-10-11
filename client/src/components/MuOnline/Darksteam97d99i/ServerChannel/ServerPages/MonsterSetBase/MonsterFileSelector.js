import React from 'react';

export default ({ data, onGetData, onSelect, monId }) => {
  if (!data.Monsters) {
    onGetData('Monsters');
    return null;
  }
  return (
    <div className="text-center">
      <select className="ds9799-form-selector" onChange={onSelect}>
        {data.Monsters.map((mon, i) => (
          <option key={i} value={mon._id}>
            {mon.Name}
          </option>
        ))}
      </select>
      <img src={`/app_modules/images/muonline/monster/${monId}.gif`} />
    </div>
  );
};
