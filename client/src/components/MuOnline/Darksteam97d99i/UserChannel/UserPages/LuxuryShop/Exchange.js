import React from 'react';
import ExchangeCard from '../../../AdminChannel/AdminPages/LuxuryShopManager/ExchangeCard';

export default ({ exchanges, onGetExchange }) => {
	if (!exchanges) {
		onGetExchange();
		return null;
	}
	return (
		<div>
			<div className="row no-row-margin" style={{ flexWrap: 'wrap' }}>
				{exchanges.map((exchange, i) => <ExchangeCard key={i} exchange={exchange} />)}
			</div>
		</div>
	);
};
