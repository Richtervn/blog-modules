import { profile } from 'services';
import actionCreator from 'factories/actionCreator';

const GET_MENU_START = 'profile/GET_MENU_START';
const GET_MENU_SUCCESS = 'profile/GET_MENU_SUCCESS';
const GET_MENU_FAIL = 'profile/GET_MENU_FAIL';

export const SET_ACTIVE_GROUP = 'profile/SET_ACTIVE_GROUP';
export const SET_DEACTIVE_GROUP = 'profile/SET_DEACTIVE_GROUP';
export const SET_ACTIVE_ITEM = 'profile/SET_ACTIVE_ITEM';

export const setActiveGroup = name => ({ type: SET_ACTIVE_GROUP, name });
export const setDeactiveGroup = () => ({ type: SET_DEACTIVE_GROUP });
export const setActiveItem = name => ({ type: SET_ACTIVE_ITEM, name });

export const getMenu = actionCreator(GET_MENU_START, GET_MENU_SUCCESS, GET_MENU_FAIL, profile.getMenu);

export default (state = { menu: null, activeGroup: null, activeItem: null }, action) => {
  switch (action.type) {
    case GET_MENU_SUCCESS:
      console.log(action.data);
      return { ...state, menu: action.data };
    case SET_ACTIVE_GROUP:
      return { ...state, activeGroup: action.name };
    case SET_ACTIVE_ITEM:
      return { ...state, activeItem: action.name };
    case SET_DEACTIVE_GROUP:
      return { ...state, activeGroup: null };
    default:
      return state;
  }
};
