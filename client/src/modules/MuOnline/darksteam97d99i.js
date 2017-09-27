import actionCreator from 'factories/actionCreator';
import { darksteam97d99i } from 'services';

const CHANGE_ACTIVE_CHANNEL = 'darksteam97d99i/CHANGE_ACTIVE_CHANNEL';
const CHANGE_ACTIVE_SIDE_FORM = 'darksteam97d99i/CHANGE_ACTIVE_SIDE_FORM';

const REGISTER_START = 'darksteam97d99i/REGISTER_START';
const REGISTER_SUCCESS = 'darksteam97d99i/REGISTER_SUCCESS';
const REGISTER_FAIL = 'darksteam97d99i/REGISTER_FAIL';

export const changeActiveChannel = channel => ({ type: CHANGE_ACTIVE_CHANNEL, channel });
export const changeActiveSideForm = form => ({ type: CHANGE_ACTIVE_SIDE_FORM, form });
export const register = formBody =>
  actionCreator(REGISTER_START, REGISTER_SUCCESS, REGISTER_FAIL, darksteam97d99i.register, formBody)();

export default (
  state = {
    user: {},
    viewControl: {
      activeChannel: 'User',
      activeSideForm: 'Login'
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
    default:
      return state;
  }
};
