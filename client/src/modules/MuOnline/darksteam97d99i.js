import actionCreator from 'factories/actionCreator';
import { darksteam97d99i } from 'services';

const CHANGE_ACTIVE_CHANNEL = 'darksteam97d99i/CHANGE_ACTIVE_CHANNEL';
const CHANGE_ACTIVE_SIDE_FORM = 'darksteam97d99i/CHANGE_ACTIVE_SIDE_FORM';
const LOGOUT = 'darksteam97d99i/LOGOUT';
const CHANGE_USER_PAGE = 'darksteam97d99i/CHANGE_USER_PAGE';
const SET_FOCUS_CHARACTER = 'darksteam97d99i/SET_FOCUS_CHARACTER';
const CLEAR_ADD_POINT_ERROR = 'darksteam97d99i/CLEAR_ADD_POINT_ERROR';
const CLEAR_RESET_ERROR = 'darksteam97d99i/CLEAR_RESET_ERROR';

const REGISTER_START = 'darksteam97d99i/REGISTER_START';
const REGISTER_SUCCESS = 'darksteam97d99i/REGISTER_SUCCESS';
const REGISTER_FAIL = 'darksteam97d99i/REGISTER_FAIL';
const LOGIN_START = 'darksteam97d99i/LOGIN_START';
const LOGIN_SUCCESS = 'darksteam97d99i/LOGIN_SUCCESS';
const LOGIN_FAIL = 'darksteam97d99i/LOGIN_FAIL';
const EDIT_PROFILE_START = 'darksteam97d99i/EDIT_PROFILE_START';
const EDIT_PROFILE_FAIL = 'darksteam97d99i/EDIT_PROFILE_FAIL';
const EDIT_PROFILE_SUCCESS = 'darksteam97d99i/EDIT_PROFILE_SUCCESS';
const GET_CHARACTERS_START = 'darksteam97d99i/GET_CHARACTERS_START';
const GET_CHARACTERS_SUCCESS = 'darksteam97d99i/GET_CHARACTERS_SUCCESS';
const GET_CHARACTERS_FAIL = 'darksteam97d99i/GET_CHARACTERS_FAIL';
const ADD_POINT_START = 'darksteam97d99i/ADD_POINT_START';
const ADD_POINT_SUCCESS = 'darksteam97d99i/ADD_POINT_SUCCESS';
const ADD_POINT_FAIL = 'darksteam97d99i/ADD_POINT_FAIL';
const RESET_START = 'darksteam97d99i/RESET_START';
const RESET_SUCCESS = 'darksteam97d99i/RESET_SUCCESS';
const RESET_FAIL = 'darksteam97d99i/RESET_FAIL';
const DEPOSIT_START = 'darksteam97d99i/DEPOSIT_START';
const DEPOSIT_SUCCESS = 'darksteam97d99i/DEPOSIT_SUCCESS';
const DEPOSIT_FAIL = 'darksteam97d99i/DEPOSIT_FAIL';
const WITHDRAW_START = 'darksteam97d99i/WITHDRAW_START';
const WITHDRAW_SUCCESS = 'darksteam97d99i/WITHDRAW_SUCCESS';
const WITHDRAW_FAIL = 'darksteam97d99i/WITHDRAW_FAIL';
const LOAN_START = 'darksteam97d99i/LOAN_START';
const LOAN_SUCCESS = 'darksteam97d99i/LOAN_SUCCESS';
const LOAN_FAIL = 'darksteam97d99i/LOAN_FAIL';
const TRANSFER_START = 'darksteam97d99i/TRANSFER_START';
const TRANSFER_SUCCESS = 'darksteam97d99i/TRANSFER_SUCCESS';
const TRANSFER_FAIL = 'darksteam97d99i/TRANSFER_FAIL';
const GET_GAME_SETTING_START = 'darksteam97d99i/GET_GAME_SETTING_START';
const GET_GAME_SETTING_SUCCESS = 'darksteam97d99i/GET_GAME_SETTING_SUCCESS';
const GET_GAME_SETTING_FAIL = 'darksteam97d99i/GET_GAME_SETTING_FAIL';
const GET_SERVER_INFO_START = 'darksteam97d99i/GET_SERVER_INFO_START';
const GET_SERVER_INFO_SUCCESS = 'darksteam97d99i/GET_SERVER_INFO_SUCCESS';
const GET_SERVER_INFO_FAIL = 'darksteam97d99i/GET_SERVER_INFO_FAIL';

export const changeActiveChannel = channel => ({ type: CHANGE_ACTIVE_CHANNEL, channel });
export const changeActiveSideForm = form => ({ type: CHANGE_ACTIVE_SIDE_FORM, form });
export const logout = () => ({ type: LOGOUT });
export const changeUserPage = page => ({ type: CHANGE_USER_PAGE, page });
export const setFocusCharacter = character => ({ type: SET_FOCUS_CHARACTER, character });
export const clearAddPointError = () => ({ type: CLEAR_ADD_POINT_ERROR });
export const clearResetError = () => ({ type: CLEAR_RESET_ERROR });

export const register = formBody =>
  actionCreator(REGISTER_START, REGISTER_SUCCESS, REGISTER_FAIL, darksteam97d99i.register, formBody)();
export const login = formBody =>
  actionCreator(LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL, darksteam97d99i.login, formBody)();
export const editProfile = formBody =>
  actionCreator(
    EDIT_PROFILE_START,
    EDIT_PROFILE_SUCCESS,
    EDIT_PROFILE_FAIL,
    darksteam97d99i.editProfile,
    formBody
  )();
