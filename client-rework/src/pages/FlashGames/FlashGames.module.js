import { actionCreator } from 'helpers';
import { toastError } from 'common/Toast';

import services from './FlashGames.services';

const GET_GAME = 'flashGames/GET_GAME';
export const ADD_GAME = 'flashGames/ADD_GAME';
const EDIT_GAME = 'flashGames/EDIT_GAME';

export const getGame = Name => actionCreator(GET_GAME, services.getGame, Name)();
export const addGame = formBody => actionCreator(ADD_GAME, services.addGame, formBody)();
export const editGame = formBody => actionCreator(EDIT_GAME, services.editGame, formBody)();

const initialState = { currentGame: null };

export default (state = initialState, action) => {
  switch (action.type) {
    case `${GET_GAME}_SUCCESS`:
      return { ...state, currentGame: action.data };
    case `${EDIT_GAME}_SUCCESS`:
      return { ...state, currentGame: { ...action.data.game } };

    case `${GET_GAME}_FAIL`:
    case `${EDIT_GAME}_FAIL`:
    case `${ADD_GAME}_FAIL`:
      toastError(action.error);
      return state;

    default:
      return state;
  }
};
