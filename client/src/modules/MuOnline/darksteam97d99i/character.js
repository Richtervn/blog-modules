import actionCreator from 'factories/actionCreator';
import { darksteam97d99i } from 'services';
import { toast } from 'react-toastify';
import socket from 'factories/socketInstance';

import { LOGOUT } from './user';

const GET_CHARACTERS_START = 'darksteam97d99i/character/GET_CHARACTERS_START';
const GET_CHARACTERS_SUCCESS = 'darksteam97d99i/character/GET_CHARACTERS_SUCCESS';
const GET_CHARACTERS_FAIL = 'darksteam97d99i/character/GET_CHARACTERS_FAIL';

const SET_FOCUS_CHARACTER = 'darksteam97d99i/character/SET_FOCUS_CHARACTER';
const CLEAR_ADD_POINT_ERROR = 'darksteam97d99i/character/CLEAR_ADD_POINT_ERROR';
const CLEAR_RESET_ERROR = 'darksteam97d99i/character/CLEAR_RESET_ERROR';
const CLEAR_GRAND_RESET_ERROR = 'darksteam97d99i/character/CLEAR_GRAND_RESET_ERROR';
const CLEAR_RESET_QUEST_ERROR = 'darksteam97d99i/character/CLEAR_RESET_QUEST_ERROR';
const CLEAR_BANKING_ERROR = 'darksteam97d99i/character/CLEAR_BANKING_ERROR';

const ADD_POINT_START = 'darksteam97d99i/character/ADD_POINT_START';
export const ADD_POINT_SUCCESS = 'darksteam97d99i/character/ADD_POINT_SUCCESS';
const ADD_POINT_FAIL = 'darksteam97d99i/character/ADD_POINT_FAIL';

const RESET_START = 'darksteam97d99i/character/RESET_START';
export const RESET_SUCCESS = 'darksteam97d99i/character/RESET_SUCCESS';
const RESET_FAIL = 'darksteam97d99i/character/RESET_FAIL';

const GRAND_RESET_START = 'darksteam97d99i/character/GRAND_RESET_START';
export const GRAND_RESET_SUCCESS = 'darksteam97d99i/character/GRAND_RESET_SUCCESS';
const GRAND_RESET_FAIL = 'darksteam97d99i/character/GRAND_RESET_FAIL';

const RESET_QUEST_START = 'darksteam97d99i/character/RESET_QUEST_START';
export const RESET_QUEST_SUCCESS = 'darksteam97d99i/character/RESET_QUEST_SUCCESS';
const RESET_QUEST_FAIL = 'darksteam97d99i/character/RESET_QUEST_FAIL';

const DEPOSIT_START = 'darksteam97d99i/character/DEPOSIT_START';
export const DEPOSIT_SUCCESS = 'darksteam97d99i/character/DEPOSIT_SUCCESS';
const DEPOSIT_FAIL = 'darksteam97d99i/character/DEPOSIT_FAIL';

const WITHDRAW_START = 'darksteam97d99i/character/WITHDRAW_START';
export const WITHDRAW_SUCCESS = 'darksteam97d99i/character/WITHDRAW_SUCCESS';
const WITHDRAW_FAIL = 'darksteam97d99i/character/WITHDRAW_FAIL';

const LOAN_START = 'darksteam97d99i/character/LOAN_START';
export const LOAN_SUCCESS = 'darksteam97d99i/character/LOAN_SUCCESS';
const LOAN_FAIL = 'darksteam97d99i/character/LOAN_FAIL';

const TRANSFER_START = 'darksteam97d99i/character/TRANSFER_START';
export const TRANSFER_SUCCESS = 'darksteam97d99i/character/TRANSFER_SUCCESS';
const TRANSFER_FAIL = 'darksteam97d99i/character/TRANSFER_FAIL';

const BUY_CREDIT_START = 'darksteam97d99i/character/BUY_CREDIT_START';
export const BUY_CREDIT_SUCCESS = 'darksteam97d99i/character/BUY_CREDIT_SUCCESS';
const BUY_CREDIT_FAIL = 'darksteam97d99i/character/BUY_CREDIT_FAIL';

