import React from 'react';
import NavigatorBar from './NavigatorBar';

import Exchange from './Exchange';
import Receipt from './Receipt';
import Consumable from './Consumable';

export default ({
	pages,
	currentPage,
	data,
	exchanges,
	consumables,
	receipts,
	onChangePage,
	onGetData,
	onAddExchange,
	onEditExchange,
	onDeleteExchange,
	onGetExchange,
	onAddReceipt,
	onDeleteReceipt,
	onEditReceipt,
	onGetReceipt,
	onAddConsumable,
	onEditConsumable,
	onDeleteConsumable,
	onGetConsumable
}) => (
	<div className="ds9799-page-wrapper">
		<NavigatorBar pages={pages} currentPage={currentPage} onChangePage={onChangePage} />
		<div className="row no-row-margin">
			<div className="ds9799-lx-list-container">
				{currentPage == 'Exchange' && (
					<Exchange
						data={data}
						onGetData={onGetData}
						exchanges={exchanges}
						onAddExchange={onAddExchange}
						onEditExchange={onEditExchange}
						onDeleteExchange={onDeleteExchange}
						onGetExchange={onGetExchange}
					/>
				)}
				{currentPage == 'Receipts' && (
					<Receipt
						data={data}
						onGetData={onGetData}
						receipts={receipts}
						onAddReceipt={onAddReceipt}
						onGetReceipt={onGetReceipt}
						onEditReceipt={onEditReceipt}
						onDeleteReceipt={onDeleteReceipt}
					/>
				)}
				{currentPage == 'Consumable' && (
					<Consumable
						data={data}
						onGetData={onGetData}
						consumables={consumables}
						onAddConsumable={onAddConsumable}
						onGetConsumable={onGetConsumable}
						onEditConsumable={onEditConsumable}
						onDeleteConsumable={onDeleteConsumable}
					/>
				)}
			</div>
		</div>
	</div>
);
