import { actionCreator } from 'helpers';
import services from './YugiohPoc.services';

import { toastError } from 'common/Toast';

const GET_MODS = 'yugiohPoc/GET_MODS';
const GET_DECKS = 'yugiohPoc/GET_DECKS';

const SET_FOCUS_MOD = 'yugiohPoc/SET_FOCUS_MOD';

export const getMods = actionCreator(GET_MODS, services.getMods);
export const getDecks = modId => actionCreator(GET_DECKS, services.getDecks, modId)();

export const setFocusMod = id => ({ type: SET_FOCUS_MOD, id });

const initialState = {
  mods: null,
  decks: null,
  focusMod: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${GET_MODS}_SUCCESS`:
      return { ...state, mods: action.data, focusMod: action.data[0]._id };
    case `${GET_DECKS}_SUCCESS`:
      return { ...state, decks: action.data };
    case SET_FOCUS_MOD:
      return { ...state, focusMod: action.id };

    case `${GET_MODS}_FAIL`:
    case `${GET_DECKS}_FAIL`:
      toastError(action.error);
      return state;

    default:
      return state;
  }
};

// import actionCreator from 'factories/actionCreator';
// import { yugiohPoc } from 'services';

// const GET_MOD_LIST_START = 'yugiohPoc/GET_MOD_LIST_START';
// export const GET_MOD_LIST_SUCCESS = 'yugiohPoc/GET_MOD_LIST_SUCCESS';
// const GET_MOD_LIST_FAIL = 'yugiohPoc/GET_MOD_LIST_FAIL';
// export const SET_FOCUS_MOD = 'yugiohPoc/SET_FOCUS_MOD';
// const CHANGE_TAB = 'yugiohPoc/CHANGE_TAB';

// const GET_DECK_LIST_START = 'yugiohPoc/GET_DECK_LIST_START';
// export const GET_DECK_LIST_SUCCESS = 'yugiohPoc/GET_DECK_LIST_SUCCESS';
// const GET_DECK_LIST_FAIL = 'yugiohPoc/GET_DECK_LIST_FAIL';
// export const SET_FOCUS_DECK = 'yugiohPoc/SET_FOCUS_DECK';

// const DELETE_MOD_START = 'yugiohPoc/DELETE_MOD_START';
// const DELETE_MOD_SUCCESS = 'yugiohPoc/DELETE_MOD_SUCCESS';
// const DELETE_MOD_FAIL = 'yugiohPoc/DELETE_MOD_FAIL';

// const DELETE_DECK_START = 'yugiohPoc/DELETE_DECK_START';
// const DELETE_DECK_SUCCESS = 'yugiohPoc/DELETE_DECK_SUCCESS';
// const DELETE_DECK_FAIL = 'yugiohPoc/DELETE_DECK_FAIL';

// const SUBMIT_ADD_YUGIOH_DECK_FORM_START = 'yugiohPoc/SUBMIT_ADD_YUGIOH_DECK_FORM_START';
// export const SUBMIT_ADD_YUGIOH_DECK_FORM_SUCCESS = 'yugiohPoc/SUBMIT_ADD_YUGIOH_DECK_FORM_SUCCESS';
// const SUBMIT_ADD_YUGIOH_DECK_FORM_FAIL = 'yugiohPoc/SUBMIT_ADD_YUGIOH_DECK_FORM_FAIL';

// const SUBMIT_ADD_YUGIOH_MOD_FORM_START = 'yugiohPoc/SUBMIT_ADD_YUGIOH_MOD_FORM_START';
// export const SUBMIT_ADD_YUGIOH_MOD_FORM_SUCCESS = 'yugiohPoc/SUBMIT_ADD_YUGIOH_MOD_FORM_SUCCESS';
// const SUBMIT_ADD_YUGIOH_MOD_FORM_FAIL = 'yugiohPoc/SUBMIT_ADD_FLASH_FORM_FAIL';

// const SUBMIT_EDIT_YUGIOH_MOD_FORM_START = 'yugiohPoc/SUBMIT_EDIT_YUGIOH_MOD_FORM';
// export const SUBMIT_EDIT_YUGIOH_MOD_FORM_SUCCESS = 'yugiohPoc/SUBMIT_EDIT_YUGIOH_MOD_FORM_SUCCESS';
// const SUBMIT_EDIT_YUGIOH_MOD_FORM_FAIL = 'yugiohPoc/SUBMIT_EDIT_YUGIOH_MOD_FORM_FAIL';

// const SUBMIT_EDIT_YUGIOH_DECK_FORM_START = 'yugiohPoc/SUBMIT_EDIT_YUGIOH_DECK_FORM';
// export const SUBMIT_EDIT_YUGIOH_DECK_FORM_SUCCESS = 'yugiohPoc/SUBMIT_EDIT_YUGIOH_DECK_FORM_SUCCESS';
// const SUBMIT_EDIT_YUGIOH_DECK_FORM_FAIL = 'yugiohPoc/SUBMIT_EDIT_YUGIOH_DECK_FORM_FAIL';

// export const submitYugiohModForm = formBody =>
//   actionCreator(
//     SUBMIT_ADD_YUGIOH_MOD_FORM_START,
//     SUBMIT_ADD_YUGIOH_MOD_FORM_SUCCESS,
//     SUBMIT_ADD_YUGIOH_MOD_FORM_FAIL,
//     yugiohPoc.addMod,
//     formBody
//   )();

// export const submitEditYugiohModForm = formBody =>
//   actionCreator(
//     SUBMIT_EDIT_YUGIOH_MOD_FORM_START,
//     SUBMIT_EDIT_YUGIOH_MOD_FORM_SUCCESS,
//     SUBMIT_EDIT_YUGIOH_MOD_FORM_FAIL,
//     yugiohPoc.editMod,
//     formBody
//   )();

// export const submitYugiohDeckForm = formBody =>
//   actionCreator(
//     SUBMIT_ADD_YUGIOH_DECK_FORM_START,
//     SUBMIT_ADD_YUGIOH_DECK_FORM_SUCCESS,
//     SUBMIT_ADD_YUGIOH_DECK_FORM_FAIL,
//     yugiohPoc.addDeck,
//     formBody
//   )();

// export const submitEditYugiohDeckForm = formBody =>
//   actionCreator(
//     SUBMIT_EDIT_YUGIOH_DECK_FORM_START,
//     SUBMIT_EDIT_YUGIOH_DECK_FORM_SUCCESS,
//     SUBMIT_EDIT_YUGIOH_DECK_FORM_FAIL,
//     yugiohPoc.editDeck,
//     formBody
//   )();

// export const getModList = actionCreator(
//   GET_MOD_LIST_START,
//   GET_MOD_LIST_SUCCESS,
//   GET_MOD_LIST_FAIL,
//   yugiohPoc.getModList
// );

// export const getDeckList = modId =>
//   actionCreator(
//     GET_DECK_LIST_START,
//     GET_DECK_LIST_SUCCESS,
//     GET_DECK_LIST_FAIL,
//     yugiohPoc.getDeckList,
//     modId
//   )();

// export const setFocusMod = mod => ({ type: SET_FOCUS_MOD, mod });
// export const setFocusDeck = deck => ({ type: SET_FOCUS_DECK, deck });
// export const changeTab = tab => ({ type: CHANGE_TAB, tab });

// export const deleteMod = id =>
//   actionCreator(DELETE_MOD_START, DELETE_MOD_SUCCESS, DELETE_MOD_FAIL, yugiohPoc.deleteMod, id)();
// export const deleteDeck = id =>
//   actionCreator(DELETE_DECK_START, DELETE_DECK_SUCCESS, DELETE_DECK_FAIL, yugiohPoc.deleteDeck, id)();

// export default (
//   state = {
//     modList: null,
//     modFocus: null,
//     deckList: null,
//     deckFocus: null,
//     viewControl: {
//       activeTab: 'Mod'
//     }
//   },
//   action
// ) => {
//   switch (action.type) {
//     case GET_MOD_LIST_SUCCESS:
//       return { ...state, modList: action.data, modFocus: action.data[0] };
//     case GET_DECK_LIST_SUCCESS:
//       return { ...state, deckList: action.data, deckFocus: action.data[0] };
//     case SUBMIT_ADD_YUGIOH_MOD_FORM_SUCCESS:
//       state.modList.push(action.data);
//       return { ...state, modList: state.modList.slice(0), modFocus: action.data, deckList: [] };
//     case SUBMIT_ADD_YUGIOH_DECK_FORM_SUCCESS:
//       state.deckList.push(action.data);
//       return { ...state, deckList: state.deckList.slice(0), deckFocus: action.data };
//     case SET_FOCUS_MOD:
//       return { ...state, modFocus: { ...action.mod } };
//     case SET_FOCUS_DECK:
//       return { ...state, deckFocus: { ...action.deck } };
//     case CHANGE_TAB:
//       return { ...state, viewControl: { ...state.viewControl, activeTab: action.tab } };
//     case DELETE_MOD_SUCCESS:
//       const modList = state.modList.filter(mod => mod._id != action.data._id);
//       return { ...state, modFocus: modList[0], modList: modList.slice(0) };
//     case DELETE_DECK_SUCCESS:
//       const deckList = state.deckList.filter(deck => deck._id != action.data._id);
//       return { ...state, deckFocus: deckList[0], deckList: deckList.slice(0) };
//     case SUBMIT_EDIT_YUGIOH_MOD_FORM_SUCCESS:
//       const modsList = state.modList.map(mod => {
//         if (mod._id == action.data._id) {
//           return action.data;
//         }
//         return mod;
//       });
//       return { ...state, modList: modsList.slice(0), modFocus: { ...action.data } };
//     case SUBMIT_EDIT_YUGIOH_DECK_FORM_SUCCESS:
//       const decksList = state.deckList.map(mod => {
//         if (mod._id == action.data._id) {
//           return action.data;
//         }
//         return mod;
//       });
//       return { ...state, deckList: decksList.slice(0), deckFocus: { ...action.data } };
//     default:
//       return state;
//   }
// };
