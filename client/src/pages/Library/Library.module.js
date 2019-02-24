import { actionCreator } from 'helpers';
import services from './Library.services';

import { getMenuTree } from 'pages/appControl';

const ADD_BOOKSHELF = 'library/ADD_BOOKSHELF';
const EDIT_BOOKSHELF = 'library/EDIT_BOOKSHELF';
const GET_BOOKSHELF = 'library/GET_BOOKSHELF';
const DELETE_BOOKSHELF = 'library/DELETE_BOOKSHELF';
const ADD_BOOK = 'library/ADD_BOOK';
const EDIT_BOOK = 'library/EDIT_BOOK';
const DELETE_BOOK = 'library/DELETE_BOOK';

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
export const deleteBookshelf = id =>
  actionCreator(DELETE_BOOKSHELF, services.deleteBookshelf, {
    payload: id,
    onAfterSuccess({ dispatch }) {
      dispatch(getMenuTree());
    }
  })();
export const getBookshelf = title => actionCreator(GET_BOOKSHELF, services.getBookshelf, { payload: title })();
export const addBook = formBody => actionCreator(ADD_BOOK, services.addBook, { payload: formBody })();
export const editBook = formBody => actionCreator(EDIT_BOOK, services.editBook, { payload: formBody })();
export const deleteBook = id => actionCreator(DELETE_BOOK, services.deleteBook, { payload: id })();

export const setBookshelf = bookshelf => ({ type: SET_BOOKSHELF, bookshelf });

const initialState = {
  bookshelf: {},
  books: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${GET_BOOKSHELF}_SUCCESS`:
      console.log(action.payload);
      return { ...state, books: action.payload.books };
    case `${ADD_BOOK}_SUCCESS`:
      state.books.push(action.payload);
      return { ...state, books: state.books.slice(0) };
    case `${EDIT_BOOK}_SUCCESS`:
      state.books = state.books.map(book => {
        if (parseInt(book._id, 10) === parseInt(action.payload._id, 10)) {
          return action.payload;
        }
        return book;
      });
      return { ...state, books: state.books.slice(0) };
    case `${DELETE_BOOK}_SUCCESS`:
      state.books = state.books.filter(book => parseInt(book._id, 10) !== parseInt(action.payload._id, 10));
      return { ...state, books: state.books.slice(0) };
    case SET_BOOKSHELF:
      return { ...state, bookshelf: action.bookshelf };
    default:
      return state;
  }
};
