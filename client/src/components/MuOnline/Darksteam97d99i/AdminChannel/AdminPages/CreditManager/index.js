import React from 'react';
import CreditCard from './CreditCard'

export default ({ credits, onGetCredits, onEditCredit }) => {
	if (!credits) {
		onGetCredits();
		return null;
	}

	return (
		<div className="ds9799-page-wrapper">
			<div className="row no-row-margin">
				{credits.map((credit, i) => (
					<CreditCard key={i} credit={credit} onEditCredit={onEditCredit} />
				))}
			</div>
		</div>
	);
};
