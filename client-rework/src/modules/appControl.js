import { actionCreator } from 'helpers';
import { system } from 'services';
import { toastError } from 'components/Toast';

const GET_MENU_TREE_START = 'appControl/GET_MENU_TREE';
const GET_MENU_TREE_SUCCESS = 'appControl/GET_MENU_TREE_SUCCESS';
const GET_MENU_TREE_FAIL = 'appControl/GET_MENU_TREE_FAIL';

const SET_ACTIVE_GROUP = 'appControl/SET_ACTIVE_GROUP';
const SET_ACTIVE_ITEM = 'appControl/SET_ACTIVE_ITEM';
const SET_DEFAULT_SHOW_GROUP = 'appControl/SET_DEFAULT_SHOW_GROUP';

export const getMenuTree = actionCreator(
  GET_MENU_TREE_START,
  GET_MENU_TREE_SUCCESS,
  GET_MENU_TREE_FAIL,
  system.getMenuTree
);

export const setActiveGroup = group => ({ type: SET_ACTIVE_GROUP, group });
export const setActiveItem = item => ({ type: SET_ACTIVE_ITEM, item });
export const setDefaultShowGroup = group => ({ type: SET_DEFAULT_SHOW_GROUP, group });

const initialState = { menuTree: null, activeGroup: null, activeItem: null, defaultShowGroup: null };

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MENU_TREE_SUCCESS:
      return { ...state, menuTree: action.data };
    case SET_ACTIVE_GROUP:
      return { ...state, activeGroup: action.group };
    case SET_ACTIVE_ITEM:
      return { ...state, activeItem: action.item };
    case SET_DEFAULT_SHOW_GROUP:
      return { ...state, defaultShowGroup: action.group };
    case GET_MENU_TREE_FAIL:
      toastError(action.error);
      return state;
    default:
      return state;
  }
};
