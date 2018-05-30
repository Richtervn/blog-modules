import { actionCreator } from 'helpers';
import services from '../../Darksteam97d99i.services';

const SET_FOCUS_RECEIPT = 'ds9799_blacksmith/SET_FOCUS_RECEIPT';
const GET_RECEIPTS = 'ds9799_blacksmith/GET_RECEIPTS';

export const setFocusReceipt = receipt => ({ type: SET_FOCUS_RECEIPT, receipt });
export const getReceipts = () =>
  actionCreator(GET_RECEIPTS, services.getUserReceipts, {
    transformPayload({ getState }) {
      const memb___id = getState().ds9799_user.user.memb___id;
      return { memb___id };
    }
  })();

const initialState = {
  receipts: null,
  focusReceipt: {}
};

//   case CRAFT_ITEM_SUCCESS:
//     socket.emit('darksteam97d99i/CHECK_POINT_QUEST', 'WQ18');

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FOCUS_RECEIPT:
      return { ...state, focusReceipt: action.receipt };
    case `${GET_RECEIPTS}_SUCCESS`:
      return { ...state, receipts: action.payload };
    default:
      return state;
  }
};