const GET_CHARACTER_INVENTORY_START = 'darksteam97d99i/GET_CHARACTER_INVENTORY_START';
const GET_CHARACTER_INVENTORY_SUCCESS = 'darksteam97d99i/character/GET_CHARACTER_INVENTORY_SUCCESS';
const GET_CHARACTER_INVENTORY_FAIL = 'darksteam97d99i/character/GET_CHARACTER_INVENTORY_FAIL';

const SELECT_INVENTORY_ITEM = 'darksteam97d99i/character/SELECT_INVENTORY_ITEM';

const UPGRADE_ITEM_START = 'darksteam97d99i/character/UPGRADE_ITEM_START';
export const UPGRADE_ITEM_SUCCESS = 'darksteam97d99i/character/UPGRADE_ITEM_SUCCESS';
const UPGRADE_ITEM_FAIL = 'darksteam97d99i/character/UPGRADE_ITEM_FAIL';

export const upgradeItem = body =>
  actionCreator(
    UPGRADE_ITEM_START,
    UPGRADE_ITEM_SUCCESS,
    UPGRADE_ITEM_FAIL,
    darksteam97d99i.upgradeItem,
    body
  )();

export const selectInventoryItem = (item, slot) => ({ type: SELECT_INVENTORY_ITEM, item, slot });

export const getInventory = characterName =>
  actionCreator(
    GET_CHARACTER_INVENTORY_START,
    GET_CHARACTER_INVENTORY_SUCCESS,
    GET_CHARACTER_INVENTORY_FAIL,
    darksteam97d99i.getCharacterInventory,
    characterName
  )();

export const getCharacters = id =>
  actionCreator(
    GET_CHARACTERS_START,
    GET_CHARACTERS_SUCCESS,
    GET_CHARACTERS_FAIL,
    darksteam97d99i.getCharacters,
    id
  )();

export const setFocusCharacter = character => ({ type: SET_FOCUS_CHARACTER, character });
export const clearAddPointError = () => ({ type: CLEAR_ADD_POINT_ERROR });
export const clearResetError = () => ({ type: CLEAR_RESET_ERROR });
export const clearGrandResetError = () => ({ type: CLEAR_GRAND_RESET_ERROR });
export const clearResetQuestError = () => ({ type: CLEAR_RESET_QUEST_ERROR });
export const clearBankingError = () => ({ type: CLEAR_BANKING_ERROR });

export const withdraw = query =>
  actionCreator(WITHDRAW_START, WITHDRAW_SUCCESS, WITHDRAW_FAIL, darksteam97d99i.withdraw, query)();

let amount;
export const loan = query => {
  amount = query.amount;
  return actionCreator(LOAN_START, LOAN_SUCCESS, LOAN_FAIL, darksteam97d99i.loan, query)();
};

export const buyCredit = query => {
  amount = query.amount;
  return actionCreator(
    BUY_CREDIT_START,
    BUY_CREDIT_SUCCESS,
    BUY_CREDIT_FAIL,
    darksteam97d99i.buyCredit,
    query
  )();
};

export const deposit = query => {
  amount = query.amount;
  return actionCreator(
    DEPOSIT_START,
    DEPOSIT_SUCCESS,
    DEPOSIT_FAIL,
    darksteam97d99i.deposit,
    query
  )();
};

export const transfer = query =>
  actionCreator(TRANSFER_START, TRANSFER_SUCCESS, TRANSFER_FAIL, darksteam97d99i.transfer, query)();
export const addPoint = query =>
  actionCreator(
    ADD_POINT_START,
    ADD_POINT_SUCCESS,
    ADD_POINT_FAIL,
    darksteam97d99i.addPoint,
    query
  )();
export const reset = query =>
  actionCreator(RESET_START, RESET_SUCCESS, RESET_FAIL, darksteam97d99i.reset, query)();
export const grandReset = query =>
  actionCreator(
    GRAND_RESET_START,
    GRAND_RESET_SUCCESS,
    GRAND_RESET_FAIL,
    darksteam97d99i.grandReset,
    query
  )();
