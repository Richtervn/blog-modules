import React from 'react';
import ConsumableCard from '../../../AdminChannel/AdminPages/LuxuryShopManager/ConsumableCard';

export default ({ consumables, onGetConsumable }) => {
	if (!consumables) {
		onGetConsumable();
		return null;
	}
	return (
		<div>
			<div className="row no-row-margin" style={{ flexWrap: 'wrap' }}>
				{consumables.map((consumable, i) => <ConsumableCard key={i} consumable={consumable} />)}
			</div>
		</div>
	);
};
