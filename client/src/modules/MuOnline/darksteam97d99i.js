import actionCreator from 'factories/actionCreator';
import { darksteam97d99i } from 'services';

const CHANGE_ACTIVE_CHANNEL = 'darksteam97d99i/CHANGE_ACTIVE_CHANNEL';
const CHANGE_ACTIVE_SIDE_FORM = 'darksteam97d99i/CHANGE_ACTIVE_SIDE_FORM';
const LOGOUT = 'darksteam97d99i/LOGOUT';

const REGISTER_START = 'darksteam97d99i/REGISTER_START';
const REGISTER_SUCCESS = 'darksteam97d99i/REGISTER_SUCCESS';
const REGISTER_FAIL = 'darksteam97d99i/REGISTER_FAIL';
const LOGIN_START = 'darksteam97d99i/LOGIN_START';
const LOGIN_SUCCESS = 'darksteam97d99i/LOGIN_SUCCESS';
const LOGIN_FAIL = 'darksteam97d99i/LOGIN_FAIL';

export const changeActiveChannel = channel => ({ type: CHANGE_ACTIVE_CHANNEL, channel });
export const changeActiveSideForm = form => ({ type: CHANGE_ACTIVE_SIDE_FORM, form });
export const logout = () => ({ type: LOGOUT });
export const register = formBody =>
  actionCreator(REGISTER_START, REGISTER_SUCCESS, REGISTER_FAIL, darksteam97d99i.register, formBody)();
export const login = formBody =>
  actionCreator(LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL, darksteam97d99i.login, formBody)();

export default (
  state = {
    user: null,
    viewControl: {
      activeChannel: 'User',
      activeSideForm: 'Login',
      userPage: 'Introduction'
    },
    error: {
      Register: null,
      Login: null
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
      return { ...state, user: action.data, viewControl: { ...state.viewControl, userPage: 'Dashboard' } };
    case LOGIN_FAIL:
      return { ...state, error: { ...state.error, Login: action.error } };
    case LOGOUT:
      return {
        ...state,
        user: null,
        viewControl: { ...state.viewControl, userPage: 'Introduction' },
        error: { Register: null, Login: null }
      };
    default:
      return state;
  }
};
