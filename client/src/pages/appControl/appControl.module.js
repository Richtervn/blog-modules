import _ from 'underscore';
import { actionCreator } from 'helpers';
import { ADD_GAME } from 'pages/FlashGames';

import services from './appControl.services';

const GET_MENU_TREE = 'appControl/GET_MENU_TREE';
const SAVE_MENU_TREE = 'appControl/SAVE_MENU_TREE';
const SET_ACTIVE_GROUP = 'appControl/SET_ACTIVE_GROUP';
const SET_ACTIVE_ITEM = 'appControl/SET_ACTIVE_ITEM';
const SET_ACTIVE_TAB = 'appControl/SET_ACTIVE_TAB';
const SET_DEFAULT_SHOW_GROUP = 'appControl/SET_DEFAULT_SHOW_GROUP';
const SET_MODAL_NAME = 'appControl/SET_MODAL_NAME';
const SHOW_HEADER_MENU = 'appControl/SHOW_HEADER_MENU';
const HIDE_HEADER_MENU = 'appControl/HIDE_HEADER_MENU';
const TOGGLE_MENU_GROUP = 'appControl/TOGGLE_MENU_GROUP';

export const getMenuTree = () => actionCreator(GET_MENU_TREE, services.getMenuTree)();
export const saveMenuTree = formBody =>
  actionCreator(SAVE_MENU_TREE, services.saveMenuTree, { payload: { formBody } })();

export const setActiveGroup = group => ({ type: SET_ACTIVE_GROUP, group });
export const setActiveItem = item => ({ type: SET_ACTIVE_ITEM, item });
export const setActiveTab = tab => ({ type: SET_ACTIVE_TAB, tab });
export const setDefaultShowGroup = group => ({ type: SET_DEFAULT_SHOW_GROUP, group });
export const setModalName = name => ({ type: SET_MODAL_NAME, name });
export const showHeaderMenu = () => ({ type: SHOW_HEADER_MENU });
export const hideHeaderMenu = () => ({ type: HIDE_HEADER_MENU });
export const toggleMenuGroup = group => ({ type: TOGGLE_MENU_GROUP, group });

const initialState = {
  menuTree: null,
  activeGroup: null,
  activeItem: null,
  defaultShowGroup: null,
  modalName: 'FlashGame',
  openedGroups: [],
  isShowHeaderMenu: false,
  homeTabs: [{ name: 'Projects', route: '/home/projects' }, { name: 'App Diary', route: '/home/app_diary' }],
  activeTab: 'Projects'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${GET_MENU_TREE}_SUCCESS`:
      return { ...state, menuTree: action.payload };
    case `${SAVE_MENU_TREE}_SUCCESS`:
      return { ...state, menuTree: action.payload };
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
    case TOGGLE_MENU_GROUP: {
      let openedGroups;
      if (_.contains(state.openedGroups, action.group)) {
        openedGroups = _.without(state.openedGroups, action.group).slice(0);
      } else {
        openedGroups = [...state.openedGroups, action.group];
      }
      return { ...state, openedGroups };
    }
    case `${ADD_GAME}_SUCCESS`:
      return { ...state, menuTree: { ...action.payload.menu } };

    default:
      return state;
  }
};
