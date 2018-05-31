import { actionCreator } from 'helpers';
import services from '../../Darksteam97d99i.services';
import { hideModal } from 'common/Modal';
import { toastSuccess } from 'common/Toast';

const GET_RECEIPTS = 'ds9799_luxury/GET_RECEIPTS';
const GET_EXCHANGES = 'ds9799_luxury/GET_EXCHANGES';
const GET_CONSUMABLES = 'ds9799_luxury/GET_CONSUMABLES';

const SET_FOCUS_RECEIPT = 'ds9799_luxury/SET_FOCUS_RECEIPT';
const SET_FOCUS_EXCHANGE = 'ds9799_luxury/SET_FOCUS_EXCHANGE';
const SET_FOCUS_CONSUMABLE = 'ds9799_luxury/SET_FOCUS_CONSUMABLE';

export const BUY_RECEIPT = 'ds9799_luxury/BUY_RECEIPT';
export const BUY_CONSUMABLE = 'ds9799_luxury/BUY_CONSUMABLE';
export const TRADE_EXCHANGE = 'ds9799_luxury/TRADE_EXCHANGE';

const GET_EXCHANGE_COUNT = 'ds9799_luxury/GET_EXCHANGE_COUNT';

export const getReceipts = () => actionCreator(GET_RECEIPTS, services.getReceipts)();
export const getConsumables = () => actionCreator(GET_CONSUMABLES, services.getConsumables)();
export const getExchanges = () => actionCreator(GET_EXCHANGES, services.getExchanges)();

export const setFocusReceipt = receipt => ({ type: SET_FOCUS_RECEIPT, receipt });
export const setFocusExchange = exchange => ({ type: SET_FOCUS_EXCHANGE, exchange });
export const setFocusConsumable = consumable => ({ type: SET_FOCUS_CONSUMABLE, consumable });

export const buyReceipt = receiptId =>
  actionCreator(BUY_RECEIPT, services.buyReceipt, {
    payload: { receiptId },
    transformPayload({ payload, getState }) {
      const memb___id = getState().ds9799_user.user.memb___id;
      payload.memb___id = memb___id;
      return payload;
    },
    onAfterSuccess({ socket }) {
      hideModal();
      socket.emit('darksteam97d99i/CHECK_POINT_QUEST', 'WQ17');
    }
  })();
export const buyConsumable = query =>
  actionCreator(BUY_CONSUMABLE, services.buyConsumable, {
    payload: { query },
    onAfterSuccess() {
      hideModal();
    }
  })();

export const getExchangeCount = exchangeId =>
  actionCreator(GET_EXCHANGE_COUNT, services.getExchangeCount, {
    payload: { exchangeId },
    transformPayload({ payload, getState }) {
      const memb___id = getState().ds9799_user.user.memb___id;
      payload.memb___id = memb___id;
      return payload;
    }
  })();
export const tradeExchange = query =>
  actionCreator(TRADE_EXCHANGE, services.tradeExchange, {
    payload: { query },
    onAfterSuccess({ socket, data }) {
      hideModal();
      socket.emit('darksteam97d99i/CHECK_POINT_QUEST', 'WQ13', data.profit);
    }
  })();

const initialState = {
  receipts: null,
  exchanges: null,
  consumables: null,
  focusConsumable: {},
  focusExchange: {},
  focusReceipt: {},
  exchangeCount: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${GET_RECEIPTS}_SUCCESS`:
      return { ...state, receipts: action.payload };
    case `${GET_EXCHANGES}_SUCCESS`:
      return { ...state, exchanges: action.payload };
    case `${GET_CONSUMABLES}_SUCCESS`:
      return { ...state, consumables: action.payload };

    case SET_FOCUS_CONSUMABLE:
      return { ...state, focusConsumable: action.consumable };
    case SET_FOCUS_EXCHANGE:
      return { ...state, focusExchange: action.exchange };
    case SET_FOCUS_RECEIPT:
      return { ...state, focusReceipt: action.receipt };

    case `${GET_EXCHANGE_COUNT}_SUCCESS`:
      return { ...state, exchangeCount: action.payload };
    case `${TRADE_EXCHANGE}_SUCCESS`:
      const nextState = { ...state };
      if (action.params.query.type === 'all') {
        for (let key in nextState.exchangeCount) {
          nextState.exchangeCount[key] = 0;
        }
      }
      if (action.params.query.type === 'single') {
        nextState.exchangeCount[action.params.query.characterName] =
          parseInt(nextState.exchangeCount[action.params.query.characterName], 10) -
          parseInt(action.params.query.count, 10);
      }
      toastSuccess(`Exchange success`);
      return { ...nextState, exchangeCount: { ...nextState.exchangeCount } };

    case `${BUY_RECEIPT}_SUCCESS`:
      toastSuccess('You bought new receipt');
      return state;
    case `${BUY_CONSUMABLE}_SUCCESS`:
      toastSuccess('You bought an consumable package');
      return state;

    default:
      return state;
  }
};
