import actionCreator from 'factories/actionCreator';
import { darksteam97d99i } from 'services';

const GET_CHARACTERS_START = 'darksteam97d99i/GET_CHARACTERS_START';
const GET_CHARACTERS_SUCCESS = 'darksteam97d99i/GET_CHARACTERS_SUCCESS';
const GET_CHARACTERS_FAIL = 'darksteam97d99i/GET_CHARACTERS_FAIL';

const SET_FOCUS_CHARACTER = 'darksteam97d99i/SET_FOCUS_CHARACTER';
const CLEAR_ADD_POINT_ERROR = 'darksteam97d99i/CLEAR_ADD_POINT_ERROR';
const CLEAR_RESET_ERROR = 'darksteam97d99i/CLEAR_RESET_ERROR';
const CLEAR_GRAND_RESET_ERROR = 'darksteam97d99i/CLEAR_GRAND_RESET_ERROR';
const CLEAR_RESET_QUEST_ERROR = 'darksteam97d99i/CLEAR_RESET_QUEST_ERROR';

const ADD_POINT_START = 'darksteam97d99i/ADD_POINT_START';
export const ADD_POINT_SUCCESS = 'darksteam97d99i/ADD_POINT_SUCCESS';
const ADD_POINT_FAIL = 'darksteam97d99i/ADD_POINT_FAIL';

const RESET_START = 'darksteam97d99i/RESET_START';
export const RESET_SUCCESS = 'darksteam97d99i/RESET_SUCCESS';
const RESET_FAIL = 'darksteam97d99i/RESET_FAIL';

const GRAND_RESET_START = 'darksteam97d99i/GRAND_RESET_START';
export const GRAND_RESET_SUCCESS = 'darksteam97d99i/GRAND_RESET_SUCCESS';
const GRAND_RESET_FAIL = 'darksteam97d99i/GRAND_RESET_FAIL';

const RESET_QUEST_START = 'darksteam97d99i/RESET_QUEST_START';
export const RESET_QUEST_SUCCESS = 'darksteam97d99i/RESET_QUEST_SUCCESS';
const RESET_QUEST_FAIL = 'darksteam97d99i/RESET_QUEST_FAIL';

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

export const addPoint = query =>
  actionCreator(ADD_POINT_START, ADD_POINT_SUCCESS, ADD_POINT_FAIL, darksteam97d99i.addPoint, query)();
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
    errorResetQuest: null
  },
  action
) => {
  switch (action.type) {
    case GET_CHARACTERS_SUCCESS:
      return { ...state, characters: action.data, focusCharacter: action.data[0] };
    case SET_FOCUS_CHARACTER:
      return { ...state, focusCharacter: action.character };

    case ADD_POINT_SUCCESS: {
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

    case GRAND_RESET_SUCCESS:
    case RESET_SUCCESS: {
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
        ...state,
        focusCharacter: { ...changedCharacter },
        characters: nextState.characters.slice(0)
      };
    }

    case RESET_FAIL:
      return { ...state, errorReset: action.error };
    case GRAND_RESET_FAIL:
      return { ...state, errorGrandReset: action.error };
    case RESET_QUEST_FAIL:
      return { ...state, errorResetQuest: action.error };
    case ADD_POINT_FAIL:
      return { ...state, errorAddPoint: action.error };
    case CLEAR_ADD_POINT_ERROR:
      return { ...state, errorAddPoint: null };
    case CLEAR_RESET_ERROR:
      return { ...state, errorReset: null };
    case CLEAR_GRAND_RESET_ERROR:
      return { ...state, errorGrandReset: null };
    case CLEAR_RESET_QUEST_ERROR:
      return { ...state, errorResetQuest: null };
    default:
      return state;
  }
};