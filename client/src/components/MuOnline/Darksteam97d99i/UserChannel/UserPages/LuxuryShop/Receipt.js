import React from 'react';
import ReceiptCard from '../../../AdminChannel/AdminPages/LuxuryShopManager/ReceiptCard';

export default ({ receipts, onGetReceipt }) => {
	if (!receipts) {
		onGetReceipt();
		return null;
	}
	return (
		<div>
			<div className="row no-row-margin" style={{ flexWrap: 'wrap' }}>
				{receipts.map((receipt, i) => <ReceiptCard key={i} receipt={receipt} />)}
			</div>
		</div>
	);
};
