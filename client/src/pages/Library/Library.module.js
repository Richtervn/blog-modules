import { actionCreator } from 'helpers';
import services from './Library.services';

import { getMenuTree } from 'pages/appControl';

// const GET_BOOKSHELF = 'library/GET_BOOKSHELF';
export const ADD_BOOKSHELF = 'library/ADD_BOOKSHELF';
export const EDIT_BOOKSHELF = 'library/EDIT_BOOKSHELF';

const SET_BOOKSHELF = 'library/SET_BOOKSHELF';

export const addBookshelf = formBody =>
  actionCreator(ADD_BOOKSHELF, services.addBookshelf, {
    payload: formBody,
    onAfterSuccess({ dispatch }) {
      dispatch(getMenuTree());
    }
  })();
export const editBookshelf = formBody =>
  actionCreator(EDIT_BOOKSHELF, services.editBookshelf, {
    payload: formBody,
    onAfterSuccess({ dispatch }) {
      dispatch(getMenuTree());
    }
  })();

export const setBookshelf = bookshelf => ({ type: SET_BOOKSHELF, bookshelf });

const initialState = {
  bookshelf: {},
  books: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKSHELF:
      return { ...state, bookshelf: action.bookshelf };
    default:
      return state;
  }
};
