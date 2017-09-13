import commonFormChange from 'factories/commonFormChange';
import actionCreator from 'factories/actionCreator';

import { flashGames, yugiohPoc, music } from 'services';
import {
  GET_MOD_LIST_SUCCESS,
  SET_FOCUS_MOD,
  GET_DECK_LIST_SUCCESS,
  SET_FOCUS_DECK
} from 'modules/yugiohPoc';

const CHANGE_ADD_FLASH_FORM = 'forms/CHANGE_ADD_FLASH_FORM';
const CHANGE_ADD_YUGIOH_MOD_FORM = 'forms/CHANGE_ADD_YUGIOH_MOD_FORM';
const CHANGE_ADD_YUGIOH_DECK_FORM = 'forms/CHANGE_ADD_YUGIOH_DECK_FORM';
const CHANGE_ADD_MUSIC_FORM = 'forms/CHANGE_ADD_MUSIC_FORM';
const CHANGE_EDIT_YUGIOH_MOD_FORM = 'forms/CHANGE_EDIT_YUGIOH_MOD_FORM';
const CHANGE_EDIT_YUGIOH_DECK_FORM = 'forms/CHANGE_EDIT_YUGIOH_DECK_FORM';

const SUBMIT_ADD_FLASH_FORM_START = 'forms/SUBMIT_ADD_FLASH_FORM_START';
export const SUBMIT_ADD_FLASH_FORM_SUCCESS = 'forms/SUBMIT_ADD_FLASH_FORM_SUCCESS';
const SUBMIT_ADD_FLASH_FORM_FAIL = 'forms/SUBMIT_ADD_FLASH_FORM_FAIL';

const SUBMIT_ADD_YUGIOH_DECK_FORM_START = 'forms/SUBMIT_ADD_YUGIOH_DECK_FORM_START';
export const SUBMIT_ADD_YUGIOH_DECK_FORM_SUCCESS = 'forms/SUBMIT_ADD_YUGIOH_DECK_FORM_SUCCESS';
const SUBMIT_ADD_YUGIOH_DECK_FORM_FAIL = 'forms/SUBMIT_ADD_YUGIOH_DECK_FORM_FAIL';

const SUBMIT_ADD_YUGIOH_MOD_FORM_START = 'forms/SUBMIT_ADD_FLASH_FORM_START';
export const SUBMIT_ADD_YUGIOH_MOD_FORM_SUCCESS = 'forms/SUBMIT_ADD_YUGIOH_MOD_FORM_SUCCESS';
const SUBMIT_ADD_YUGIOH_MOD_FORM_FAIL = 'forms/SUBMIT_ADD_FLASH_FORM_FAIL';

const SUBMIT_EDIT_YUGIOH_MOD_FORM_START = 'forms/SUBMIT_EDIT_YUGIOH_MOD_FORM';
export const SUBMIT_EDIT_YUGIOH_MOD_FORM_SUCCESS = 'forms/SUBMIT_EDIT_YUGIOH_MOD_FORM_SUCCESS';
const SUBMIT_EDIT_YUGIOH_MOD_FORM_FAIL = 'forms/SUBMIT_EDIT_YUGIOH_MOD_FORM_FAIL';

const SUBMIT_EDIT_YUGIOH_DECK_FORM_START = 'forms/SUBMIT_EDIT_YUGIOH_DECK_FORM';
export const SUBMIT_EDIT_YUGIOH_DECK_FORM_SUCCESS = 'forms/SUBMIT_EDIT_YUGIOH_DECK_FORM_SUCCESS';
const SUBMIT_EDIT_YUGIOH_DECK_FORM_FAIL = 'forms/SUBMIT_EDIT_YUGIOH_DECK_FORM_FAIL';

