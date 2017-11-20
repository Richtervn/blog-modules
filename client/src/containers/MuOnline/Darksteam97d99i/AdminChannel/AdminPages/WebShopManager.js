import WebShopManager from 'components/MuOnline/Darksteam97d99i/AdminChannel/AdminPages/WebShopManager';
import { connect } from 'react-redux';

import {
	setFocusWebShopCategory,
	addPackage,
	getPackage,
	editPackage,
	deletePackage
} from 'modules/MuOnline/darksteam97d99i/webShop';
import { getData } from 'modules/MuOnline/darksteam97d99i/data';

export default connect(
	({ ds9799_webShop, ds9799_data }) => ({
		categories: ds9799_webShop.categories,
		focusCategory: ds9799_webShop.focusWebShopCategory,
		data: ds9799_data,
		packages: ds9799_webShop.packages
	}),
	dispatch => ({
		onSelectCategory(category) {
			dispatch(setFocusWebShopCategory(category));
		},
		onGetData(name) {
			dispatch(getData(name));
		},
		onAddPackage(formBody) {
			dispatch(addPackage(formBody));
		},
		onGetPackage(id) {
			dispatch(getPackage(id));
		},
		onEditPackage(formBody) {
			dispatch(editPackage(formBody));
		},
		onDeletePackage(id) {
			dispatch(deletePackage(id));
		}
	})
)(WebShopManager);