export const resetQuest = query =>
  actionCreator(
    RESET_QUEST_START,
    RESET_QUEST_SUCCESS,
    RESET_QUEST_FAIL,
    darksteam97d99i.resetQuest,
    query
  )();

export default (
  state = {
    characters: null,
    focusCharacter: {},
    errorAddPoint: null,
    errorReset: null,
    errorGrandReset: null,
    errorResetQuest: null,
    errorBanking: null,
    inventories: {},
    focusItem: null,
    selectedSlot: null
  },
  action
) => {
  switch (action.type) {
    case ADD_POINT_SUCCESS:
      socket.emit('darksteam97d99i/CHECK_POINT_QUEST', 'WQ2');
      break;
    case RESET_SUCCESS:
      socket.emit('darksteam97d99i/CHECK_POINT_QUEST', 'WQ3', state.focusCharacter.Name);
      break;
    case GRAND_RESET_SUCCESS:
      socket.emit('darksteam97d99i/CHECK_POINT_QUEST', 'WQ4');
      break;
    case RESET_QUEST_SUCCESS:
      socket.emit('darksteam97d99i/CHECK_POINT_QUEST', 'WQ5');
      break;
    case LOAN_SUCCESS:
      socket.emit('darksteam97d99i/CHECK_POINT_QUEST', 'WQ6', amount);
      break;
    case DEPOSIT_SUCCESS:
      if (action.data.loan_money) {
        socket.emit('darksteam97d99i/CHECK_POINT_QUEST', 'WQ8', amount);
      } else {
        socket.emit('darksteam97d99i/CHECK_POINT_QUEST', 'WQ15', amount);
      }
      break;
    case BUY_CREDIT_SUCCESS:
      socket.emit('darksteam97d99i/CHECK_POINT_QUEST', 'WQ9', amount);
      break;
    default:
      break;
  }

  switch (action.type) {
    case GET_CHARACTERS_SUCCESS:
      return { ...state, characters: action.data, focusCharacter: action.data[0] };
    case SET_FOCUS_CHARACTER:
      return { ...state, focusCharacter: action.character, selectedSlot: null, focusItem: {} };

    case ADD_POINT_SUCCESS: {
      toast.success('Added Points Success', {
        position: toast.POSITION.BOTTOM_LEFT,
        className: 'toast-success'
      });
      const nextState = { ...state };
      nextState.focusCharacter[action.data.type] = action.data[action.data.type];
      nextState.focusCharacter.LevelUpPoint = action.data.LevelUpPoint;
      if (action.data.isUseBank == 'false') {
        nextState.focusCharacter.Money = action.data.Money;
      }
      nextState.characters = nextState.characters.map(character => {
        if (character.Name == state.focusCharacter.Name) {
          character[action.data.type] = action.data[action.data.type];
          character.LevelUpPoint = action.data.LevelUpPoint;
        }
        if (!action.data.isUseBank) {
          character.Money = action.data.Money;
        }
        return character;
      });
      return {
        ...state,
        focusCharacter: { ...nextState.focusCharacter },
        characters: nextState.characters.slice(0)
      };
    }

    case RESET_QUEST_SUCCESS:
    case GRAND_RESET_SUCCESS:
    case RESET_SUCCESS: {
      let notice = '';
      if (action.type == RESET_SUCCESS) notice = 'Reset successfull';
      if (action.type == GRAND_RESET_SUCCESS) notice = 'Grand Reset successfull';
      if (action.type == RESET_QUEST_SUCCESS) notice = 'Quest Reset successfull';
      toast.success(notice, {
        position: toast.POSITION.BOTTOM_LEFT,
        className: 'toast-success'
      });
      const nextState = { ...state };
      const changedCharacter = { ...state.focusCharacter };
      if (action.data.isUseBank == 'false') {
        changedCharacter.Money = action.data.Money;
      }
      if (action.data.Strength) changedCharacter.Strength = action.data.Strength;
      if (action.data.Dexterity) changedCharacter.Dexterity = action.data.Dexterity;
      if (action.data.Vitality) changedCharacter.Vitality = action.data.Vitality;
      if (action.data.Energy) changedCharacter.Energy = action.data.Energy;
      if (action.data.LevelUpPoint) changedCharacter.LevelUpPoint = action.data.LevelUpPoint;
      if (action.data.GrandResets) changedCharacter.GrandResets = action.data.GrandResets;
      changedCharacter.Resets = action.data.Resets;
      changedCharacter.cLevel = action.data.cLevel;
      nextState.characters = nextState.characters.map(character => {
        if (character.Name == state.focusCharacter.Name) {
          return { ...changedCharacter };
        }
        return character;
      });
      return {
        ...nextState,
        focusCharacter: { ...changedCharacter },
        characters: nextState.characters.slice(0)
      };
    }

    case DEPOSIT_SUCCESS: {
      toast.success('Deposit success', {
        position: toast.POSITION.BOTTOM_LEFT,
        className: 'toast-success'
      });
      const nextState = { ...state };
      const changedCharacter = { ...state.focusCharacter, Money: action.data.Money };
      nextState.characters = state.characters.map(character => {
        if (character.Name == changedCharacter.Name) {
          return changedCharacter;
        }
        return character;
      });
      return {
        ...nextState,
        characters: nextState.characters.slice(0),
        focusCharacter: { ...changedCharacter }
      };
    }

    case LOAN_SUCCESS:
    case WITHDRAW_SUCCESS: {
      let notice = '';
      if (action.type == LOAN_SUCCESS) notice = 'Loan successfull';
      if (action.type == WITHDRAW_SUCCESS) notice = 'withdraw successfull';
      toast.success(notice, {
        position: toast.POSITION.BOTTOM_LEFT,
        className: 'toast-success'
      });
      const nextState = { ...state };
      const changedCharacter = { ...state.focusCharacter, Money: action.data.Money };
      if (action.data.loan_money)
        nextState.characters = state.characters.map(character => {
          if (character.Name == changedCharacter.Name) {
            return changedCharacter;
          }
          return character;
        });
      return {
        ...nextState,
        characters: nextState.characters.slice(0),
        focusCharacter: { ...changedCharacter }
      };
    }

    case GET_CHARACTER_INVENTORY_SUCCESS:
      return {
        ...state,
        inventories: { ...state.inventories, [state.focusCharacter.Name]: action.data }
      };
    case SELECT_INVENTORY_ITEM:
      return {
        ...state,
        focusItem: { ...action.item },
        selectedSlot: action.slot
      };
    case UPGRADE_ITEM_SUCCESS:
      return {
        ...state,
        inventories: { ...state.inventories, [state.focusCharacter.Name]: action.data.inventory }
      };

    case RESET_FAIL:
      return { ...state, errorReset: action.error };
    case GRAND_RESET_FAIL:
      return { ...state, errorGrandReset: action.error };
    case RESET_QUEST_FAIL:
      return { ...state, errorResetQuest: action.error };
    case ADD_POINT_FAIL:
      return { ...state, errorAddPoint: action.error };
    case DEPOSIT_FAIL:
    case WITHDRAW_FAIL:
    case TRANSFER_FAIL:
    case LOAN_FAIL:
    case BUY_CREDIT_FAIL:
      return { ...state, errorBanking: action.error };
    case CLEAR_ADD_POINT_ERROR:
      return { ...state, errorAddPoint: null };
    case CLEAR_RESET_ERROR:
      return { ...state, errorReset: null };
    case CLEAR_GRAND_RESET_ERROR:
      return { ...state, errorGrandReset: null };
    case CLEAR_RESET_QUEST_ERROR:
      return { ...state, errorResetQuest: null };
    case CLEAR_BANKING_ERROR:
      return { ...state, errorBanking: null };
    case LOGOUT:
      return {
        characters: null,
        focusCharacter: {},
        errorAddPoint: null,
        errorReset: null,
        errorGrandReset: null,
        errorResetQuest: null,
        errorBanking: null
      };

    case UPGRADE_ITEM_FAIL:
    case GET_CHARACTER_INVENTORY_FAIL:
    case GET_CHARACTERS_FAIL:
      toast.error(`${action.error}`, {
        position: toast.POSITION.TOP_LEFT,
        className: 'toast-error'
      });
      return state;

    default:
      return state;
  }
};
