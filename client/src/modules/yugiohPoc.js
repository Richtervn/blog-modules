import { yugiohPoc } from 'services';
import actionCreator from 'factories/actionCreator';
import { SUBMIT_ADD_YUGIOH_MOD_FORM_SUCCESS } from 'modules/forms';

const GET_MOD_LIST_START = 'yugiohPoc/GET_MOD_LIST_START';
const GET_MOD_LIST_SUCCESS = 'yugiohPoc/GET_MOD_LIST_SUCCESS';
const GET_MOD_LIST_FAIL = 'yugiohPoc/GET_MOD_LIST_FAIL';
const SET_FOCUS_MOD = 'yugiohPoc/SET_FOCUS_MOD';

export const getModList = actionCreator(
  GET_MOD_LIST_START,
  GET_MOD_LIST_SUCCESS,
  GET_MOD_LIST_FAIL,
  yugiohPoc.getModList
);

export const setFocusMod = mod => ({ type: SET_FOCUS_MOD, mod });

export default (
  state = {
    modList: null,
    modFocus: null
  },
  action
) => {
  switch (action.type) {
    case GET_MOD_LIST_SUCCESS:
      return { ...state, modList: action.data, modFocus: action.data[0] };
    case SUBMIT_ADD_YUGIOH_MOD_FORM_SUCCESS:
      state.modList.push(action.data);
      return { ...state, modList: state.modList.slice(0), modFocus: action.data };
    case SET_FOCUS_MOD:
      return { ...state, modFocus: { ...action.mod } };
    default:
      return state;
  }
};
