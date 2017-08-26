import commonFormChange from 'factories/commonFormChange';
import actionCreator from 'factories/actionCreator';

import { flashGames } from 'services';

const CHANGE_ADD_FLASH_FORM = 'forms/CHANGE_ADD_FLASH_FORM';
const SUBMIT_ADD_FLASH_FORM_START = 'forms/SUBMIT_ADD_FLASH_FORM_START';
export const SUBMIT_ADD_FLASH_FORM_SUCCESS = 'forms/SUBMIT_ADD_FLASH_FORM_SUCCESS';
const SUBMIT_ADD_FLASH_FORM_FAIL = 'forms/SUBMIT_ADD_FLASH_FORM_FAIL';

export const changeAddFlashForm = event => ({ type: CHANGE_ADD_FLASH_FORM, event });
export const submitAddFlashForm = formBody => actionCreator(
  SUBMIT_ADD_FLASH_FORM_START,
  SUBMIT_ADD_FLASH_FORM_SUCCESS,
  SUBMIT_ADD_FLASH_FORM_FAIL,
  flashGames.addGame,
  formBody
)();

export default (
  state = {
    AddFlashGame: {
      Name: '',
      File: ''
    }
  },
  action
) => {
  let formValue;
  switch (action.type) {
    case CHANGE_ADD_FLASH_FORM:
      formValue = commonFormChange(state.AddFlashGame, action.event);
      return { ...state, AddFlashGame: formValue };
    default:
      return state;
  }
};
