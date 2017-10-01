import actionCreator from 'factories/actionCreator';
import { darksteam97d99i } from 'services';

const CHANGE_ACTIVE_CHANNEL = 'darksteam97d99i/CHANGE_ACTIVE_CHANNEL';
const CHANGE_ACTIVE_SIDE_FORM = 'darksteam97d99i/CHANGE_ACTIVE_SIDE_FORM';
const LOGOUT = 'darksteam97d99i/LOGOUT';
const CHANGE_USER_PAGE = 'darksteam97d99i/CHANGE_USER_PAGE';
const SET_FOCUS_CHARACTER = 'darksteam97d99i/SET_FOCUS_CHARACTER';

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

export const changeActiveChannel = channel => ({ type: CHANGE_ACTIVE_CHANNEL, channel });
export const changeActiveSideForm = form => ({ type: CHANGE_ACTIVE_SIDE_FORM, form });
export const logout = () => ({ type: LOGOUT });
export const changeUserPage = page => ({ type: CHANGE_USER_PAGE, page });
export const setFocusCharacter = character => ({ type: SET_FOCUS_CHARACTER, character });
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

export default (
  state = {
    user: null,
    characters: null,
    focusCharacter: {},
    viewControl: {
      activeChannel: 'User',
      activeSideForm: 'Login',
      userPage: 'Introduction'
    },
    error: {
      Register: null,
      Login: null,
      AddPoint: null
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
    case ADD_POINT_SUCCESS:
      const nextState = { ...state };
      nextState.focusCharacter[action.data.type] = action.data[action.data.type];
      if (action.data.isUseBank) {
        nextState.user.Banking.zen_balance = action.data.zen_balance;
      } else {
        nextState.focusCharacter.Money = action.data.Money;
      }
      nextState.characters.map(character => {
        if (character.Name == state.focusCharacter.Name) {
          character[action.data.type] = action.data[action.data.type];
        }
        if (!action.data.isUseBank) {
          character.Money = action.data.Money;
        }
        return character;
      });
      return {
        ...nextState,
        focusCharacter: { ...nextState.focusCharacter },
        characters: nextState.characters.slice(0),
        error: {...state.error, AddPoint: null}
      };
    case ADD_POINT_FAIL:
      return { ...state, error: { ...state.error, AddPoint: action.error } };
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
