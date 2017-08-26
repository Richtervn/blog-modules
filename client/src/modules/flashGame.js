import { SET_ACTIVE_ITEM, SET_ACTIVE_GROUP } from 'modules/page';
import { flashGames } from 'services';

import actionCreator from 'factories/actionCreator';

const GET_GAME_START = 'flashGame/GET_GAME_START';
const GET_GAME_SUCCESS = 'flashGame/GET_GAME_SUCCESS';
const GET_GAME_FAIL = 'flashGame/GET_GAME_FAIL';

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
    default:
      return state;
  }
};
