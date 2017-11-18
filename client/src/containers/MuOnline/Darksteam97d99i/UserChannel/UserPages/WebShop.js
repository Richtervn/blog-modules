import WebShop from 'components/MuOnline/Darksteam97d99i/UserChannel/UserPages/WebShop';
import { connect } from 'react-redux';

import { getPackage, setFocusCategory } from 'modules/MuOnline/darksteam97d99i/webShop';

export default connect(
	({ ds9799_webShop }) => ({
		categories: ds9799_webShop.categories,
		packages: ds9799_webShop.packages,
		focusCategory: ds9799_webShop.focusCategory
	}),
	dispatch => ({
		onGetPackage(id) {
			dispatch(getPackage(id));
		},
		onSetFocusCategory(category) {
			dispatch(setFocusCategory(category));
		}
	})
)(WebShop);
