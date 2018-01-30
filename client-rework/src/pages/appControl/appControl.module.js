import { actionCreator } from 'helpers';
import { toastError } from 'common/Toast';
import { ADD_GAME } from 'pages/FlashGames';

import services from './appControl.services';

const GET_MENU_TREE = 'appControl/GET_MENU_TREE';
const SET_ACTIVE_GROUP = 'appControl/SET_ACTIVE_GROUP';
const SET_ACTIVE_ITEM = 'appControl/SET_ACTIVE_ITEM';
const SET_ACTIVE_TAB = 'appControl/SET_ACTIVE_TAB';
const SET_DEFAULT_SHOW_GROUP = 'appControl/SET_DEFAULT_SHOW_GROUP';
const SET_MODAL_NAME = 'appControl/SET_MODAL_NAME';
const SHOW_HEADER_MENU = 'appControl/SHOW_HEADER_MENU';
const HIDE_HEADER_MENU = 'appControl/HIDE_HEADER_MENU';

export const getMenuTree = actionCreator(GET_MENU_TREE, services.getMenuTree);

export const setActiveGroup = group => ({ type: SET_ACTIVE_GROUP, group });
export const setActiveItem = item => ({ type: SET_ACTIVE_ITEM, item });
export const setActiveTab = tab => ({ type: SET_ACTIVE_TAB, tab });
export const setDefaultShowGroup = group => ({ type: SET_DEFAULT_SHOW_GROUP, group });
export const setModalName = name => ({ type: SET_MODAL_NAME, name });
export const showHeaderMenu = () => ({ type: SHOW_HEADER_MENU });
export const hideHeaderMenu = () => ({ type: HIDE_HEADER_MENU });

const initialState = {
  menuTree: null,
  activeGroup: null,
  activeItem: null,
  defaultShowGroup: null,
  modalName: 'FlashGame',
  isShowHeaderMenu: false,
  homeTabs: [{ name: 'Projects', route: '/home/projects' }, { name: 'App Diary', route: '/home/app_diary' }],
  activeTab: 'Projects'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${GET_MENU_TREE}_SUCCESS`:
      return { ...state, menuTree: action.data };
    case SET_ACTIVE_GROUP:
      return { ...state, activeGroup: action.group };
    case SET_ACTIVE_ITEM:
      return { ...state, activeItem: action.item };
    case SET_ACTIVE_TAB:
      return { ...state, activeTab: action.tab };
    case SET_DEFAULT_SHOW_GROUP:
      return { ...state, defaultShowGroup: action.group };
    case SET_MODAL_NAME:
      return { ...state, modalName: action.name };
    case SHOW_HEADER_MENU:
      return { ...state, isShowHeaderMenu: true };
    case HIDE_HEADER_MENU:
      return { ...state, isShowHeaderMenu: false };

    case `${ADD_GAME}_SUCCESS`:
      return { ...state, menuTree: { ...action.data.menu } };

    case `${GET_MENU_TREE}_FAIL`:
      toastError(action.error);
      return state;
    default:
      return state;
  }
};