const SUBMIT_ADD_MUSIC_FORM_START = 'forms/SUBMIT_ADD_MUSIC_FORM_START';
export const SUBMIT_ADD_MUSIC_FORM_SUCESS = 'forms/SUBMIT_ADD_MUSIC_FORM_SUCESS';
const SUBMIT_ADD_MUSIC_FORM_FAIL = 'forms/SUBMIT_ADD_MUSIC_FORM_FAIL';

const ADD_ARRAY_YUGIOH_MOD_FORM = 'forms/ADD_ARRAY_YUGIOH_MOD_FORM';
const ADD_ARRAY_YUGIOH_DECK_FORM = 'forms/ADD_ARRAY_YUGIOH_DECK_FORM';
const ADD_ARRAY_YUGIOH_EDIT_MOD_FORM = 'forms/ADD_ARRAY_YUGIOH_EDIT_MOD_FORM';
const ADD_ARRAY_YUGIOH_EDIT_DECK_FORM = 'forms/ADD_ARRAY_YUGIOH_EDIT_DECK_FORM';

const REMOVE_ARRAY_YUGIOH_MOD_FORM = 'forms/REMOVE_ARRAY_YUGIOH_MOD_FORM';
const REMOVE_ARRAY_YUGIOH_DECK_FORM = 'forms/REMOVE_ARRAY_YUGIOH_DECK_FORM';
const REMOVE_ARRAY_YUGIOH_EDIT_MOD_FORM = 'forms/REMOVE_ARRAY_YUGIOH_EDIT_MOD_FORM';
const REMOVE_ARRAY_YUGIOH_EDIT_DECK_FORM = 'forms/REMOVE_ARRAY_YUGIOH_EDIT_DECK_FORM';

const CHANGE_FORM_RATING = 'forms/CHANGE_FORM_RATING';

export const changeAddFlashForm = event => ({ type: CHANGE_ADD_FLASH_FORM, event });
export const changeAddMusicForm = event => ({ type: CHANGE_ADD_MUSIC_FORM, event });
export const changeAddYugiohModForm = (event, index) => ({ type: CHANGE_ADD_YUGIOH_MOD_FORM, event, index });
export const changeAddYugiohDeckForm = (event, index) => ({
  type: CHANGE_ADD_YUGIOH_DECK_FORM,
  event,
  index
});
export const changeEditYugiohModForm = (event, index) => ({
  type: CHANGE_EDIT_YUGIOH_MOD_FORM,
  event,
  index
});
export const changeEditYugiohDeckForm = (event, index) => ({
  type: CHANGE_EDIT_YUGIOH_DECK_FORM,
  event,
  index
});

export const submitAddFlashForm = formBody =>
  actionCreator(
    SUBMIT_ADD_FLASH_FORM_START,
    SUBMIT_ADD_FLASH_FORM_SUCCESS,
    SUBMIT_ADD_FLASH_FORM_FAIL,
    flashGames.addGame,
    formBody
  )();

export const submitYugiohModForm = formBody =>
  actionCreator(
    SUBMIT_ADD_YUGIOH_MOD_FORM_START,
    SUBMIT_ADD_YUGIOH_MOD_FORM_SUCCESS,
    SUBMIT_ADD_YUGIOH_MOD_FORM_FAIL,
    yugiohPoc.addMod,
    formBody
  )();

export const submitEditYugiohModForm = formBody =>
  actionCreator(
    SUBMIT_EDIT_YUGIOH_MOD_FORM_START,
    SUBMIT_EDIT_YUGIOH_MOD_FORM_SUCCESS,
    SUBMIT_EDIT_YUGIOH_MOD_FORM_FAIL,
    yugiohPoc.editMod,
    formBody
  )();

export const submitYugiohDeckForm = formBody =>
  actionCreator(
    SUBMIT_ADD_YUGIOH_DECK_FORM_START,
    SUBMIT_ADD_YUGIOH_DECK_FORM_SUCCESS,
    SUBMIT_ADD_YUGIOH_DECK_FORM_FAIL,
    yugiohPoc.addDeck,
    formBody
  )();

