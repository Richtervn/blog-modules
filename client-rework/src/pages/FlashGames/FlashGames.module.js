import { actionCreator } from 'helpers';
import { toastError } from 'common/Toast';

import  services  from './FlashGames.services';

const GET_GAME_START = 'flashGames/GET_GAME_START';
const GET_GAME_SUCCESS = 'flashGames/GET_GAME_SUCCESS';
const GET_GAME_FAIL = 'flashGames/GET_GAME_FAIL';

export const getGame = Name =>
  actionCreator(GET_GAME_START, GET_GAME_SUCCESS, GET_GAME_FAIL, services.getGame, Name)();

const initialState = { uri: null };

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_GAME_SUCCESS:
      return { ...state, uri: action.data.Uri };
    case GET_GAME_FAIL:
      toastError(action.error);
      return state;
    default:
      return state;
  }
};
