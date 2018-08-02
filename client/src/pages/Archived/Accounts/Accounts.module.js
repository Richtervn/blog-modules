import { actionCreator } from 'helpers';
import { toastStrong } from 'common/Toast';

import services from './Accounts.services';

const VERIFY = 'accounts/VERIFY';
const GET_ALL = 'accounts/GET_ALL';
const EDIT = 'accounts/EDIT';
const SEARCH = 'accounts/SEARCH';
const ADD = 'accounts/ADD';
const SET_FOCUS = 'accounts/SET_FOCUS';

const getAccounts = () => actionCreator(GET_ALL, services.getAll)();

export const verify = formBody =>
  actionCreator(VERIFY, services.verify, {
    payload: { formBody },
    onAfterSuccess({ dispatch }) {
      dispatch(getAccounts());
    }
  })();

export const add = formBody => actionCreator(ADD, services.add, { payload: { formBody } })();
export const edit = formBody => actionCreator(EDIT, services.edit, { payload: { formBody } })();
export const search = query => actionCreator(SEARCH, services.search, { payload: { query } })();

export const setFocus = id => ({ type: SET_FOCUS, id });

const initialState = {
  isVerify: false,
  accounts: null,
  focusAccount: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${GET_ALL}_SUCCESS`:
      return { ...state, accounts: action.payload };
    case `${VERIFY}_SUCCESS`:
      return { ...state, isVerify: true };
    case `${ADD}_SUCCESS`:
      state.accounts.push(action.payload);
      toastStrong(action.payload.SiteName, 'Added account for');
      return { ...state, accounts: state.accounts.slice(0) };
    case `${EDIT}_SUCCESS`:
      state.accounts = state.accounts.map(account => {
        if (account._id === action.payload._id) {
          return action.payload;
        }
        return account;
      });
      toastStrong(action.payload.SiteName, 'Edited account for');
      return { ...state, accounts: state.accounts.slice(0) };
    case `${SEARCH}_SUCCESS`:
      return { ...state, accounts: action.payload };
    case SET_FOCUS:
      return { ...state, focusAccount: action.id };
    default:
      return state;
  }
};
