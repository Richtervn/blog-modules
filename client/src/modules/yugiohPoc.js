import {
  SUBMIT_ADD_YUGIOH_MOD_FORM_SUCCESS,
  SUBMIT_ADD_YUGIOH_DECK_FORM_SUCCESS,
  SUBMIT_EDIT_YUGIOH_MOD_FORM_SUCCESS,
  SUBMIT_EDIT_YUGIOH_DECK_FORM_SUCCESS
} from 'modules/forms';
import actionCreator from 'factories/actionCreator';
import { yugiohPoc } from 'services';

const GET_MOD_LIST_START = 'yugiohPoc/GET_MOD_LIST_START';
export const GET_MOD_LIST_SUCCESS = 'yugiohPoc/GET_MOD_LIST_SUCCESS';
const GET_MOD_LIST_FAIL = 'yugiohPoc/GET_MOD_LIST_FAIL';
export const SET_FOCUS_MOD = 'yugiohPoc/SET_FOCUS_MOD';
const CHANGE_TAB = 'yugiohPoc/CHANGE_TAB';

const GET_DECK_LIST_START = 'yugiohPoc/GET_DECK_LIST_START';
export const GET_DECK_LIST_SUCCESS = 'yugiohPoc/GET_DECK_LIST_SUCCESS';
const GET_DECK_LIST_FAIL = 'yugiohPoc/GET_DECK_LIST_FAIL';
export const SET_FOCUS_DECK = 'yugiohPoc/SET_FOCUS_DECK';

const DELETE_MOD_START = 'yugiohPoc/DELETE_MOD_START';
const DELETE_MOD_SUCCESS = 'yugiohPoc/DELETE_MOD_SUCCESS';
const DELETE_MOD_FAIL = 'yugiohPoc/DELETE_MOD_FAIL';

const DELETE_DECK_START = 'yugiohPoc/DELETE_DECK_START';
const DELETE_DECK_SUCCESS = 'yugiohPoc/DELETE_DECK_SUCCESS';
const DELETE_DECK_FAIL = 'yugiohPoc/DELETE_DECK_FAIL';

export const getModList = actionCreator(
  GET_MOD_LIST_START,
  GET_MOD_LIST_SUCCESS,
  GET_MOD_LIST_FAIL,
  yugiohPoc.getModList
);

export const getDeckList = modId =>
  actionCreator(
    GET_DECK_LIST_START,
    GET_DECK_LIST_SUCCESS,
    GET_DECK_LIST_FAIL,
    yugiohPoc.getDeckList,
    modId
  )();

export const setFocusMod = mod => ({ type: SET_FOCUS_MOD, mod });
export const setFocusDeck = deck => ({ type: SET_FOCUS_DECK, deck });
export const changeTab = tab => ({ type: CHANGE_TAB, tab });

export const deleteMod = id =>
  actionCreator(DELETE_MOD_START, DELETE_MOD_SUCCESS, DELETE_MOD_FAIL, yugiohPoc.deleteMod, id)();
export const deleteDeck = id =>
  actionCreator(DELETE_DECK_START, DELETE_DECK_SUCCESS, DELETE_DECK_FAIL, yugiohPoc.deleteDeck, id)();

export default (
  state = {
    modList: null,
    modFocus: null,
    deckList: null,
    deckFocus: null,
    viewControl: {
      activeTab: 'Mod'
    }
  },
  action
) => {
  switch (action.type) {
    case GET_MOD_LIST_SUCCESS:
      return { ...state, modList: action.data, modFocus: action.data[0] };
    case GET_DECK_LIST_SUCCESS:
      return { ...state, deckList: action.data, deckFocus: action.data[0] };
    case SUBMIT_ADD_YUGIOH_MOD_FORM_SUCCESS:
      state.modList.push(action.data);
      return { ...state, modList: state.modList.slice(0), modFocus: action.data, deckList: [] };
    case SUBMIT_ADD_YUGIOH_DECK_FORM_SUCCESS:
      state.deckList.push(action.data);
      return { ...state, deckList: state.deckList.slice(0), deckFocus: action.data };
    case SET_FOCUS_MOD:
      return { ...state, modFocus: { ...action.mod } };
    case SET_FOCUS_DECK:
      return { ...state, deckFocus: { ...action.deck } };
    case CHANGE_TAB:
      return { ...state, viewControl: { ...state.viewControl, activeTab: action.tab } };
    case DELETE_MOD_SUCCESS:
      const modList = state.modList.filter(mod => mod._id != action.data._id);
      return { ...state, modFocus: modList[0], modList: modList.slice(0) };
    case DELETE_DECK_SUCCESS:
      const deckList = state.deckList.filter(deck => deck._id != action.data._id);
      return { ...state, deckFocus: deckList[0], deckList: deckList.slice(0) };
    case SUBMIT_EDIT_YUGIOH_MOD_FORM_SUCCESS:
      const modsList = state.modList.map(mod => {
        if (mod._id == action.data._id) {
          return action.data;
        }
        return mod;
      });
      return { ...state, modList: modsList.slice(0), modFocus: { ...action.data } };
    case SUBMIT_EDIT_YUGIOH_DECK_FORM_SUCCESS:
      const decksList = state.deckList.map(mod => {
        if (mod._id == action.data._id) {
          return action.data;
        }
        return mod;
      });
      return { ...state, deckList: decksList.slice(0), deckFocus: { ...action.data } };
    default:
      return state;
  }
};
