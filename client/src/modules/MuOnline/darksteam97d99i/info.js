import actionCreator from 'factories/actionCreator';
import { darksteam97d99i } from 'services';

const GET_GAME_SETTING_START = 'darksteam97d99i/info/GET_GAME_SETTING_START';
const GET_GAME_SETTING_SUCCESS = 'darksteam97d99i/info/GET_GAME_SETTING_SUCCESS';
const GET_GAME_SETTING_FAIL = 'darksteam97d99i/info/GET_GAME_SETTING_FAIL';

const GET_SERVER_INFO_START = 'darksteam97d99i/info/GET_SERVER_INFO_START';
const GET_SERVER_INFO_SUCCESS = 'darksteam97d99i/info/GET_SERVER_INFO_SUCCESS';
const GET_SERVER_INFO_FAIL = 'darksteam97d99i/info/GET_SERVER_INFO_FAIL';

export const getGameSetting = actionCreator(
  GET_GAME_SETTING_START,
  GET_GAME_SETTING_SUCCESS,
  GET_GAME_SETTING_FAIL,
  darksteam97d99i.getGameSetting
);

export const getServerInfo = actionCreator(
  GET_SERVER_INFO_START,
  GET_SERVER_INFO_SUCCESS,
  GET_SERVER_INFO_FAIL,
  darksteam97d99i.getServerInfo
);

export default (
  state = {
    gameSetting: null,
    serverInfo: null
  },
  action
) => {
  switch (action.type) {
    case GET_GAME_SETTING_SUCCESS:
      return { ...state, gameSetting: action.data };
    case GET_SERVER_INFO_SUCCESS:
      return { ...state, serverInfo: action.data };
    default:
      return state;
  }
};
