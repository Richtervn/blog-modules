import React from 'react';
import BankingCard from './BankingCard';

export default ({ bankings, onGetBankings, onEditBanking }) => {
	if (!bankings) {
		onGetBankings();
		return null;
	}

	return (
		<div className="ds9799-page-wrapper">
			<div className="row no-row-margin">
				{bankings.map((banking, i) => (
					<BankingCard key={i} banking={banking} onEditBanking={onEditBanking} />
				))}
			</div>
		</div>
	);
};
