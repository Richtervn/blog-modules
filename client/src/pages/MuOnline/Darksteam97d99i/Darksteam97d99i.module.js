import { actionCreator } from 'helpers';
import services from './Darksteam97d99i.services';
import { toastSuccess } from 'common/Toast';

export const characterList = {
  'Dark Wizard': '0',
  'Soul Master': '1',
  'Dark Knight': '16',
  'Blade Knight': '17',
  Elf: '32',
  'Muse Elf': '33',
  'Magic Gladiator': '48'
};

export const mapList = {
  Lorencia: 0,
  Dungeon: 1,
  Davias: 2,
  Noria: 3,
  'Lost Tower': 4,
  Exile: 5,
  Stadium: 6,
  Atlans: 7,
  Tarkan: 8,
  Icarus: 10
};

const GET_SERVER_INFO = 'ds9799_appControl/GET_SERVER_INFO';
const GET_GAME_SETTING = 'ds9799_appControl/GET_GAME_SETTING';
const EDIT_SERVER_INFO = 'ds9799_appControl/EDIT_SERVER_INFO';
const EDIT_GAME_SETTING = 'ds9799_appControl/EDIT_GAME_SETTING';

const SET_ACTIVE_FORM = 'ds9799_appControl/SET_ACTIVE_FORM';
const SET_ACTIVE_TAB = 'ds9799_appControl/SET_ACTIVE_TAB';
const SET_USER_PAGE = 'ds9799_appControl/SET_USER_PAGE';
const SET_ADMIN_PAGE = 'ds9799_appControl/SET_ADMIN_PAGE';
const SET_SERVER_PAGE = 'ds9799_appControl/SET_SERVER_PAGE';

export const getServerInfo = () => actionCreator(GET_SERVER_INFO, services.getServerInfo)();
export const getGameSetting = () => actionCreator(GET_GAME_SETTING, services.getGameSetting)();
export const editServerInfo = formBody =>
  actionCreator(EDIT_SERVER_INFO, services.editServerInfo, { payload: { formBody } })();
export const editGameSetting = formBody =>
  actionCreator(EDIT_GAME_SETTING, services.editGameSetting, { payload: { formBody } })();

export const setActiveTab = tab => ({ type: SET_ACTIVE_TAB, tab });
export const setUserPage = page => (dispatch, getState, socket) => {
  const action = () => ({ type: SET_USER_PAGE, page });
  if (page === 'web_quest' && getState().ds9799_webQuest.questList) {
    socket.emit('darksteam97d99i/CHECK_POINT_QUEST', 'WQ16');
  }
  dispatch(action());
};
export const setAdminPage = page => ({ type: SET_ADMIN_PAGE, page });
export const setServerPage = page => ({ type: SET_SERVER_PAGE, page });
export const setActiveForm = form => ({ type: SET_ACTIVE_FORM, form });

const initialState = {
  activeTab: '',
  activeForm: 'login',
  gameSetting: null,
  serverInfo: null,
  userPage: null,
  adminPage: null,
  serverPage: null
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

    case `${GET_GAME_SETTING}_SUCCESS`:
      return { ...state, gameSetting: action.payload };
    case `${GET_SERVER_INFO}_SUCCESS`:
      return { ...state, serverInfo: action.payload };
    case `${EDIT_GAME_SETTING}_SUCCESS`:
      toastSuccess('Saved Game Setting');
      return { ...state, gameSetting: action.payload };
    case `${EDIT_SERVER_INFO}_SUCCESS`:
      toastSuccess('Saved Server Info');
      return { ...state, serverInfo: action.payload };

    case SET_ACTIVE_FORM:
      return { ...state, activeForm: action.form };

    default:
      return state;
  }
};
