import actionCreator from 'factories/actionCreator';
import { darksteam97d99i } from 'services';

const ADMIN_SET_FOCUS_ACCOUNT = 'darksteam97d99i/ADMIN_SET_FOCUS_ACCOUNT';

const ADMIN_GET_ACCOUNTS_START = 'darksteam97d99i/ADMIN_GET_ACCOUNTS_START';
const ADMIN_GET_ACCOUNTS_SUCCESS = 'darksteam97d99i/ADMIN_GET_ACCOUNTS_SUCCESS';
const ADMIN_GET_ACCOUNTS_FAIL = 'darksteam97d99i/ADMIN_GET_ACCOUNTS_FAIL';

export const setFocusAccount = account => ({ type: ADMIN_SET_FOCUS_ACCOUNT, account });
export const getAccounts = query =>
  actionCreator(
    ADMIN_GET_ACCOUNTS_START,
    ADMIN_GET_ACCOUNTS_SUCCESS,
    ADMIN_GET_ACCOUNTS_FAIL,
    darksteam97d99i.adminGetAccounts,
    query
  )();

export default (state = {
  accounts: null,
  focusAccount: {}
}, action) => {
  switch (action.type) {
    case ADMIN_GET_ACCOUNTS_SUCCESS:
      return {...state, accounts: action.data, focusAccount: action.data[0]};
    case ADMIN_SET_FOCUS_ACCOUNT:
      return {...state, focusAccount: action.account}
    default:

      return state;
  }
};
