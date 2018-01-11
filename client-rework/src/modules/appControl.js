import { actionCreator } from 'helpers';
import { system } from 'services';
import { toastError } from 'components/Toast';

const GET_MENU_TREE_START = 'page/GET_MENU_TREE';
const GET_MENU_TREE_SUCCESS = 'page/GET_MENU_TREE_SUCCESS';
const GET_MENU_TREE_FAIL = 'page/GET_MENU_TREE_FAIL';

export const getMenuTree = actionCreator(
  GET_MENU_TREE_START,
  GET_MENU_TREE_SUCCESS,
  GET_MENU_TREE_FAIL,
  system.getMenuTree
);

const initialState = { menuTree: null };

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MENU_TREE_SUCCESS:
      return { ...state, menuTree: action.data };
    case GET_MENU_TREE_FAIL:
      toastError(action.error);
      return state;
    default:
      return state;
  }
};
