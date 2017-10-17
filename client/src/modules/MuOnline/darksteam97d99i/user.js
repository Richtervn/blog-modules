import actionCreator from 'factories/actionCreator';
import { darksteam97d99i } from 'services';

const initialState = { user: null, error: { Login: null, Register: null } };

const REGISTER_START = 'darksteam97d99i/user/REGISTER_START';
export const REGISTER_SUCCESS = 'darksteam97d99i/user/REGISTER_SUCCESS';
const REGISTER_FAIL = 'darksteam97d99i/user/REGISTER_FAIL';

const LOGIN_START = 'darksteam97d99i/user/LOGIN_START';
const LOGIN_SUCCESS = 'darksteam97d99i/user/LOGIN_SUCCESS';
const LOGIN_FAIL = 'darksteam97d99i/user/LOGIN_FAIL';

const LOGOUT = 'darksteam97d99i/LOGOUT';

export const logout = () => ({ type: LOGOUT });
export const register = formBody =>
  actionCreator(REGISTER_START, REGISTER_SUCCESS, REGISTER_FAIL, darksteam97d99i.register, formBody)();
export const login = formBody =>
  actionCreator(LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL, darksteam97d99i.login, formBody)();

export default (state = initialState, action) => {
  switch (action.type) {
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
