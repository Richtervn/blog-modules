import actionCreator from 'factories/actionCreator';
import { darksteam97d99i } from 'services';

const ADMIN_SET_FOCUS_ACCOUNT = 'darksteam97d99i/admin/ADMIN_SET_FOCUS_ACCOUNT';
const ADMIN_SET_FOCUS_CHARACTER = 'darksteam97d99i/admin/ADMIN_SET_FOCUS_CHARACTER';
const ADMIN_SET_FOCUS_WEB_SHOP_CATEGORY = 'darksteam97d99i/admin/ADMIN_SET_FOCUS_WEB_SHOP_CATEGORY';

const ADMIN_ADD_ACCOUNT_START = 'darksteam97d99i/admin/ADMIN_ADD_ACCOUNT_START';
const ADMIN_ADD_ACCOUNT_SUCCESS = 'darksteam97d99i/admin/ADMIN_ADD_ACCOUNT_SUCCESS';
const ADMIN_ADD_ACCOUNT_FAIL = 'darksteam97d99i/admin/ADMIN_ADD_ACCOUNT_FAIL';
const ADMIN_GET_ACCOUNTS_START = 'darksteam97d99i/admin/ADMIN_GET_ACCOUNTS_START';
const ADMIN_GET_ACCOUNTS_SUCCESS = 'darksteam97d99i/admin/ADMIN_GET_ACCOUNTS_SUCCESS';
const ADMIN_GET_ACCOUNTS_FAIL = 'darksteam97d99i/admin/ADMIN_GET_ACCOUNTS_FAIL';
const ADMIN_EDIT_ACCOUNT_START = 'darksteam97d99i/admin/ADMIN_EDIT_ACCOUNT_START';
const ADMIN_EDIT_ACCOUNT_SUCCESS = 'darksteam97d99i/admin/ADMIN_EDIT_ACCOUNT_SUCCESS';
const ADMIN_EDIT_ACCOUNT_FAIL = 'darksteam97d99i/admin/ADMIN_EDIT_ACCOUNT_FAIL';
const ADMIN_DELETE_ACCOUNT_START = 'darksteam97d99i/admin/ADMIN_DELETE_ACCOUNT_START';
const ADMIN_DELETE_ACCOUNT_SUCCESS = 'darksteam97d99i/admin/ADMIN_DELETE_ACCOUNT_SUCCESS';
const ADMIN_DELETE_ACCOUNT_FAIL = 'darksteam97d99i/admin/ADMIN_DELETE_ACCOUNT_FAIL';

const ADMIN_ADD_CHARACTER_START = 'darksteam97d99i/admin/ADMIN_ADD_CHARACTER_START';
const ADMIN_ADD_CHARACTER_SUCCESS = 'darksteam97d99i/admin/ADMIN_ADD_CHARACTER_SUCCESS';
const ADMIN_ADD_CHARACTER_FAIL = 'darksteam97d99i/admin/ADMIN_ADD_CHARACTER_FAIL';
const ADMIN_GET_CHARACTERS_START = 'darksteam97d99i/admin/ADMIN_GET_CHARACTERS_START';
const ADMIN_GET_CHARACTERS_SUCCESS = 'darksteam97d99i/admin/ADMIN_GET_CHARACTERS_SUCCESS';
const ADMIN_GET_CHARACTERS_FAIL = 'darksteam97d99i/admin/ADMIN_GET_CHARACTERS_FAIL';
const ADMIN_EDIT_CHARACTER_START = 'darksteam97d99i/admin/ADMIN_EDIT_CHARACTER_START';
const ADMIN_EDIT_CHARACTER_SUCCESS = 'darksteam97d99i/admin/ADMIN_EDIT_CHARACTER_SUCCESS';
const ADMIN_EDIT_CHARACTER_FAIL = 'darksteam97d99i/admin/ADMIN_EDIT_CHARACTER_FAIL';
const ADMIN_DELETE_CHARACTER_START = 'darksteam97d99i/admin/ADMIN_DELETE_CHARACTER_START';
const ADMIN_DELETE_CHARACTER_SUCCESS = 'darksteam97d99i/admin/ADMIN_DELETE_CHARACTER_SUCCESS';
const ADMIN_DELETE_CHARACTER_FAIL = 'darksteam97d99i/admin/ADMIN_DELETE_CHARACTER_FAIL';

