import React from 'react';
import ReceiptCard from '../../../AdminChannel/AdminPages/LuxuryShopManager/ReceiptCard';

export default ({ receipts, onGetReceipt, onBuyReceipt, user }) => {
	if (!receipts) {
		onGetReceipt();
		return null;
	}
	return (
		<div>
			<div className="row no-row-margin" style={{ flexWrap: 'wrap' }}>
				{receipts.map((receipt, i) => (
					<ReceiptCard
						key={i}
						receipt={receipt}
						onClickBuy={() => onBuyReceipt(user.memb___id, receipt.id)}
					/>
				))}
			</div>
		</div>
	);
};
