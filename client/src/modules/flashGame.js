import { SET_ACTIVE_ITEM, SET_ACTIVE_GROUP } from 'modules/page';
import { flashGames } from 'services';
import { toast } from 'react-toastify';

import actionCreator from 'factories/actionCreator';

const GET_GAME_START = 'flashGame/GET_GAME_START';
const GET_GAME_SUCCESS = 'flashGame/GET_GAME_SUCCESS';
const GET_GAME_FAIL = 'flashGame/GET_GAME_FAIL';

const SUBMIT_ADD_FLASH_FORM_START = 'forms/SUBMIT_ADD_FLASH_FORM_START';
export const SUBMIT_ADD_FLASH_FORM_SUCCESS = 'forms/SUBMIT_ADD_FLASH_FORM_SUCCESS';
const SUBMIT_ADD_FLASH_FORM_FAIL = 'forms/SUBMIT_ADD_FLASH_FORM_FAIL';

export const submitAddFlashForm = formBody =>
  actionCreator(
    SUBMIT_ADD_FLASH_FORM_START,
    SUBMIT_ADD_FLASH_FORM_SUCCESS,
    SUBMIT_ADD_FLASH_FORM_FAIL,
    flashGames.addGame,
    formBody
  )();

export const getGame = Name =>
  actionCreator(GET_GAME_START, GET_GAME_SUCCESS, GET_GAME_FAIL, flashGames.getGame, Name)();

export default (state = { Name: '', Uri: '', isActive: false }, action) => {
  switch (action.type) {
    case SET_ACTIVE_GROUP:
      return { ...state, isActive: action.name == 'Flash Games' };
    case SET_ACTIVE_ITEM:
      return state.isActive ? { ...state, Name: action.name, Uri: '' } : state;
    case GET_GAME_SUCCESS:
      return { ...state, Uri: action.data.Uri };

    case GET_GAME_FAIL:
    case SUBMIT_ADD_FLASH_FORM_FAIL:
      toast.error(`${action.error}`, {
        position: toast.POSITION.TOP_LEFT,
        className: 'toast-error'
      });
      return state;

    default:
      return state;
  }
};
