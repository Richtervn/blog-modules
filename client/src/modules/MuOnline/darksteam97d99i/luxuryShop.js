import actionCreator from 'factories/actionCreator';
import { darksteam97d99i } from 'services';
import { toast } from 'react-toastify';

const ADD_EXCHANGE_START = 'darksteam97d99i/luxuryShop/ADD_EXCHANGE_START';
const ADD_EXCHANGE_SUCCESS = 'darksteam97d99i/luxuryShop/ADD_EXCHANGE_SUCCESS';
const ADD_EXCHANGE_FAIL = 'darksteam97d99i/luxuryShop/ADD_EXCHANGE_FAIL';
const EDIT_EXCHANGE_START = 'darksteam97d99i/luxuryShop/EDIT_EXCHANGE_START';
const EDIT_EXCHANGE_SUCCESS = 'darksteam97d99i/luxuryShop/EDIT_EXCHANGE_SUCCESS';
const EDIT_EXCHANGE_FAIL = 'darksteam97d99i/luxuryShop/EDIT_EXCHANGE_FAIL';
const DELETE_EXCHANGE_START = 'darksteam97d99i/luxuryShop/DELETE_EXCHANGE_START';
const DELETE_EXCHANGE_SUCCESS = 'darksteam97d99i/luxuryShop/DELETE_EXCHANGE_SUCCESS';
const DELETE_EXCHANGE_FAIL = 'darksteam97d99i/luxuryShop/DELETE_EXCHANGE_FAIL';
const GET_EXCHANGE_START = 'darksteam97d99i/luxuryShop/GET_EXCHANGE_START';
const GET_EXCHANGE_FAIL = 'darksteam97d99i/luxuryShop/GET_EXCHANGE_FAIL';
const GET_EXCHANGE_SUCCESS = 'darksteam97d99i/luxuryShop/GET_EXCHANGE_SUCCESS';

const ADD_CONSUMABLE_START = 'darksteam97d99i/luxuryShop/ADD_CONSUMABLE_START';
const ADD_CONSUMABLE_SUCCESS = 'darksteam97d99i/luxuryShop/ADD_CONSUMABLE_SUCCESS';
const ADD_CONSUMABLE_FAIL = 'darksteam97d99i/luxuryShop/ADD_CONSUMABLE_FAIL';
const EDIT_CONSUMABLE_START = 'darksteam97d99i/luxuryShop/EDIT_CONSUMABLE_START';
const EDIT_CONSUMABLE_SUCCESS = 'darksteam97d99i/luxuryShop/EDIT_CONSUMABLE_SUCCESS';
const EDIT_CONSUMABLE_FAIL = 'darksteam97d99i/luxuryShop/EDIT_CONSUMABLE_FAIL';
const DELETE_CONSUMABLE_START = 'darksteam97d99i/luxuryShop/DELETE_CONSUMABLE_START';
const DELETE_CONSUMABLE_SUCCESS = 'darksteam97d99i/luxuryShop/DELETE_CONSUMABLE_SUCCESS';
const DELETE_CONSUMABLE_FAIL = 'darksteam97d99i/luxuryShop/DELETE_CONSUMABLE_FAIL';
const GET_CONSUMABLE_START = 'darksteam97d99i/luxuryShop/GET_CONSUMABLE_START';
const GET_CONSUMABLE_FAIL = 'darksteam97d99i/luxuryShop/GET_CONSUMABLE_FAIL';
const GET_CONSUMABLE_SUCCESS = 'darksteam97d99i/luxuryShop/GET_CONSUMABLE_SUCCESS';

