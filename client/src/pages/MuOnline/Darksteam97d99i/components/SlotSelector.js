import './SlotSelector.css';
import React from 'react';

export default ({ onSelect }) => {
  const Inventory = [
    { name: 'Right hand', value: 'RightHand' },
    { name: 'Left hand', value: 'LeftHand' },
    { name: 'Helm', value: 'Helm' },
    { name: 'Armor', value: 'Armor' },
    { name: 'Pants', value: 'Pants' },
    { name: 'Gloves', value: 'Gloves' },
    { name: 'Boots', value: 'Boots' },
    { name: 'Wing', value: 'Wing' },
    { name: 'Pet', value: 'Pet' },
    { name: 'Pendant', value: 'Pendant' },
    { name: 'Right ring', value: 'RightRing' },
    { name: 'Left ring', value: 'LeftRing' }
  ];

  for (let i = 120, index = 0; i < 760; i += 10, index++) {
    const x = Math.floor(index / 8) + 1;
    const y = index % 8 + 1;
    Inventory.push({ name: `X : ${x}, Y : ${y}`, value: `Inventory${x}${y}` });
  }

  return (
    <select className="ds9799-slot-select form-control" onChange={onSelect}>
      <option value=''>Select slot</option>
      {Inventory.map((slot, i) => (
        <option key={i} value={slot.value}>
          {slot.name}
        </option>
      ))}
    </select>
  );
};
