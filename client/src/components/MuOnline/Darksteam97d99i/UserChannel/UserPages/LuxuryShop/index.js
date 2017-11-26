import React from 'react';
import NavigatorBar from '../../../AdminChannel/AdminPages/LuxuryShopManager/NavigatorBar';
import Exchange from './Exchange';
import Consumable from './Consumable';
import Receipt from './Receipt';

export default ({
	pages,
	receipts,
	consumables,
	exchanges,
	currentPage,
	onChangePage,
	onGetExchange,
	onGetReceipt,
	onGetConsumable
}) => (
	<div className="ds9799-page-wrapper">
		<NavigatorBar pages={pages} currentPage={currentPage} onChangePage={onChangePage} />
		<div className="row no-row-margin">
			<div className="ds9799-lx-list-container">
				{currentPage == 'Exchange' && <Exchange exchanges={exchanges} onGetExchange={onGetExchange} />}
				{currentPage == 'Receipts' && <Receipt receipts={receipts} onGetReceipt={onGetReceipt} />}
				{currentPage == 'Consumable' && <Consumable consumables={consumables} onGetConsumable={onGetConsumable} />}
			</div>
		</div>
	</div>
);
