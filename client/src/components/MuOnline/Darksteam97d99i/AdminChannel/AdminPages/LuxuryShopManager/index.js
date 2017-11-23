import React from 'react';
import NavigatorBar from './NavigatorBar';

import Exchange from './Exchange';
import Receipt from './Receipt';
import Consumable from './Consumable';

export default ({ pages, currentPage, onChangePage }) => (
	<div className="ds9799-page-wrapper">
		<NavigatorBar pages={pages} currentPage={currentPage} onChangePage={onChangePage} />
		<div className="row no-row-margin">
		<div className="ds9799-lx-list-container">
			{currentPage == 'Exchange' && <Exchange />}
			{currentPage == 'Receipt' && <Receipt />}
			{currentPage == 'Consumable' && <Consumable />}
		</div>
		</div>
	</div>
);
