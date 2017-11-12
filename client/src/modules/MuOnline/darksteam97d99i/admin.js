import actionCreator from 'factories/actionCreator';
import { darksteam97d99i } from 'services';

const ADMIN_SET_FOCUS_ACCOUNT = 'darksteam97d99i/ADMIN_SET_FOCUS_ACCOUNT';
const ADMIN_SET_FOCUS_CHARACTER = 'darksteam97d99i/ADMIN_SET_FOCUS_CHARACTER';

const ADMIN_ADD_ACCOUNT_START = 'darksteam97d99i/ADMIN_ADD_ACCOUNT_START';
const ADMIN_ADD_ACCOUNT_SUCCESS = 'darksteam97d99i/ADMIN_ADD_ACCOUNT_SUCCESS';
const ADMIN_ADD_ACCOUNT_FAIL = 'darksteam97d99i/ADMIN_ADD_ACCOUNT_FAIL';
const ADMIN_GET_ACCOUNTS_START = 'darksteam97d99i/ADMIN_GET_ACCOUNTS_START';
const ADMIN_GET_ACCOUNTS_SUCCESS = 'darksteam97d99i/ADMIN_GET_ACCOUNTS_SUCCESS';
const ADMIN_GET_ACCOUNTS_FAIL = 'darksteam97d99i/ADMIN_GET_ACCOUNTS_FAIL';
const ADMIN_EDIT_ACCOUNT_START = 'darksteam97d99i/ADMIN_EDIT_ACCOUNT_START';
const ADMIN_EDIT_ACCOUNT_SUCCESS = 'darksteam97d99i/ADMIN_EDIT_ACCOUNT_SUCCESS';
const ADMIN_EDIT_ACCOUNT_FAIL = 'darksteam97d99i/ADMIN_EDIT_ACCOUNT_FAIL';
const ADMIN_DELETE_ACCOUNT_START = 'darksteam97d99i/ADMIN_DELETE_ACCOUNT_START';
const ADMIN_DELETE_ACCOUNT_SUCCESS = 'darksteam97d99i/ADMIN_DELETE_ACCOUNT_SUCCESS';
const ADMIN_DELETE_ACCOUNT_FAIL = 'darksteam97d99i/ADMIN_DELETE_ACCOUNT_FAIL';

const ADMIN_ADD_CHARACTER_START = 'darksteam97d99i/ADMIN_ADD_CHARACTER_START';
const ADMIN_ADD_CHARACTER_SUCCESS = 'darksteam97d99i/ADMIN_ADD_CHARACTER_SUCCESS';
const ADMIN_ADD_CHARACTER_FAIL = 'darksteam97d99i/ADMIN_ADD_CHARACTER_FAIL';
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
export const setFocusCharacter = character => ({ type: ADMIN_SET_FOCUS_CHARACTER, character });

export const getAccounts = query =>
  actionCreator(
    ADMIN_GET_ACCOUNTS_START,
    ADMIN_GET_ACCOUNTS_SUCCESS,
    ADMIN_GET_ACCOUNTS_FAIL,
    darksteam97d99i.adminGetAccounts,
    query
  )();
export const getCharacters = query =>
  actionCreator(
    ADMIN_GET_CHARACTERS_START,
    ADMIN_GET_CHARACTERS_SUCCESS,
    ADMIN_GET_CHARACTERS_FAIL,
    darksteam97d99i.adminGetCharacters,
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
export const editCharacter = formBody =>
  actionCreator(
    ADMIN_EDIT_CHARACTER_START,
    ADMIN_EDIT_CHARACTER_SUCCESS,
    ADMIN_EDIT_CHARACTER_FAIL,
    darksteam97d99i.adminEditCharacter,
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
export const deleteCharacter = id =>
  actionCreator(
    ADMIN_DELETE_CHARACTER_START,
    ADMIN_DELETE_CHARACTER_SUCCESS,
    ADMIN_DELETE_CHARACTER_FAIL,
    darksteam97d99i.adminDeleteCharacter,
    id
  )();

export const addAcount = formBody =>
  actionCreator(
    ADMIN_ADD_ACCOUNT_START,
    ADMIN_ADD_ACCOUNT_SUCCESS,
    ADMIN_ADD_ACCOUNT_FAIL,
    darksteam97d99i.adminAddAccount,
    formBody
  )();
export const addCharacter = formBody =>
  actionCreator(
    ADMIN_ADD_CHARACTER_START,
    ADMIN_ADD_CHARACTER_SUCCESS,
    ADMIN_ADD_CHARACTER_FAIL,
    darksteam97d99i.adminAddCharacter,
    formBody
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
      return {
        ...state,
        accounts: action.data.slice(0),
        focusAccount: state.focusAccount.memb___id ? action.data[0] : {}
      };
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
    case ADMIN_ADD_ACCOUNT_SUCCESS:
      state.accounts.push(action.data);
      return { ...state, accounts: state.accounts.slice(0) };

    case ADMIN_GET_CHARACTERS_SUCCESS:
      return {
        ...state,
        characters: action.data.slice(0),
        focusCharacter: state.focusCharacter.Name ? action.data[0] : {}
      };
    case ADMIN_SET_FOCUS_CHARACTER:
      return { ...state, focusCharacter: action.character };
    case ADMIN_EDIT_CHARACTER_SUCCESS:
      return {
        ...state,
        characters: state.characters.map(character => {
          if (character.Name == action.data.Name) {
            return action.data;
          }
          return character;
        })
      };
    case ADMIN_ADD_CHARACTER_SUCCESS:
      state.characters.push(action.data);
      return { ...state, characters: state.characters.slice(0) };
    case ADMIN_DELETE_CHARACTER_SUCCESS:
      return {
        ...state,
        characters: state.characters.filter(character => character.Name != action.data.id),
        focusCharacter: {}
      };

    case ADMIN_DELETE_ACCOUNT_FAIL:
    case ADMIN_DELETE_CHARACTER_FAIL:
    case ADMIN_GET_ACCOUNTS_FAIL:
    case ADMIN_GET_CHARACTERS_FAIL:
    case ADMIN_ADD_ACCOUNT_FAIL:
    case ADMIN_ADD_CHARACTER_FAIL:
    case ADMIN_EDIT_ACCOUNT_FAIL:
    case ADMIN_EDIT_CHARACTER_FAIL:
      console.log(action);
      return state;
    default:
      return state;
  }
};
