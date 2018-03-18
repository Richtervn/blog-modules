import { actionCreator } from 'helpers';
import services from './Darksteam97d99i.services';
import { toastError, toastSuccess } from 'common/Toast';

import { REGISTER } from './User';

export const adminPages = [
  { name: 'Accounts Manager', icon: 'user', route: 'accounts_manager' },
  { name: 'Characters Manager', icon: 'users', route: 'characters_manager' }
];

export const serverPages = [
  { name: 'Bag Items Editor', icon: 'magic', route: 'bag_items_editor' },
  { name: 'Monsters Set Base', icon: 'drupal', route: 'monsters_set_base' },
  { name: 'Quests Editor', icon: 'first-order', route: 'quests_editor' },
  { name: 'Shops Editor', icon: 'shopping-cart', route: 'shops_editor' },
  { name: 'Game Setting', icon: 'gear', route: 'game_setting' },
  { name: 'Server Info', icon: 'info-circle', route: 'server_info' }
];

const GET_SERVER_INFO = 'darksteam97d99i/GET_SERVER_INFO';
const GET_GAME_SETTING = 'darksteam97d99i/GET_GAME_SETTING';
const EDIT_SERVER_INFO = 'darksteam97d99i/EDIT_SERVER_INFO';
const EDIT_GAME_SETTING = 'darksteam97d99i/EDIT_GAME_SETTING';

const SET_NON_REGISTERED = 'darksteam97d99i/SET_NON_REGISTERED';
const SET_ACTIVE_TAB = 'darksteam97d99i/SET_ACTIVE_TAB';
const SET_USER_PAGE = 'darksteam97d99i/SET_USER_PAGE';
const SET_ADMIN_PAGE = 'darksteam97d99i/SET_ADMIN_PAGE';
const SET_SERVER_PAGE = 'darksteam97d99i/SET_SERVER_PAGE';

export const getServerInfo = actionCreator(GET_SERVER_INFO, services.getServerInfo);
export const getGameSetting = actionCreator(GET_GAME_SETTING, services.getGameSetting);
export const editServerInfo = formBody => actionCreator(EDIT_SERVER_INFO, services.editServerInfo, formBody)();
export const editGameSetting = formBody => actionCreator(EDIT_GAME_SETTING, services.editGameSetting, formBody)();

export const setActiveTab = tab => ({ type: SET_ACTIVE_TAB, tab });
export const setUserPage = page => ({ type: SET_USER_PAGE, page });
export const setAdminPage = page => ({ type: SET_ADMIN_PAGE, page });
export const setServerPage = page => ({ type: SET_SERVER_PAGE, page });
export const setNonRegistered = () => ({ type: SET_NON_REGISTERED });

const initialState = {
  activeTab: '',
  gameSetting: null,
  serverInfo: null,
  userPage: null,
  adminPage: null,
  serverPage: null,
  isRegistered: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_TAB:
      return { ...state, activeTab: action.tab };
    case SET_USER_PAGE:
      return { ...state, userPage: action.page };
    case SET_SERVER_PAGE:
      return { ...state, serverPage: action.page };
    case SET_ADMIN_PAGE:
      return { ...state, adminPage: action.page };
    case SET_NON_REGISTERED:
      return { ...state, isRegistered: false };

    case `${GET_GAME_SETTING}_SUCCESS`:
      return { ...state, gameSetting: action.data };
    case `${GET_SERVER_INFO}_SUCCESS`:
      return { ...state, serverInfo: action.data };
    case `${EDIT_GAME_SETTING}_SUCCESS`:
      toastSuccess('Saved Game Setting')
      return {...state, gameSetting: action.data};
    case `${EDIT_SERVER_INFO}_SUCCESS`:
      toastSuccess('Saved Server Info')
      return {...state, serverInfo: action.data};

    case `${REGISTER}_SUCCESS`:
      return { ...state, isRegistered: true };

    case `${GET_GAME_SETTING}_FAIL`:
    case `${GET_SERVER_INFO}_FAIL`:
    case `${EDIT_GAME_SETTING}_FAIL`:
    case `${EDIT_SERVER_INFO}_FAIL`:
      toastError(action.error);
      return state;
    default:
      return state;
  }
};
