import actionCreator from 'factories/actionCreator';
import { darksteam97d99i } from 'services';

const ADMIN_SET_FOCUS_ACCOUNT = 'darksteam97d99i/ADMIN_SET_FOCUS_ACCOUNT';
const ADMIN_SET_FOCUS_CHARACTER = 'darksteam97d99i/ADMIN_SET_FOCUS_CHARACTER';

const ADMIN_GET_ACCOUNTS_START = 'darksteam97d99i/ADMIN_GET_ACCOUNTS_START';
const ADMIN_GET_ACCOUNTS_SUCCESS = 'darksteam97d99i/ADMIN_GET_ACCOUNTS_SUCCESS';
const ADMIN_GET_ACCOUNTS_FAIL = 'darksteam97d99i/ADMIN_GET_ACCOUNTS_FAIL';
const ADMIN_EDIT_ACCOUNT_START = 'darksteam97d99i/ADMIN_EDIT_ACCOUNT_START';
const ADMIN_EDIT_ACCOUNT_SUCCESS = 'darksteam97d99i/ADMIN_EDIT_ACCOUNT_SUCCESS';
const ADMIN_EDIT_ACCOUNT_FAIL = 'darksteam97d99i/ADMIN_EDIT_ACCOUNT_FAIL';
const ADMIN_DELETE_ACCOUNT_START = 'darksteam97d99i/ADMIN_DELETE_ACCOUNT_START';
const ADMIN_DELETE_ACCOUNT_SUCCESS = 'darksteam97d99i/ADMIN_DELETE_ACCOUNT_SUCCESS';
const ADMIN_DELETE_ACCOUNT_FAIL = 'darksteam97d99i/ADMIN_DELETE_ACCOUNT_FAIL';

const ADMIN_GET_CHARACTERS_START = 'darksteam97d99i/ADMIN_GET_CHARACTERS_START';
const ADMIN_GET_CHARACTERS_SUCCESS = 'darksteam97d99i/ADMIN_GET_CHARACTERS_SUCCESS';
const ADMIN_GET_CHARACTERS_FAIL = 'darksteam97d99i/ADMIN_GET_CHARACTERS_FAIL';
const ADMIN_EDIT_CHARACTER_START = 'darksteam97d99i/ADMIN_EDIT_CHARACTER_START';
const ADMIN_EDIT_CHARACTER_SUCCESS = 'darksteam97d99i/ADMIN_EDIT_CHARACTER_SUCCESS';
const ADMIN_EDIT_CHARACTER_FAIL = 'darksteam97d99i/ADMIN_EDIT_CHARACTER_FAIL';
const ADMIN_DELETE_CHARACTER_START = 'darksteam97d99i/ADMIN_DELETE_CHARACTER_START';
const ADMIN_DELETE_CHARACTER_SUCCESS = 'darksteam97d99i/ADMIN_DELETE_CHARACTER_SUCCESS';
const ADMIN_DELETE_CHARACTER_FAIL = 'darksteam97d99i/ADMIN_DELETE_CHARACTER_FAIL';

export const setFocusAccount = account => ({ type: ADMIN_SET_FOCUS_ACCOUNT, account });
export const getAccounts = query =>
  actionCreator(
    ADMIN_GET_ACCOUNTS_START,
    ADMIN_GET_ACCOUNTS_SUCCESS,
    ADMIN_GET_ACCOUNTS_FAIL,
    darksteam97d99i.adminGetAccounts,
    query
  )();
export const editAccount = formBody =>
  actionCreator(
    ADMIN_EDIT_ACCOUNT_START,
    ADMIN_EDIT_ACCOUNT_SUCCESS,
    ADMIN_EDIT_ACCOUNT_FAIL,
    darksteam97d99i.adminEditAccount,
    formBody
  )();
export const deleteAccount = id =>
  actionCreator(
    ADMIN_DELETE_ACCOUNT_START,
    ADMIN_DELETE_ACCOUNT_SUCCESS,
    ADMIN_DELETE_ACCOUNT_FAIL,
    darksteam97d99i.adminDeleteAccount,
    id
  )();

export default (
  state = {
    accounts: null,
    focusAccount: {},
    characters: null,
    focusCharacter: {}
  },
  action
) => {
  switch (action.type) {
    case ADMIN_GET_ACCOUNTS_SUCCESS:
      return { ...state, accounts: action.data, focusAccount: action.data[0] };
    case ADMIN_SET_FOCUS_ACCOUNT:
      return { ...state, focusAccount: action.account };
    case ADMIN_EDIT_ACCOUNT_SUCCESS:
      return {
        ...state,
        accounts: state.accounts.map(account => {
          if (account.memb___id == action.data.memb___id) {
            return action.data;
          }
          return account;
        }),
        focusAccount: action.data
      };
    case ADMIN_DELETE_ACCOUNT_SUCCESS:
      return {
        ...state,
        accounts: state.accounts.filter(account => account.memb___id != action.data.id),
        focusAccount: {}
      };
    case ADMIN_GET_CHARACTERS_SUCCESS:
      return { ...state, characters: action.data, focusCharacter: action.data[0] };
    default:
      return state;
  }
};
