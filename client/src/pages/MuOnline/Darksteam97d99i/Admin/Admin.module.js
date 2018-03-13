import { actionCreator } from 'helpers';
import services from '../Darksteam97d99i.services';
import { toastError, toastStrong } from 'common/Toast';

const SET_FOCUS_ACCOUNT = 'darksteam97d99i/Admin/SET_FOCUS_ACCOUNT';
// const SET_FOCUS_CHARACTER = 'darksteam97d99i/Admin/SET_FOCUS_CHARACTER';

const GET_ACCOUNTS = 'darksteam97d99i/Admin/GET_ACCOUNTS';
const ADD_ACCOUNT = 'darksteam97d99i/Admin/ADD_ACCOUNT';
const EDIT_ACCOUNT = 'darksteam97d99i/Admin/EDIT_ACCOUNT';
const DELETE_ACCOUNT = 'darksteam97d99i/Admin/DELETE_ACCOUNT';
const SEARCH_ACCOUNT = 'darksteam97d99i/Admin/SEARCH_ACCOUNT';

// const GET_CHARACTERS = 'darksteam97d99i/Admin/GET_CHARACTERS';
// const ADD_CHARACTER = 'darksteam97d99i/Admin/ADD_CHARACTER';
// const EDIT_CHARACTER = 'darksteam97d99i/Admin/EDIT_CHARACTER';
// const DELETE_CHARACTER = 'darksteam97d99i/Admin/DELETE_CHARACTER';
// const SEARCH_CHARACTER = 'darksteam97d99i/Admin/SEARCH_CHARACTER';

export const setFocusAccount = id => ({ type: SET_FOCUS_ACCOUNT, id });

export const getAccounts = actionCreator(GET_ACCOUNTS, services.adminGetAccounts);
export const searchAccounts = query => actionCreator(SEARCH_ACCOUNT, services.adminGetAccounts, query)();
export const addAccount = formBody => actionCreator(ADD_ACCOUNT, services.adminAddAccount, formBody)();
export const editAccount = formBody => actionCreator(EDIT_ACCOUNT, services.adminEditAccount, formBody)();
export const deleteAccount = id => actionCreator(DELETE_ACCOUNT, services.adminDeleteAccount, id)();

const initialState = {
  accounts: null,
  focusAccount: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FOCUS_ACCOUNT:
      return { ...state, focusAccount: action.id };

    case `${GET_ACCOUNTS}_SUCCESS`:
      return { ...state, accounts: action.data };
    case `${SEARCH_ACCOUNT}_SUCCESS`:
      return { ...state, accounts: action.data };
    case `${ADD_ACCOUNT}_SUCCESS`:
      state.accounts.push(action.data);
      toastStrong(action.data.memb___id, 'Added');
      return { ...state, accounts: state.accounts.slice(0) };
    case `${EDIT_ACCOUNT}_SUCCESS`:
      state.accounts = state.accounts.map(account => {
        if (account.memb___id === action.data.memb___id) {
          return action.data;
        }
        return account;
      });
      toastStrong(action.data.memb___id, 'Edited');
      return { ...state, accounts: state.accounts.slice(0) };
    case `${DELETE_ACCOUNT}_SUCCESS`:
      state.accounts = state.accounts.filter(account => account.memb___id !== action.data.id);
      return { ...state, accounts: state.accounts.slice(0) };

    case `${GET_ACCOUNTS}_FAIL`:
    case `${ADD_ACCOUNT}_FAIL`:
    case `${EDIT_ACCOUNT}_FAIL`:
    case `${DELETE_ACCOUNT}_FAIL`:
    case `${SEARCH_ACCOUNT}_FAIL`:
      toastError(action.error);
      return state;
    default:
      return state;
  }
};
