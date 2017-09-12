import commonFormChange from 'factories/commonFormChange';
import actionCreator from 'factories/actionCreator';

import { flashGames, yugiohPoc } from 'services';

const CHANGE_ADD_FLASH_FORM = 'forms/CHANGE_ADD_FLASH_FORM';
const CHANGE_ADD_YUGIOH_MOD_FORM = 'forms/CHANGE_ADD_YUGIOH_MOD_FORM';

const SUBMIT_ADD_FLASH_FORM_START = 'forms/SUBMIT_ADD_FLASH_FORM_START';
export const SUBMIT_ADD_FLASH_FORM_SUCCESS = 'forms/SUBMIT_ADD_FLASH_FORM_SUCCESS';
const SUBMIT_ADD_FLASH_FORM_FAIL = 'forms/SUBMIT_ADD_FLASH_FORM_FAIL';

const SUBMIT_ADD_YUGIOH_MOD_FORM_START = 'forms/SUBMIT_ADD_FLASH_FORM_START';
export const SUBMIT_ADD_YUGIOH_MOD_FORM_SUCCESS = 'forms/SUBMIT_ADD_YUGIOH_MOD_FORM_SUCCESS';
const SUBMIT_ADD_YUGIOH_MOD_FORM_FAIL = 'forms/SUBMIT_ADD_FLASH_FORM_FAIL';

const ADD_ARRAY_YUGIOH_MOD_FORM = 'forms/ADD_ARRAY_YUGIOH_MOD_FORM';
const REMOVE_ARRAY_YUGIOH_MOD_FORM = 'forms/REMOVE_ARRAY_YUGIOH_MOD_FORM';
const CHANGE_FORM_RATING = 'forms/CHANGE_FORM_RATING';

export const changeAddFlashForm = event => ({ type: CHANGE_ADD_FLASH_FORM, event });
export const changeAddYugiohModForm = (event, index) => ({ type: CHANGE_ADD_YUGIOH_MOD_FORM, event, index });

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

export const addArrayYugiohModForm = name => ({ type: ADD_ARRAY_YUGIOH_MOD_FORM, name });
export const removeArrayYugiohModForm = (name, index) => ({
  type: REMOVE_ARRAY_YUGIOH_MOD_FORM,
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
    }
  },
  action
) => {
  let formValue;
  switch (action.type) {
    case CHANGE_ADD_FLASH_FORM:
      formValue = commonFormChange(state.AddFlashGame, action.event);
      return { ...state, AddFlashGame: formValue };
    case CHANGE_ADD_YUGIOH_MOD_FORM:
      formValue = commonFormChange(
        state.AddYugiohMod,
        action.event,
        action.index,
        ['Credits'],
        ['Icon', 'Image']
      );
      return { ...state, AddYugiohMod: formValue };
    case ADD_ARRAY_YUGIOH_MOD_FORM:
      state.AddYugiohMod[action.name].push('');
      return {
        ...state,
        AddYugiohMod: { ...state.AddYugiohMod, [action.name]: state.AddYugiohMod[action.name].slice(0) }
      };
    case REMOVE_ARRAY_YUGIOH_MOD_FORM:
      state.AddYugiohMod[action.name].splice(action.index, 1);
      return {
        ...state,
        AddYugiohMod: { ...state.AddYugiohMod, [action.name]: state.AddYugiohMod[action.name].slice(0) }
      };
    case CHANGE_FORM_RATING:
      state[action.formName].Rating = action.value;
      return { ...state, [action.formName]: { ...state[action.formName] } };
    default:
      return state;
  }
};
