import LuxuryShop from 'components/MuOnline/Darksteam97d99i/UserChannel/UserPages/LuxuryShop';
import { connect } from 'react-redux';

import {
	setCurrentPage,
	getExchange,
	getConsumable,
	getReceipt,
	getExchangeCount,
	tradeExchange,
	buyConsumable,
	buyReceipt
} from 'modules/MuOnline/darksteam97d99i/luxuryShop';

import { getCharacters } from 'modules/MuOnline/darksteam97d99i/character';

export default connect(
	({ ds9799_luxuryShop, ds9799_user, ds9799_character }) => ({
		pages: ds9799_luxuryShop.pages,
		currentPage: ds9799_luxuryShop.currentPage,
		receipts: ds9799_luxuryShop.receipts,
		consumables: ds9799_luxuryShop.consumables,
		exchanges: ds9799_luxuryShop.exchanges,
		exchangeCount: ds9799_luxuryShop.exchangeCount,
		user: ds9799_user.user,
		characters: ds9799_character.characters
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
		},
		onGetExchangeCount(memb___id, exchangeId) {
			dispatch(getExchangeCount(memb___id, exchangeId));
		},
		onGetCharacters(id) {
			dispatch(getCharacters(id));
		},
		onTradeExchange(query) {
			dispatch(tradeExchange(query));
		},
		onBuyReceipt(memb___id, receiptId) {
			dispatch(buyReceipt(memb___id, receiptId));
		},
		onBuyConsumable() {
			dispatch(buyConsumable());
		}
	})
)(LuxuryShop);