const ADMIN_GET_BANKS_START = 'darksteam97d99i/admin/ADMIN_GET_BANKS_START';
const ADMIN_GET_BANKS_SUCCESS = 'darksteam97d99i/admin/ADMIN_GET_BANKS_SUCCESS';
const ADMIN_GET_BANKS_FAIL = 'darksteam97d99i/admin/ADMIN_GET_BANKS_FAIL';
const ADMIN_EDIT_BANK_START = 'darksteam97d99i/admin/ADMIN_EDIT_BANK_START';
const ADMIN_EDIT_BANK_SUCCESS = 'darksteam97d99i/admin/ADMIN_EDIT_BANK_SUCCESS';
const ADMIN_EDIT_BANK_FAIL = 'darksteam97d99i/admin/ADMIN_EDIT_BANK_FAIL';

const ADMIN_GET_CREDITS_START = 'darksteam97d99i/admin/ADMIN_GET_CREDITS_START';
const ADMIN_GET_CREDITS_SUCCESS = 'darksteam97d99i/admin/ADMIN_GET_CREDITS_SUCCESS';
const ADMIN_GET_CREDITS_FAIL = 'darksteam97d99i/admin/ADMIN_GET_CREDITS_FAIL';
const ADMIN_EDIT_CREDIT_START = 'darksteam97d99i/admin/ADMIN_EDIT_CREDIT_START';
const ADMIN_EDIT_CREDIT_SUCCESS = 'darksteam97d99i/admin/ADMIN_EDIT_CREDIT_SUCCESS';
const ADMIN_EDIT_CREDIT_FAIL = 'darksteam97d99i/admin/ADMIN_EDIT_CREDIT_FAIL';

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
export const getBankings = actionCreator(
  ADMIN_GET_BANKS_START,
  ADMIN_GET_BANKS_SUCCESS,
  ADMIN_GET_BANKS_FAIL,
  darksteam97d99i.adminGetBankings
);
export const getCredits = actionCreator(
  ADMIN_GET_CREDITS_START,
  ADMIN_GET_CREDITS_SUCCESS,
  ADMIN_GET_CREDITS_FAIL,
  darksteam97d99i.adminGetCredits
);

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
export const editBanking = formBody =>
  actionCreator(
    ADMIN_EDIT_BANK_START,
    ADMIN_EDIT_BANK_SUCCESS,
    ADMIN_EDIT_BANK_FAIL,
    darksteam97d99i.adminEditBanking,
    formBody
  )();
export const editCredits = formBody =>
  actionCreator(
    ADMIN_EDIT_CREDIT_START,
    ADMIN_EDIT_CREDIT_SUCCESS,
    ADMIN_EDIT_CREDIT_FAIL,
    darksteam97d99i.adminEditCredit,
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
    focusCharacter: {},
    bankings: null,
    credits: null
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

    case ADMIN_GET_BANKS_SUCCESS:
      return { ...state, bankings: action.data };
    case ADMIN_GET_CREDITS_SUCCESS:
      return { ...state, credits: action.data };
    case ADMIN_EDIT_BANK_SUCCESS:
      return {
        ...state,
        bankings: state.bankings
          .map(bank => {
            if (bank.memb___id == action.data.memb___id) {
              return action.data;
            }
            return bank;
          })
          .slice(0)
      };
    case ADMIN_EDIT_CREDIT_SUCCESS:
      return {
        ...state,
        credits: state.credits
          .map(credit => {
            if (credit.memb___id == action.data.memb___id) {
              return action.data;
            }
            return credit;
          })
          .slice(0)
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