export const submitEditYugiohDeckForm = formBody =>
  actionCreator(
    SUBMIT_EDIT_YUGIOH_DECK_FORM_START,
    SUBMIT_EDIT_YUGIOH_DECK_FORM_SUCCESS,
    SUBMIT_EDIT_YUGIOH_DECK_FORM_FAIL,
    yugiohPoc.editDeck,
    formBody
  )();

export const submitAddMusicForm = formBody =>
  actionCreator(
    SUBMIT_ADD_MUSIC_FORM_START,
    SUBMIT_ADD_MUSIC_FORM_SUCESS,
    SUBMIT_ADD_MUSIC_FORM_FAIL,
    music.add,
    formBody
  )();

export const addArrayYugiohModForm = name => ({ type: ADD_ARRAY_YUGIOH_MOD_FORM, name });
export const addArrayYugiohDeckForm = name => ({ type: ADD_ARRAY_YUGIOH_DECK_FORM, name });
export const addArrayYugiohEditModForm = name => ({ type: ADD_ARRAY_YUGIOH_EDIT_MOD_FORM, name });
export const addArrayYugiohEditDeckForm = name => ({ type: ADD_ARRAY_YUGIOH_EDIT_DECK_FORM, name });
export const removeArrayYugiohModForm = (name, index) => ({
  type: REMOVE_ARRAY_YUGIOH_MOD_FORM,
  name,
  index
});
export const removeArrayYugiohDeckForm = (name, index) => ({
  type: REMOVE_ARRAY_YUGIOH_DECK_FORM,
  name,
  index
});
export const removeArrayYugiohEditModForm = (name, index) => ({
  type: REMOVE_ARRAY_YUGIOH_EDIT_MOD_FORM,
  name,
  index
});
export const removeArrayYugiohEditDeckForm = (name, index) => ({
  type: REMOVE_ARRAY_YUGIOH_EDIT_DECK_FORM,
  name,
  index
});

export const changeFormRating = (formName, value) => ({ type: CHANGE_FORM_RATING, formName, value });

