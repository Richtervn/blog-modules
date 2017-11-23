import LuxuryShopManager from 'components/MuOnline/Darksteam97d99i/AdminChannel/AdminPages/LuxuryShopManager';
import { connect } from 'react-redux';

import { setCurrentPage } from 'modules/MuOnline/darksteam97d99i/luxuryShop';

export default connect(
	({ ds9799_luxuryShop }) => ({ pages: ds9799_luxuryShop.pages, currentPage: ds9799_luxuryShop.currentPage }),
	dispatch => ({
		onChangePage(page) {
			dispatch(setCurrentPage(page));
		}
	})
)(LuxuryShopManager);
