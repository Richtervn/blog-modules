import actionCreator from 'factories/actionCreator';
import { darksteam97d99i } from 'services';

import { ADD_POINT_SUCCESS, RESET_SUCCESS, GRAND_RESET_SUCCESS, RESET_QUEST_SUCCESS } from './character';

const REGISTER_START = 'darksteam97d99i/user/REGISTER_START';
export const REGISTER_SUCCESS = 'darksteam97d99i/user/REGISTER_SUCCESS';
const REGISTER_FAIL = 'darksteam97d99i/user/REGISTER_FAIL';

const LOGIN_START = 'darksteam97d99i/user/LOGIN_START';
export const LOGIN_SUCCESS = 'darksteam97d99i/user/LOGIN_SUCCESS';
const LOGIN_FAIL = 'darksteam97d99i/user/LOGIN_FAIL';

const EDIT_PROFILE_START = 'darksteam97d99i/user/EDIT_PROFILE_START';
const EDIT_PROFILE_FAIL = 'darksteam97d99i/user/EDIT_PROFILE_FAIL';
const EDIT_PROFILE_SUCCESS = 'darksteam97d99i/user/EDIT_PROFILE_SUCCESS';

export const editProfile = formBody =>
  actionCreator(
    EDIT_PROFILE_START,
    EDIT_PROFILE_SUCCESS,
    EDIT_PROFILE_FAIL,
    darksteam97d99i.editProfile,
    formBody
  )();

const LOGOUT = 'darksteam97d99i/LOGOUT';

export const logout = () => ({ type: LOGOUT });
export const register = formBody =>
  actionCreator(REGISTER_START, REGISTER_SUCCESS, REGISTER_FAIL, darksteam97d99i.register, formBody)();
export const login = formBody =>
  actionCreator(LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL, darksteam97d99i.login, formBody)();

const initialState = { user: null, error: { Login: null, Register: null } };

export default (state = initialState, action) => {
  switch (action.type) {
    case RESET_QUEST_SUCCESS:
    case ADD_POINT_SUCCESS:
      if (action.data.isUseBank == 'true') {
        return {
          ...state,
          user: { ...state.user, Banking: { ...state.user.Banking, zen_balance: action.data.zen_balance } }
        };
      }
      return state;
    case GRAND_RESET_SUCCESS:
    case RESET_SUCCESS:
      if (action.data.isUseBank == 'true') {
        return {
          ...state,
          user: {
            ...state.user,
            Banking: { ...state.user.Banking, zen_balance: action.data.zen_balance },
            MembCredits: { ...state.user.MembCredits, credits: action.data.credits }
          }
        };
      }
      return state;
    case REGISTER_FAIL:
      return { ...state, error: { ...state.error, Register: action.error } };
    case LOGIN_SUCCESS:
      return { ...state, user: action.data, viewControl: { ...state.viewControl, userPage: 'Dash Board' } };
    case LOGIN_FAIL:
      return { ...state, error: { ...state.error, Login: action.error } };
    case LOGOUT:
      return { ...initialState };
    default:
      return state;
  }
};