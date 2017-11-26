import LuxuryShop from 'components/MuOnline/Darksteam97d99i/UserChannel/UserPages/LuxuryShop';
import { connect } from 'react-redux';

import { setCurrentPage, getExchange, getConsumable, getReceipt } from 'modules/MuOnline/darksteam97d99i/luxuryShop';

export default connect(
	({ ds9799_luxuryShop }) => ({
		pages: ds9799_luxuryShop.pages,
		currentPage: ds9799_luxuryShop.currentPage,
		receipts: ds9799_luxuryShop.receipts,
		consumables: ds9799_luxuryShop.consumables,
		exchanges: ds9799_luxuryShop.exchanges
	}),
	dispatch => ({
		onChangePage(page) {
			dispatch(setCurrentPage(page));
		},
		onGetExchange() {
			dispatch(getExchange());
		},
		onGetConsumable() {
			dispatch(getConsumable());
		},
		onGetReceipt() {
			dispatch(getReceipt());
		}
	})
)(LuxuryShop);