export const getCharacters = id =>
  actionCreator(
    GET_CHARACTERS_START,
    GET_CHARACTERS_SUCCESS,
    GET_CHARACTERS_FAIL,
    darksteam97d99i.getCharacters,
    id
  )();
export const addPoint = query =>
  actionCreator(ADD_POINT_START, ADD_POINT_SUCCESS, ADD_POINT_FAIL, darksteam97d99i.addPoint, query)();
export const reset = query =>
  actionCreator(RESET_START, RESET_SUCCESS, RESET_FAIL, darksteam97d99i.reset, query)();
export const getGameSetting = actionCreator(
  GET_GAME_SETTING_START,
  GET_GAME_SETTING_SUCCESS,
  GET_GAME_SETTING_FAIL,
  darksteam97d99i.getGameSetting
);
export const getServerInfo = actionCreator(
  GET_SERVER_INFO_START,
  GET_SERVER_INFO_SUCCESS,
  GET_SERVER_INFO_FAIL,
  darksteam97d99i.getServerInfo
);

export default (
  state = {
    user: null,
    characters: null,
    gameSetting: null,
    serverInfo: null,
    focusCharacter: {},
    viewControl: {
      activeChannel: 'User',
      activeSideForm: 'Login',
      userPage: 'Introduction'
    },
    error: {
      Register: null,
      Login: null,
      AddPoint: null,
      Reset: null
    }
  },
  action
) => {
  switch (action.type) {
    case CHANGE_ACTIVE_CHANNEL:
      return { ...state, viewControl: { ...state.viewControl, activeChannel: action.channel } };
    case CHANGE_ACTIVE_SIDE_FORM:
      return { ...state, viewControl: { ...state.viewControl, activeSideForm: action.form } };
    case REGISTER_SUCCESS:
      return { ...state, viewControl: { ...state.viewControl, activeSideForm: 'Login' } };
    case REGISTER_FAIL:
      return { ...state, error: { ...state.error, Register: action.error } };
    case LOGIN_SUCCESS:
      return { ...state, user: action.data, viewControl: { ...state.viewControl, userPage: 'Dash Board' } };
    case LOGIN_FAIL:
      return { ...state, error: { ...state.error, Login: action.error } };
    case EDIT_PROFILE_SUCCESS:
      return { ...state, user: { ...state.user, ...action.data } };
    case CHANGE_USER_PAGE:
      return { ...state, viewControl: { ...state.viewControl, userPage: action.page } };
    case GET_CHARACTERS_SUCCESS:
      return { ...state, characters: action.data, focusCharacter: action.data[0] };
    case SET_FOCUS_CHARACTER:
      return { ...state, focusCharacter: action.character };
    case ADD_POINT_SUCCESS: {
      const nextState = { ...state };
      nextState.focusCharacter[action.data.type] = action.data[action.data.type];
      nextState.focusCharacter.LevelUpPoint = action.data.LevelUpPoint;
      if (action.data.isUseBank == 'true') {
        nextState.user.Banking.zen_balance = action.data.zen_balance;
      } else {
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
        ...nextState,
        user: { ...nextState.user, Banking: { ...nextState.user.Banking } },
        focusCharacter: { ...nextState.focusCharacter },
        characters: nextState.characters.slice(0),
        error: { ...state.error, AddPoint: null }
      };
    }
    case RESET_SUCCESS: {
      const nextState = { ...state };
      const changedCharacter = { ...state.focusCharacter };
      if (action.data.isUseBank == 'true') {
        nextState.user.Banking.zen_balance = action.data.zen_balance;
      } else {
        changedCharacter.Money = action.data.Money;
      }
      nextState.user.MembCredits.credits = action.data.credits;
      if (action.data.Strength) changedCharacter.Strength = action.data.Strength;
      if (action.data.Dexterity) changedCharacter.Dexterity = action.data.Dexterity;
      if (action.data.Vitality) changedCharacter.Vitality = action.data.Vitality;
      if (action.data.Energy) changedCharacter.Energy = action.data.Energy;
      if (action.data.LevelUpPoint) changedCharacter.LevelUpPoint = action.data.LevelUpPoint;
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
        user: {
          ...nextState.user,
          Banking: { ...nextState.user.Banking },
          MembCredits: { ...nextState.user.MembCredits }
        },
        focusCharacter: { ...changedCharacter },
        characters: nextState.characters.slice(0),
        error: { ...state.error, Reset: null }
      };
    }
    case RESET_FAIL: {
      return { ...state, error: { ...state.error, Reset: action.error } };
    }
    case ADD_POINT_FAIL:
      return { ...state, error: { ...state.error, AddPoint: action.error } };
    case CLEAR_ADD_POINT_ERROR:
      return { ...state, error: { ...state.error, AddPoint: null } };
    case CLEAR_RESET_ERROR:
      return { ...state, error: { ...state.error, Reset: null } };
    case GET_GAME_SETTING_SUCCESS:
      return { ...state, gameSetting: { ...action.data } };
    case GET_SERVER_INFO_SUCCESS:
      return { ...state, serverInfo: { ...action.data } };
    case LOGOUT:
      return {
        ...state,
        user: null,
        characters: null,
        focusCharacter: {},
        viewControl: { ...state.viewControl, userPage: 'Introduction' },
        error: { Register: null, Login: null }
      };
    default:
      return state;
  }
};