const ADD_RECEIPT_START = 'darksteam97d99i/luxuryShop/ADD_RECEIPT_START';
const ADD_RECEIPT_SUCCESS = 'darksteam97d99i/luxuryShop/ADD_RECEIPT_SUCCESS';
const ADD_RECEIPT_FAIL = 'darksteam97d99i/luxuryShop/ADD_RECEIPT_FAIL';
const EDIT_RECEIPT_START = 'darksteam97d99i/luxuryShop/EDIT_RECEIPT_START';
const EDIT_RECEIPT_SUCCESS = 'darksteam97d99i/luxuryShop/EDIT_RECEIPT_SUCCESS';
const EDIT_RECEIPT_FAIL = 'darksteam97d99i/luxuryShop/EDIT_RECEIPT_FAIL';
const DELETE_RECEIPT_START = 'darksteam97d99i/luxuryShop/DELETE_RECEIPT_START';
const DELETE_RECEIPT_SUCCESS = 'darksteam97d99i/luxuryShop/DELETE_RECEIPT_SUCCESS';
const DELETE_RECEIPT_FAIL = 'darksteam97d99i/luxuryShop/DELETE_RECEIPT_FAIL';
const GET_RECEIPT_START = 'darksteam97d99i/luxuryShop/GET_RECEIPT_START';
const GET_RECEIPT_FAIL = 'darksteam97d99i/luxuryShop/GET_RECEIPT_FAIL';
const GET_RECEIPT_SUCCESS = 'darksteam97d99i/luxuryShop/GET_RECEIPT_SUCCESS';

const GET_USER_RECEIPTS_START = 'darksteam97d99i/luxuryShop/GET_USER_RECEIPTS_START';
const GET_USER_RECEIPTS_SUCCESS = 'darksteam97d99i/luxuryShop/GET_USER_RECEIPTS_SUCCESS';
const GET_USER_RECEIPTS_FAIL = 'darksteam97d99i/luxuryShop/GET_USER_RECEIPTS_FAIL';

const GET_EXCHANGE_COUNT_START = 'darksteam97d99i/luxuryShop/GET_EXCHANGE_COUNT_START';
const GET_EXCHANGE_COUNT_SUCCESS = 'darksteam97d99i/luxuryShop/GET_EXCHANGE_COUNT_SUCCESS';
const GET_EXCHANGE_COUNT_FAIL = 'darksteam97d99i/luxuryShop/GET_EXCHANGE_COUNT_FAIL';
const TRADE_EXCHANGE_START = 'darksteam97d99i/luxuryShop/TRADE_EXCHANGE_START';
export const TRADE_EXCHANGE_SUCCESS = 'darksteam97d99i/luxuryShop/TRADE_EXCHANGE_SUCCESS';
const TRADE_EXCHANGE_FAIL = 'darksteam97d99i/luxuryShop/TRADE_EXCHANGE_FAIL';
const GET_COUNT_MATERIALS_START = 'darksteam97d99i/luxuryShop/GET_COUNT_MATERIALS_START';
const GET_COUNT_MATERIALS_SUCCESS = 'darksteam97d99i/luxuryShop/GET_COUNT_MATERIALS_SUCCESS';
const GET_COUNT_MATERIALS_FAIL = 'darksteam97d99i/luxuryShop/GET_COUNT_MATERIALS_FAIL';

const BUY_CONSUMABLE_START = 'darksteam97d99i/luxuryShop/BUY_CONSUMABLE_START';
export const BUY_CONSUMABLE_SUCCESS = 'darksteam97d99i/luxuryShop/BUY_CONSUMABLE_SUCCESS';
const BUY_CONSUMABLE_FAIL = 'darksteam97d99i/luxuryShop/BUY_CONSUMABLE_FAIL';
const BUY_RECEIPT_START = 'darksteam97d99i/luxuryShop/BUY_RECEIPT_START';
export const BUY_RECEIPT_SUCCESS = 'darksteam97d99i/luxuryShop/BUY_RECEIPT_SUCCESS';
const BUY_RECEIPT_FAIL = 'darksteam97d99i/luxuryShop/BUY_RECEIPT_FAIL';

