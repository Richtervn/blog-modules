import { actionCreator } from 'helpers';
import services from '../Darksteam97d99i.services';
import { toastError, toastStrong } from 'common/Toast';

export const adminPages = [
  { name: 'Accounts Manager', icon: 'user', route: 'accounts_manager' },
  { name: 'Characters Manager', icon: 'users', route: 'characters_manager' }
];

const GET_ACCOUNTS = 'darksteam97d99i/Admin/GET_ACCOUNTS';
const GET_ACCOUNT_DETAIL = 'darksteam97d99i/Admin/GET_ACCOUNT_DETAIL';
const ADD_ACCOUNT = 'darksteam97d99i/Admin/ADD_ACCOUNT';
const EDIT_ACCOUNT = 'darksteam97d99i/Admin/EDIT_ACCOUNT';
const DELETE_ACCOUNT = 'darksteam97d99i/Admin/DELETE_ACCOUNT';
const SEARCH_ACCOUNT = 'darksteam97d99i/Admin/SEARCH_ACCOUNT';
const CLEAR_ACCOUNT_DETAIL = 'darksteam97d99i/Admin/CLEAR_ACCOUNT_DETAIL';

const GET_CHARACTERS = 'darksteam97d99i/Admin/GET_CHARACTERS';
const GET_CHARACTER_DETAIL = 'darksteam97d99i/Admin/GET_CHARACTER_DETAIL';
const ADD_CHARACTER = 'darksteam97d99i/Admin/ADD_CHARACTER';
const EDIT_CHARACTER = 'darksteam97d99i/Admin/EDIT_CHARACTER';
const DELETE_CHARACTER = 'darksteam97d99i/Admin/DELETE_CHARACTER';
const SEARCH_CHARACTER = 'darksteam97d99i/Admin/SEARCH_CHARACTER';
const CLEAR_CHARACTER_DETAIL = 'darksteam97d99i/Admin/CLEAR_CHARACTER_DETAIL';

export const getAccounts = actionCreator(GET_ACCOUNTS, services.adminGetAccounts);
export const getAccountDetail = id => actionCreator(GET_ACCOUNT_DETAIL, services.adminGetAccountDetail, id)();
export const searchAccounts = query => actionCreator(SEARCH_ACCOUNT, services.adminGetAccounts, query)();
export const addAccount = formBody => actionCreator(ADD_ACCOUNT, services.adminAddAccount, formBody)();
export const editAccount = formBody => actionCreator(EDIT_ACCOUNT, services.adminEditAccount, formBody)();
export const deleteAccount = id => actionCreator(DELETE_ACCOUNT, services.adminDeleteAccount, id)();
export const clearAccountDetail = () => ({ type: CLEAR_ACCOUNT_DETAIL });

export const getCharacters = actionCreator(GET_CHARACTERS, services.adminGetCharacters);
export const getCharacterDetail = id => actionCreator(GET_CHARACTER_DETAIL, services.adminGetCharacterDetail, id)();
export const searchCharacters = query => actionCreator(SEARCH_CHARACTER, services.adminGetCharacters, query)();
export const addCharacter = formBody => actionCreator(ADD_CHARACTER, services.adminAddCharacter, formBody)();
export const editCharacter = formBody => actionCreator(EDIT_ACCOUNT, services.adminEditCharacter, formBody)();
export const deleteCharacter = id => actionCreator(DELETE_CHARACTER, services.adminDeleteCharacter, id)();
export const clearCharacterDetail = () => ({ type: CLEAR_CHARACTER_DETAIL });

const initialState = {
  accounts: null,
  accountDetail: {},
  characters: null,
  characterDetail: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${GET_ACCOUNTS}_SUCCESS`:
      return { ...state, accounts: action.data };
    case `${GET_ACCOUNT_DETAIL}_SUCCESS`:
      return { ...state, accountDetail: action.data };
    case `${SEARCH_ACCOUNT}_SUCCESS`:
      return { ...state, accounts: action.data };
    case `${ADD_ACCOUNT}_SUCCESS`:
      state.accounts.push(action.data.memb___id);
      toastStrong(action.data.memb___id, 'Added');
      return { ...state, accounts: state.accounts.slice(0) };
    case `${EDIT_ACCOUNT}_SUCCESS`:
      toastStrong(action.data.memb___id, 'Edited');
      return { ...state, accountDetail: action.data };
    case `${DELETE_ACCOUNT}_SUCCESS`:
      state.accounts = state.accounts.filter(account => account.memb___id !== action.data.id);
      return { ...state, accounts: state.accounts.slice(0), accountDetail: {} };
    case CLEAR_ACCOUNT_DETAIL:
      return { ...state, accountDetail: {} };

    case `${GET_CHARACTERS}_SUCCESS`:
      return { ...state, characters: action.data };
    case `${GET_CHARACTER_DETAIL}_SUCCESS`:
      return { ...state, characterDetail: action.data };
    case `${SEARCH_CHARACTER}_SUCCESS`:
      return { ...state, characters: action.data };
    case `${ADD_CHARACTER}_SUCCESS`:
      state.characters.push(action.data);
      toastStrong(action.data.Name, 'Added');
      return { ...state, characters: state.characters.slice(0) };
    case `${EDIT_CHARACTER}_SUCCESS`:
      toastStrong(action.data.Name, 'Edited');
      return { ...state, characterDetail: action.data };
    case `${DELETE_CHARACTER}_SUCCESS`:
      state.characters = state.characters.filter(char => char.Name !== action.data.id);
      return { ...state, characters: state.characters.slice(0), characterDetail: {} };
    case CLEAR_CHARACTER_DETAIL:
      return { ...state, characterDetail: {} };

    case `${GET_ACCOUNTS}_FAIL`:
    case `${ADD_ACCOUNT}_FAIL`:
    case `${EDIT_ACCOUNT}_FAIL`:
    case `${DELETE_ACCOUNT}_FAIL`:
    case `${SEARCH_ACCOUNT}_FAIL`:
    case `${GET_ACCOUNT_DETAIL}_FAIL`:
    case `${GET_CHARACTERS}_FAIL`:
    case `${ADD_CHARACTER}_FAIL`:
    case `${EDIT_CHARACTER}_FAIL`:
    case `${DELETE_CHARACTER}_FAIL`:
    case `${SEARCH_CHARACTER}_FAIL`:
      toastError(action.error);
      return state;
    default:
      return state;
  }
};
