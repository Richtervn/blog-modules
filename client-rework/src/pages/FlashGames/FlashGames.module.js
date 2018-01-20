import { actionCreator } from 'helpers';
import { toastError } from 'common/Toast';

import services from './FlashGames.services';

const GET_GAME_START = 'flashGames/GET_GAME_START';
const GET_GAME_SUCCESS = 'flashGames/GET_GAME_SUCCESS';
const GET_GAME_FAIL = 'flashGames/GET_GAME_FAIL';

const ADD_GAME_START = 'flashGames/ADD_GAME_START';
const ADD_GAME_SUCCESS = 'flashGames/ADD_GAME_SUCCESS';
const ADD_GAME_FAIL = 'flashGames/ADD_GAME_FAIL';

const EDIT_GAME_START = 'flashGames/EDIT_GAME_START';
const EDIT_GAME_SUCCESS = 'flashGames/EDIT_GAME_SUCCESS';
const EDIT_GAME_FAIL = 'flashGames/EDIT_GAME_FAIL';

export const getGame = Name => actionCreator(GET_GAME_START, GET_GAME_SUCCESS, GET_GAME_FAIL, services.getGame, Name)();

export const addGame = formBody =>
  actionCreator(ADD_GAME_START, ADD_GAME_SUCCESS, ADD_GAME_FAIL, services.addGame, formBody)();

export const editGame = formBody =>
  actionCreator(EDIT_GAME_START, EDIT_GAME_SUCCESS, EDIT_GAME_FAIL, services.editGame, formBody)();

const initialState = { currentGame: null };

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_GAME_SUCCESS:
      return { ...state, currentGame: action.data };
    case EDIT_GAME_SUCCESS:
      return { ...state, currentGame: { ...action.data.game } };
    case GET_GAME_FAIL:
      toastError(action.error);
      return state;
    default:
      return state;
  }
};