const CRAFT_ITEM_START = 'darksteam97d99i/luxuryShop/CRAFT_ITEM_START';
export const CRAFT_ITEM_SUCCESS = 'darksteam97d99i/luxuryShop/CRAFT_ITEM_SUCCESS';
const CRAFT_ITEM_FAIL = 'darksteam97d99i/luxuryShop/CRAFT_ITEM_FAIL';
const SELL_RECEIPT_START = 'darksteam97d99i/luxuryShop/SELL_RECEIPT_START';
export const SELL_RECEIPT_SUCCESS = 'darksteam97d99i/luxuryShop/SELL_RECEIPT_SUCCESS';
const SELL_RECEIPT_FAIL = 'darksteam97d99i/luxuryShop/SELL_RECEIPT_FAIL';

export const craftItem = (characterName, receiptId) =>
	actionCreator(
		CRAFT_ITEM_START,
		CRAFT_ITEM_SUCCESS,
		CRAFT_ITEM_FAIL,
		darksteam97d99i.craftItem,
		characterName,
		receiptId
	)();
export const sellReceipt = (memb___id, receiptId) =>
	actionCreator(
		SELL_RECEIPT_START,
		SELL_RECEIPT_SUCCESS,
		SELL_RECEIPT_FAIL,
		darksteam97d99i.sellReceipt,
		memb___id,
		receiptId
	)();

const SET_CURRENT_PAGE = 'darksteam97d99i/luxuryShop/SET_CURRENT_PAGE';
export const setCurrentPage = page => ({ type: SET_CURRENT_PAGE, page });

export const addExchange = formBody =>
	actionCreator(
		ADD_EXCHANGE_START,
		ADD_EXCHANGE_SUCCESS,
		ADD_EXCHANGE_FAIL,
		darksteam97d99i.adminAddExchange,
		formBody
	)();
export const editExchange = formBody =>
	actionCreator(
		EDIT_EXCHANGE_START,
		EDIT_EXCHANGE_SUCCESS,
		EDIT_EXCHANGE_FAIL,
		darksteam97d99i.adminEditExchange,
		formBody
	)();
export const getExchange = actionCreator(
	GET_EXCHANGE_START,
	GET_EXCHANGE_SUCCESS,
	GET_EXCHANGE_FAIL,
	darksteam97d99i.getExchange
);
export const deleteExchange = id =>
	actionCreator(
		DELETE_EXCHANGE_START,
		DELETE_EXCHANGE_SUCCESS,
		DELETE_EXCHANGE_FAIL,
		darksteam97d99i.deleteExchange,
		id
	)();

export const addConsumable = formBody =>
	actionCreator(
		ADD_CONSUMABLE_START,
		ADD_CONSUMABLE_SUCCESS,
		ADD_CONSUMABLE_FAIL,
		darksteam97d99i.adminAddConsumable,
		formBody
	)();
export const editConsumable = formBody =>
	actionCreator(
		EDIT_CONSUMABLE_START,
		EDIT_CONSUMABLE_SUCCESS,
		EDIT_CONSUMABLE_FAIL,
		darksteam97d99i.adminEditConsumable,
		formBody
	)();
export const getConsumable = actionCreator(
	GET_CONSUMABLE_START,
	GET_CONSUMABLE_SUCCESS,
	GET_CONSUMABLE_FAIL,
	darksteam97d99i.getConsumable
);
export const deleteConsumable = id =>
	actionCreator(
		DELETE_CONSUMABLE_START,
		DELETE_CONSUMABLE_SUCCESS,
		DELETE_CONSUMABLE_FAIL,
		darksteam97d99i.deleteConsumable,
		id
	)();

export const addReceipt = formBody =>
	actionCreator(
		ADD_RECEIPT_START,
		ADD_RECEIPT_SUCCESS,
		ADD_RECEIPT_FAIL,
		darksteam97d99i.adminAddReceipt,
		formBody
	)();
export const editReceipt = formBody =>
	actionCreator(
		EDIT_RECEIPT_START,
		EDIT_RECEIPT_SUCCESS,
		EDIT_RECEIPT_FAIL,
		darksteam97d99i.adminEditReceipt,
		formBody
	)();
