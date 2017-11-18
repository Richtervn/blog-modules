import React from 'react';

export default ({ onSelect }) => {
	const Inventory = [
		'Right hand',
		'Left hand',
		'Helm',
		'Armor',
		'Pants',
		'Gloves',
		'Boots',
		'Wing',
		'Pet',
		'Pendant',
		'Right ring',
		'Left ring'
	];

	for (let i = 120, index = 0; i < 760; i += 10, index++) {
		const x = Math.floor(index / 8) + 1;
		const y = index % 8 + 1;
		Inventory.push(`X : ${x}, Y : ${y}`);
	}

	return (
		<select className="ds9799-form-selector" onChange={onSelect}>
			{Inventory.map((slot, i) => (
				<option key={i} value={slot}>
					{slot}
				</option>
			))}
		</select>
	);
};