import { actionCreator } from 'helpers';
import services from './YugiohPoc.services';

import { toastError, toastStrong } from 'common/Toast';

const GET_MODS = 'yugiohPoc/GET_MODS';
const ADD_MOD = 'yugiohPoc/ADD_MOD';
const EDIT_MOD = 'yugiohPoc/EDIT_MOD';
const DELETE_MOD = 'yugiohPoc/DELETE_MOD';
const SEARCH_MOD = 'yugiohPoc/SEARCH_MOD';
const SORT_MOD = 'yugiohPoc/SORT_MOD';

const GET_DECKS = 'yugiohPoc/GET_DECKS';
const ADD_DECK = 'yugiohPoc/ADD_DECK';
const EDIT_DECK = 'yugiohPoc/EDIT_DECK';
const DELETE_DECK = 'yugiohPoc/DELETE_DECK';

const SET_FOCUS_MOD = 'yugiohPoc/SET_FOCUS_MOD';
const SET_FOCUS_DECK = 'yugiohPoc/SET_FOCUS_DECK';

export const getMods = actionCreator(GET_MODS, services.getMods);
export const addMod = formBody => actionCreator(ADD_MOD, services.addMod, formBody)();
export const editMod = formBody => actionCreator(EDIT_MOD, services.editMod, formBody)();
export const searchMod = query => actionCreator(SEARCH_MOD, services.searchMod, query)();
export const deleteMod = id => actionCreator(DELETE_MOD, services.deleteMod, id)();
export const sortMod = (sortKey, sortOption) => ({ type: SORT_MOD, sortKey, sortOption });

export const getDecks = modId => actionCreator(GET_DECKS, services.getDecks, modId)();
export const addDeck = formBody => actionCreator(ADD_DECK, services.addDeck, formBody)();
export const editDeck = formBody => actionCreator(EDIT_DECK, services.editDeck, formBody)();
export const deleteDeck = id => actionCreator(DELETE_DECK, services.deleteDeck, id)();

export const setFocusMod = id => ({ type: SET_FOCUS_MOD, id });
export const setFocusDeck = id => ({ type: SET_FOCUS_DECK, id });

const initialState = {
  mods: null,
  decks: null,
  focusMod: null,
  focusDeck: null,
  sortModKey: '',
  sortModOption: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${GET_MODS}_SUCCESS`:
      return { ...state, mods: action.data, focusMod: action.data[0]._id };
    case `${ADD_MOD}_SUCCESS`:
      state.mods.push(action.data);
      toastStrong(action.data.Name, 'Added');
      return { ...state, mods: state.mods.slice(0) };
    case `${EDIT_MOD}_SUCCESS`:
      state.mods = state.mods.map(mod => {
        if (mod._id === action.data._id) {
          return action.data;
        }
        return mod;
      });
      toastStrong(action.data.Name, 'Updated');
      return { ...state, mods: state.mods.slice(0) };
    case `${DELETE_MOD}_SUCCESS`:
      state.mods = state.mods.filter(mod => mod._id !== action.data._id);
      return { ...state, mods: state.mods.slice(0) };
    case `${SEARCH_MOD}_SUCCESS`:
      return { ...state, mods: action.data };
    case SORT_MOD:
      return { ...state, sortModKey: action.sortKey, sortModOption: action.sortOption };

    case `${GET_DECKS}_SUCCESS`:
      return { ...state, decks: action.data };
    case `${ADD_DECK}_SUCCESS`:
      state.decks.push(action.data);
      toastStrong(action.data.Name, 'Added');
      return { ...state, decks: state.decks.slice(0) };
    case `${EDIT_DECK}_SUCCESS`:
      state.decks = state.decks.map(deck => {
        if (deck._id === action.data._id) {
          return action.data;
        }
        return deck;
      });
      toastStrong(action.data.Name, 'Updated');
      return { ...state, decks: state.decks.slice(0) };
    case `${DELETE_DECK}_SUCCESS`:
      state.decks = state.decks.filter(deck => deck._id !== action.data._id);
      return { ...state, decks: state.decks.slice(0) };

    case SET_FOCUS_MOD:
      return { ...state, focusMod: action.id };
    case SET_FOCUS_DECK:
      return { ...state, focusDeck: action.id };

    case `${GET_MODS}_FAIL`:
    case `${ADD_MOD}_FAIL`:
    case `${SEARCH_MOD}_FAIL`:
    case `${EDIT_MOD}_FAIL`:
    case `${DELETE_MOD}_FAIL`:
    case `${GET_DECKS}_FAIL`:
    case `${ADD_DECK}_FAIL`:
    case `${EDIT_DECK}_FAIL`:
    case `${DELETE_DECK}_FAIL`:
      toastError(action.error);
      return state;

    default:
      return state;
  }
};