export default (
  state = {
    AddFlashGame: {
      Name: '',
      File: ''
    },
    AddYugiohMod: {
      Name: '',
      Icon: null,
      Image: null,
      Credits: [''],
      Rating: 0,
      Description: '',
      Introduction: ''
    },
    AddYugiohDeck: {
      ModId: '',
      Name: '',
      Image: null,
      Rating: 0,
      Description: '',
      Pros: [''],
      Cons: [''],
      Winrate: 0
    },
    EditYugiohMod: null,
    EditYugiohDeck: null,
    AddMusic: {
      File: null,
      Rating: 0,
      Genre: ''
    }
  },
  action
) => {
  let formValue;
  switch (action.type) {
    case CHANGE_ADD_FLASH_FORM:
      formValue = commonFormChange(state.AddFlashGame, action.event);
      return { ...state, AddFlashGame: formValue };
    case CHANGE_ADD_MUSIC_FORM:
      formValue = commonFormChange(state.AddMusic, action.event);
      return { ...state, AddMusic: formValue };
    case CHANGE_ADD_YUGIOH_MOD_FORM:
      formValue = commonFormChange(
        state.AddYugiohMod,
        action.event,
        action.index,
        ['Credits'],
        ['Icon', 'Image']
      );
      return { ...state, AddYugiohMod: formValue };
    case CHANGE_ADD_YUGIOH_DECK_FORM:
      formValue = commonFormChange(
        state.AddYugiohDeck,
        action.event,
        action.index,
        ['Pros', 'Cons'],
        ['Image']
      );
      return { ...state, AddYugiohDeck: formValue };
    case CHANGE_EDIT_YUGIOH_MOD_FORM:
      formValue = commonFormChange(
        state.EditYugiohMod,
        action.event,
        action.index,
        ['Credits'],
        ['Icon', 'Image']
      );
      return { ...state, EditYugiohMod: { ...formValue } };
    case CHANGE_EDIT_YUGIOH_DECK_FORM:
      formValue = commonFormChange(
        state.EditYugiohDeck,
        action.event,
        action.index,
        ['Pros', 'Cons'],
        ['Image']
      );
      return { ...state, EditYugiohDeck: { ...formValue } };
    case ADD_ARRAY_YUGIOH_MOD_FORM:
      state.AddYugiohMod[action.name].push('');
      return {
        ...state,
        AddYugiohMod: { ...state.AddYugiohMod, [action.name]: state.AddYugiohMod[action.name].slice(0) }
      };
    case ADD_ARRAY_YUGIOH_DECK_FORM:
      state.AddYugiohDeck[action.name].push('');
      return {
        ...state,
        AddYugiohDeck: { ...state.AddYugiohDeck, [action.name]: state.AddYugiohDeck[action.name].slice(0) }
      };
    case ADD_ARRAY_YUGIOH_EDIT_MOD_FORM:
      state.EditYugiohMod[action.name].push('');
      return {
        ...state,
        EditYugiohMod: { ...state.EditYugiohMod, [action.name]: state.EditYugiohMod[action.name].slice(0) }
      };
    case ADD_ARRAY_YUGIOH_EDIT_DECK_FORM:
      state.EditYugiohDeck[action.name].push('');
      return {
        ...state,
        EditYugiohDeck: { ...state.EditYugiohDeck, [action.name]: state.EditYugiohDeck[action.name].slice(0) }
      };
    case REMOVE_ARRAY_YUGIOH_MOD_FORM:
      state.AddYugiohMod[action.name].splice(action.index, 1);
      return {
        ...state,
        AddYugiohMod: { ...state.AddYugiohMod, [action.name]: state.AddYugiohMod[action.name].slice(0) }
      };
    case REMOVE_ARRAY_YUGIOH_DECK_FORM:
      state.AddYugiohMod[action.name].splice(action.index, 1);
      return {
        ...state,
        AddYugiohDeck: { ...state.AddYugiohDeck, [action.name]: state.AddYugiohDeck[action.name].slice(0) }
      };
    case REMOVE_ARRAY_YUGIOH_EDIT_MOD_FORM:
      state.EditYugiohMod[action.name].splice(action.index, 1);
      return {
        ...state,
        EditYugiohMod: { ...state.EditYugiohMod, [action.name]: state.EditYugiohMod[action.name].slice(0) }
      };
    case REMOVE_ARRAY_YUGIOH_EDIT_DECK_FORM:
      state.EditYugiohDeck[action.name].splice(action.index, 1);
      return {
        ...state,
        EditYugiohDeck: { ...state.EditYugiohDeck, [action.name]: state.EditYugiohMod[action.name].slice(0) }
      };
    case CHANGE_FORM_RATING:
      state[action.formName].Rating = action.value;
      return { ...state, [action.formName]: { ...state[action.formName] } };
    case GET_MOD_LIST_SUCCESS:
      return {
        ...state,
        AddYugiohDeck: { ...state.AddYugiohDeck, ModId: action.data[0]._id },
        EditYugiohMod: action.data[0]
      };
    case GET_DECK_LIST_SUCCESS:
      return {
        ...state,
        EditYugiohDeck: action.data[0]
      };
    case SET_FOCUS_MOD:
      return {
        ...state,
        AddYugiohDeck: { ...state.AddYugiohDeck, ModId: action.mod._id },
        EditYugiohMod: action.mod
      };
    case SET_FOCUS_DECK:
      return {
        ...state,
        EditYugiohDeck: action.deck
      };
    case SUBMIT_ADD_YUGIOH_MOD_FORM_SUCCESS:
      return {
        ...state,
        EditYugiohMod: { ...action.data }
      };
    case SUBMIT_ADD_YUGIOH_DECK_FORM_SUCCESS:
      return {
        ...state,
        EditYugiohDeck: { ...action.data }
      };
    default:
      return state;
  }
};
