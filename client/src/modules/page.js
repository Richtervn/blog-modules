import { system } from 'services';
import actionCreator from 'factories/actionCreator';
import { toast } from 'react-toastify';

import { SUBMIT_ADD_FLASH_FORM_SUCCESS } from 'modules/flashGame';

export const SET_ACTIVE_GROUP = 'page/SET_ACTIVE_GROUP';
export const SET_DEACTIVE_GROUP = 'page/SET_DEACTIVE_GROUP';
export const SET_ACTIVE_ITEM = 'page/SET_ACTIVE_ITEM';

const GET_MENU_TREE_START = 'page/GET_MENU_TREE';
const GET_MENU_TREE_SUCCESS = 'page/GET_MENU_TREE_SUCCESS';
const GET_MENU_TREE_FAIL = 'page/GET_MENU_TREE_FAIL';

export const setActiveGroup = name => ({ type: SET_ACTIVE_GROUP, name });
export const setDeactiveGroup = () => ({ type: SET_DEACTIVE_GROUP });
export const setActiveItem = name => ({ type: SET_ACTIVE_ITEM, name });

export const getMenuTree = actionCreator(
  GET_MENU_TREE_START,
  GET_MENU_TREE_SUCCESS,
  GET_MENU_TREE_FAIL,
  system.getMenu
);

const addModalList = {
  'Flash Games': 'addFlashGameModal'
};

const quotes = {
  Home: {
    quote: "There's no place like home. There's no place like HOME!!!",
    author: 'Breaking Benjamin - Home'
  },
  'Flash Games': {
    quote: 'You want to share what you have been through',
    author: 'Linkin Park - Points of Authority'
  },
  Collections: {
    quote: "You're in quest for more to find the core. Your journey still ain't over",
    author: 'Avantasia - In Quest For'
  },
  Games: {
    quote: 'Gaming is not a crime',
    author: 'DJ GEX - Gaming is not a crime'
  },
  'Mu Online': {
    quote: 'Take a look to the sky just before you die',
    author: 'Metallica - For Whom The Bell Tolls'
  },
  'Lineage II': {
    quote: "You're the ghost haunting through her heart",
    author: 'Within Temptation - Restless'
  },
  'Tools': {
    quote: "I'm just a dreamer who dreams of better days",
    author: 'Ozzy Osbourne - Dreamer'
  }
};

export default (
  state = {
    activeGroup: null,
    activeItem: null,
    menuTree: null,
    addModalId: null,
    name: 'HOME',
    quote: "There's no place like home. There's no place like HOME!!!",
    quoteAuthor: 'Breaking Benjamin - Home'
  },
  action
) => {
  switch (action.type) {
    case SET_ACTIVE_GROUP:
      return { ...state, activeGroup: action.name, addModalId: addModalList[action.name] };
    case SET_DEACTIVE_GROUP:
      return { ...state, activeGroup: null };
    case SET_ACTIVE_ITEM:
      const { activeGroup } = state;
      return {
        ...state,
        activeItem: action.name,
        name: activeGroup.toUpperCase(),
        quote: quotes[activeGroup].quote,
        quoteAuthor: quotes[activeGroup].author
      };
    case GET_MENU_TREE_SUCCESS:
      return { ...state, menuTree: action.data };
    case SUBMIT_ADD_FLASH_FORM_SUCCESS:
      return { ...state, menuTree: action.data.menu };
      
    case GET_MENU_TREE_FAIL:
      toast.error(`${action.error}`, {
        position: toast.POSITION.TOP_LEFT,
        className: 'toast-error'
      });
      return state;
    default:
      return state;
  }
};
