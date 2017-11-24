import LuxuryShopManager from 'components/MuOnline/Darksteam97d99i/AdminChannel/AdminPages/LuxuryShopManager';
import { connect } from 'react-redux';

import {
	setCurrentPage,
	addExchange,
	addConsumable,
	addReceipt,
	editExchange,
	editConsumable,
	editReceipt,
	deleteConsumable,
	deleteExchange,
	deleteReceipt,
	getExchange,
	getConsumable,
	getReceipt
} from 'modules/MuOnline/darksteam97d99i/luxuryShop';

import { getData } from 'modules/MuOnline/darksteam97d99i/data';

export default connect(
	({ ds9799_luxuryShop, ds9799_data }) => ({
		pages: ds9799_luxuryShop.pages,
		currentPage: ds9799_luxuryShop.currentPage,
		exchanges: ds9799_luxuryShop.exchanges,
		consumables: ds9799_luxuryShop.consumables,
		receipts: ds9799_luxuryShop.receipts,
		data: ds9799_data
	}),
	dispatch => ({
		onChangePage(page) {
			dispatch(setCurrentPage(page));
		},
		onGetData(name) {
			dispatch(getData(name));
		},
		onAddExchange(formBody) {
			dispatch(addExchange(formBody));
		},
		onAddConsumable(formBody) {
			dispatch(addConsumable(formBody));
		},
		onAddReceipt(formBody) {
			dispatch(addReceipt(formBody));
		},
		onEditExchange(formBody) {
			dispatch(editExchange(formBody));
		},
		onEditConsumable(formBody) {
			dispatch(editConsumable(formBody));
		},
		onEditReceipt(formBody) {
			dispatch(editReceipt(formBody));
		},
		onDeleteConsumable(id) {
			dispatch(deleteConsumable(id));
		},
		onDeleteReceipt(id) {
			dispatch(deleteReceipt(id));
		},
		onDeleteExchange(id) {
			dispatch(deleteExchange(id));
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
)(LuxuryShopManager);
