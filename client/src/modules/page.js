import {system} from 'services';
import actionCreator from 'factories/actionCreator';

const SET_ACTIVE_GROUP = 'page/SET_ACTIVE_GROUP';
const SET_DEACTIVE_GROUP = 'page/SET_DEACTIVE_GROUP';
const SET_ACTIVE_ITEM = 'page/SET_ACTIVE_ITEM';

const GET_MENU_TREE_START = 'page/GET_MENU_TREE';
const GET_MENU_TREE_SUCCESS = 'page/GET_MENU_TREE_SUCCESS';
const GET_MENU_TREE_FAIL = 'page/GET_MENU_TREE_FAIL';

export const setActiveGroup = name => ({ type: SET_ACTIVE_GROUP, name });
export const setDeactiveGroup = () => ({ type: SET_DEACTIVE_GROUP });
export const setActiveItem = name => ({ type: SET_ACTIVE_ITEM, name });

export const getMenuTree = actionCreator(GET_MENU_TREE_START, GET_MENU_TREE_SUCCESS, GET_MENU_TREE_FAIL, system.getMenu)

export default (state = { activeGroup: null, activeItem: null, menuTree: null }, action) => {
  switch (action.type) {
    case SET_ACTIVE_GROUP:
      return { ...state, activeGroup: action.name };
    case SET_DEACTIVE_GROUP:
      return { ...state, activeGroup: null };
    case SET_ACTIVE_ITEM:
      return { ...state, activeItem: action.name };
    case GET_MENU_TREE_SUCCESS:
      return {...state, menuTree: action.data };
    default:
      return state;
  }
};
