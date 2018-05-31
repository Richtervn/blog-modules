import { actionCreator } from 'helpers';
import services from '../../Darksteam97d99i.services';
import { toastSuccess } from 'common/Toast';

const SET_FOCUS_RECEIPT = 'ds9799_blacksmith/SET_FOCUS_RECEIPT';
const GET_RECEIPTS = 'ds9799_blacksmith/GET_RECEIPTS';
const GET_COUNT_MATERIALS = 'ds9799_blacksmith/GET_COUNT_MATERIALS';
export const CRAFT_ITEM = 'ds9799_blacksmith/CRAFT_ITEM';
export const SELL_RECEIPT = 'ds9799_blacksmith/SELL_RECEIPT';

export const setFocusReceipt = receipt => ({ type: SET_FOCUS_RECEIPT, receipt });
export const getReceipts = () =>
  actionCreator(GET_RECEIPTS, services.getUserReceipts, {
    transformPayload({ getState }) {
      const memb___id = getState().ds9799_user.user.memb___id;
      return { memb___id };
    }
  })();

export const craftItem = (characterName, receiptId) =>
  actionCreator(CRAFT_ITEM, services.craftItem, {
    payload: { characterName, receiptId },
    onAfterSuccess({ socket }) {
      socket.emit('darksteam97d99i/CHECK_POINT_QUEST', 'WQ18');
    }
  })();

export const sellReceipt = receiptId =>
  actionCreator(SELL_RECEIPT, services.sellReceipt, {
    payload: { receiptId },
    transformPayload({ getState, payload }) {
      const memb___id = getState().ds9799_user.user.memb___id;
      payload.memb___id = memb___id;
      return payload;
    }
  })();

export const getCountMaterials = receiptId =>
  actionCreator(GET_COUNT_MATERIALS, services.getCountMaterials, {
    payload: { receiptId },
    transformPayload({ getState, payload }) {
      const memb___id = getState().ds9799_user.user.memb___id;
      payload.memb___id = memb___id;
      return payload;
    }
  })();

const initialState = {
  receipts: null,
  focusReceipt: {},
  countMaterials: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FOCUS_RECEIPT:
      return { ...state, focusReceipt: action.receipt };
    case `${GET_RECEIPTS}_SUCCESS`:
      return { ...state, receipts: action.payload };
    case `${SELL_RECEIPT}_SUCCESS`:
      toastSuccess('Receipt sold');
      state.receipts = state.receipts.filter(receipt => receipt.id !== action.payload.receiptId);
      return { ...state, receipts: state.receipts.slice(0) };
    case `${GET_COUNT_MATERIALS}_SUCCESS`:
      return { ...state, countMaterials: { ...state.countMaterials, [action.params.receiptId]: action.payload } };
    default:
      return state;
  }
};
