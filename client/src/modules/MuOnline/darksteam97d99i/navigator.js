import { REGISTER_SUCCESS } from './user';

const CHANGE_ACTIVE_CHANNEL = 'darksteam97d99i/navigator/CHANGE_ACTIVE_CHANNEL';
const CHANGE_ACTIVE_SIDE_FORM = 'darksteam97d99i/CHANGE_ACTIVE_SIDE_FORM';

export const changeActiveChannel = channel => ({ type: CHANGE_ACTIVE_CHANNEL, channel });
export const changeActiveSideForm = form => ({ type: CHANGE_ACTIVE_SIDE_FORM, form });

export default (
  state = {
    channels: ['User', 'Admin', 'Server'],
    activeChannel: 'User',
    activeSideForm: 'Login',
    userPages: [
      'Dash Board',
      'Character Manager',
      'Banking Manager',
      'Vip Manager',
      'Web Shop',
      'Web Quest',
      'Vip Upgrade Items',
      'Luxury Shop'
    ],
    userPage: 'Dash Board'
  },
  action
) => {
  switch (action.type) {
    case CHANGE_ACTIVE_CHANNEL:
      return { ...state, activeChannel: action.channel };
    case CHANGE_ACTIVE_SIDE_FORM:
      return { ...state, activeSideForm: action.form };
    case REGISTER_SUCCESS:
      return { ...state, activeSideForm: 'Login' };
    default:
      return state;
  }
};
