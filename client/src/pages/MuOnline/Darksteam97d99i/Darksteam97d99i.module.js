import { actionCreator } from 'helpers';
import services from './Darksteam97d99i.services';
import { toastError, toastSuccess } from 'common/Toast';

const GET_SERVER_INFO = 'darksteam97d99i/GET_SERVER_INFO';
const GET_GAME_SETTING = 'darksteam97d99i/GET_GAME_SETTING';

const SET_ACTIVE_TAB = 'darksteam97d99i/SET_ACTIVE_TAB';
const SET_CURRENT_USER_PAGE = 'darksteam97d99i/SET_CURRENT_USER_PAGE';
const SET_CURRENT_ADMIN_PAGE = 'darksteam97d99i/SET_CURRENT_ADMIN_PAGE';
const SET_CURRENT_SERVER_PAGE = 'darksteam97d99i/SET_CURRENT_SERVER_PAGE';

export const getServerInfo = actionCreator(GET_SERVER_INFO, services.getServerInfo);
export const getGameSetting = actionCreator(GET_GAME_SETTING, services.getGameSetting);

export const setActiveTab = tab => ({ type: SET_ACTIVE_TAB, tab });
export const setCurrentUserPage = page => ({ type: SET_CURRENT_USER_PAGE, page });
export const setCurrentAdminPage = page => ({ type: SET_CURRENT_ADMIN_PAGE, page });
export const setCurrentServerPage = page => ({ type: SET_CURRENT_SERVER_PAGE, page });

const initialState = {
  activeTab: 'User',
  gameSetting: null,
  serverInfo: null,
  currentUserPage: 'login',
  currentAdminPage: '',
  currentServerPage: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_TAB:
      return { ...state, activeTab: action.tab };
    case SET_CURRENT_USER_PAGE:
      return { ...state, currentUserPage: action.page };
    case SET_CURRENT_SERVER_PAGE:
      return { ...state, currentServerPage: action.page };
    case SET_CURRENT_ADMIN_PAGE:
      return { ...state, currentAdminPage: action.page };
      
    case `${GET_GAME_SETTING}_SUCCESS`:
      return { ...state, gameSetting: action.data };
    case `${GET_SERVER_INFO}_SUCCESS`:
      return { ...state, serverInfo: action.data };

    case `${GET_GAME_SETTING}_FAIL`:
    case `${GET_SERVER_INFO}_FAIL`:
      toastError(action.error);
      return state;
    default:
      return state;
  }
};