export const getReceipt = actionCreator(
	GET_RECEIPT_START,
	GET_RECEIPT_SUCCESS,
	GET_RECEIPT_FAIL,
	darksteam97d99i.getReceipt
);
export const deleteReceipt = id =>
	actionCreator(
		DELETE_RECEIPT_START,
		DELETE_RECEIPT_SUCCESS,
		DELETE_RECEIPT_FAIL,
		darksteam97d99i.deleteReceipt,
		id
	)();

export const getExchangeCount = (memb___id, exchangeId) =>
	actionCreator(
		GET_EXCHANGE_COUNT_START,
		GET_EXCHANGE_COUNT_SUCCESS,
		GET_EXCHANGE_COUNT_FAIL,
		darksteam97d99i.getExchangeCount,
		memb___id,
		exchangeId
	)();

export const tradeExchange = query =>
	actionCreator(
		TRADE_EXCHANGE_START,
		TRADE_EXCHANGE_SUCCESS,
		TRADE_EXCHANGE_FAIL,
		darksteam97d99i.tradeExchange,
		query
	)();

export const buyReceipt = (memb___id, receiptId) =>
	actionCreator(
		BUY_RECEIPT_START,
		BUY_RECEIPT_SUCCESS,
		BUY_RECEIPT_FAIL,
		darksteam97d99i.buyReceipt,
		memb___id,
		receiptId
	)();

export const buyConsumable = query =>
	actionCreator(
		BUY_CONSUMABLE_START,
		BUY_CONSUMABLE_SUCCESS,
		BUY_CONSUMABLE_FAIL,
		darksteam97d99i.buyConsumable,
		query
	)();

export const getUserReceipts = memb___id =>
	actionCreator(
		GET_USER_RECEIPTS_START,
		GET_USER_RECEIPTS_SUCCESS,
		GET_USER_RECEIPTS_FAIL,
		darksteam97d99i.getUserReceipts,
		memb___id
	)();

export const getCountMaterials = (memb___id, receiptId) =>
	actionCreator(
		GET_COUNT_MATERIALS_START,
		GET_COUNT_MATERIALS_SUCCESS,
		GET_COUNT_MATERIALS_FAIL,
		darksteam97d99i.getCountMaterials,
		memb___id,
		receiptId
	)();

