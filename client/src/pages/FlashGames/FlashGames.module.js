import { actionCreator } from 'helpers';
import { getMenuTree } from 'pages/appControl';

import services from './FlashGames.services';

const GET_GAME = 'flashGames/GET_GAME';
export const ADD_GAME = 'flashGames/ADD_GAME';
const EDIT_GAME = 'flashGames/EDIT_GAME';

export const getGame = Name =>
  actionCreator(GET_GAME, services.getGame, {
    payload: { Name }
  })();
export const addGame = formBody =>
  actionCreator(ADD_GAME, services.addGame, {
    payload: { formBody },
    onAfterSuccess({ dispatch }) {
      dispatch(getMenuTree());
    }
  })();
export const editGame = (formBody, callback) =>
  actionCreator(EDIT_GAME, services.editGame, {
    payload: { formBody },
    onAfterSuccess({ dispatch }) {
      dispatch(getMenuTree());
      callback();
    }
  })();

const initialState = { currentGame: null };

export default (state = initialState, action) => {
  switch (action.type) {
    case `${GET_GAME}_SUCCESS`:
      return { ...state, currentGame: action.payload };
    case `${EDIT_GAME}_SUCCESS`:
      return { ...state, currentGame: { ...action.payload.game } };

    default:
      return state;
  }
};