export default (
	state = {
		pages: ['Exchange', 'Receipts', 'Consumable'],
		currentPage: 'Exchange',
		exchangeCount: {},
		exchanges: null,
		receipts: null,
		consumables: null,
		userReceipts: null,
		countMaterials: {}
	},
	action
) => {
	switch (action.type) {
		case SET_CURRENT_PAGE:
			return { ...state, currentPage: action.page };
		case GET_RECEIPT_SUCCESS:
			return { ...state, receipts: action.data };
		case GET_CONSUMABLE_SUCCESS:
			return { ...state, consumables: action.data };
		case GET_EXCHANGE_SUCCESS:
			return { ...state, exchanges: action.data };
		case ADD_RECEIPT_SUCCESS:
			state.receipts.push(action.data);
			return { ...state, receipts: state.receipts.slice(0) };
		case ADD_CONSUMABLE_SUCCESS:
			state.consumables.push(action.data);
			return { ...state, consumables: state.consumables.slice(0) };
		case ADD_EXCHANGE_SUCCESS:
			state.exchanges.push(action.data);
			return { ...state, exchanges: state.exchanges.slice(0) };
		case EDIT_EXCHANGE_SUCCESS:
			state.exchanges = state.exchanges.map(exchange => {
				if (exchange.id == action.data.id) {
					return action.data;
				}
				return exchange;
			});
			return { ...state, exchanges: state.exchanges.slice(0) };
		case EDIT_RECEIPT_SUCCESS:
			state.receipts = state.receipts.map(receipt => {
				if (receipt.id == action.data.id) {
					return action.data;
				}
				return receipt;
			});
			return { ...state, receipts: state.receipts.slice(0) };
		case EDIT_CONSUMABLE_SUCCESS:
			state.consumables = state.consumables.map(consumable => {
				if (consumable.id == action.data.id) {
					return action.data;
				}
				return consumable;
			});
			return { ...state, consumables: state.consumables.slice(0) };
		case DELETE_RECEIPT_SUCCESS:
			state.receipts = state.receipts.filter(receipt => receipt.id != action.data.id);
			return { ...state, receipts: state.receipts.slice(0) };
		case DELETE_CONSUMABLE_SUCCESS:
			state.consumables = state.consumables.filter(consumable => consumable.id != action.data.id);
			return { ...state, consumables: state.consumables.slice(0) };
		case DELETE_EXCHANGE_SUCCESS:
			state.exchanges = state.exchanges.filter(exchange => exchange.id != action.data.id);
			return { ...state, exchanges: state.exchanges.slice(0) };
		case GET_EXCHANGE_COUNT_SUCCESS:
			return { ...state, exchangeCount: action.data };
		case GET_COUNT_MATERIALS_SUCCESS:
			return { ...state, countMaterials: action.data };
		case TRADE_EXCHANGE_SUCCESS:
			toast.success('Exchange Successfull', {
				position: toast.POSITION.BOTTOM_LEFT,
				className: 'toast-success'
			});
			if (action.data.type == 'single') {
				return {
					...state,
					exchangeCount: {
						...state.exchangeCount,
						[action.data.Name]:
							parseInt(state.exchangeCount[action.data.Name]) - parseInt(action.data.traded)
					}
				};
			}
			return state;

		case GET_USER_RECEIPTS_SUCCESS:
			return { ...state, userReceipts: action.data };

		case BUY_RECEIPT_SUCCESS:
			toast.success(`Buy receipt successfull`, {
				position: toast.POSITION.BOTTOM_LEFT,
				className: 'toast-success'
			});
			if (state.userReceipts) {
				const boughtReceipts = state.receipts.find(receipt => receipt.id == action.data.receiptId);
				state.userReceipts.push(boughtReceipts);
			}
			return { ...state, userReceipts: state.userReceipts.slice(0) };
		case BUY_CONSUMABLE_SUCCESS:
			toast.success(`Buy consumable successfull`, {
				position: toast.POSITION.BOTTOM_LEFT,
				className: 'toast-success'
			});
			return state;
		case SELL_RECEIPT_SUCCESS:
			toast.success(`Sell receipt successfull`, {
				position: toast.POSITION.BOTTOM_LEFT,
				className: 'toast-success'
			});
			state.userReceipts = state.userReceipts.filter(
				receipt => receipt.id != action.data.receiptId
			);
			return { ...state, userReceipts: state.userReceipts.slice(0) };
		case CRAFT_ITEM_SUCCESS:
			toast.success(`Craft Item successfull`, {
				position: toast.POSITION.BOTTOM_LEFT,
				className: 'toast-success'
			});
			return { ...state, userReceipts: state.userReceipts.slice(0) };

		case GET_USER_RECEIPTS_FAIL:
		case CRAFT_ITEM_FAIL:
		case SELL_RECEIPT_FAIL:
		case ADD_EXCHANGE_FAIL:
		case EDIT_EXCHANGE_FAIL:
		case DELETE_EXCHANGE_FAIL:
		case GET_EXCHANGE_FAIL:
		case ADD_CONSUMABLE_FAIL:
		case EDIT_CONSUMABLE_FAIL:
		case DELETE_CONSUMABLE_FAIL:
		case GET_CONSUMABLE_FAIL:
		case ADD_RECEIPT_FAIL:
		case EDIT_RECEIPT_FAIL:
		case DELETE_RECEIPT_FAIL:
		case GET_RECEIPT_FAIL:
		case GET_EXCHANGE_COUNT_FAIL:
		case GET_COUNT_MATERIALS_FAIL:
		case BUY_CONSUMABLE_FAIL:
		case BUY_RECEIPT_FAIL:
		case TRADE_EXCHANGE_FAIL:
			toast.error(`${action.error}`, {
				position: toast.POSITION.TOP_LEFT,
				className: 'toast-error'
			});
			return state;
		default:
			return state;
	}
};
