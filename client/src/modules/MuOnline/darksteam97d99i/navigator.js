import { REGISTER_SUCCESS, LOGIN_SUCCESS } from './user';

const CHANGE_ACTIVE_CHANNEL = 'darksteam97d99i/navigator/CHANGE_ACTIVE_CHANNEL';
const CHANGE_ACTIVE_SIDE_FORM = 'darksteam97d99i/navigator/CHANGE_ACTIVE_SIDE_FORM';

const CHANGE_USER_PAGE = 'darksteam97d99i/navigator/CHANGE_USER_PAGE';
const CHANGE_SERVER_PAGE = 'darksteam97d99i/navigator/CHANGE_SERVER_PAGE';
const CHANGE_ADMIN_PAGE = 'darksteam97d99i/navigator/CHANGE_ADMIN_PAGE';

export const changeActiveChannel = channel => ({ type: CHANGE_ACTIVE_CHANNEL, channel });
export const changeActiveSideForm = form => ({ type: CHANGE_ACTIVE_SIDE_FORM, form });
export const changeUserPage = page => ({ type: CHANGE_USER_PAGE, page });
export const changeServerPage = page => ({ type: CHANGE_SERVER_PAGE, page });
export const changeAdminPage = page => ({ type: CHANGE_ADMIN_PAGE, page });

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
    userPage: null,
    serverPages: ['Monster Set Base', 'Shop Editor', 'Bag Items Editor', 'Quest Editor', 'Server Info'],
    serverPage: 'Monster Set Base',
    adminPages: [
      'Accounts Manager',
      'Characters Manager',
      'Members Banking Manager',
      'Members Credits Manager',
      'Game Setting Manager'
    ],
    adminPage: 'Accounts Manager'
  },
  action
) => {
  switch (action.type) {
    case CHANGE_ACTIVE_CHANNEL:
      return { ...state, activeChannel: action.channel };
    case CHANGE_ACTIVE_SIDE_FORM:
      return { ...state, activeSideForm: action.form };
    case CHANGE_USER_PAGE:
      return { ...state, userPage: action.page };
    case CHANGE_ADMIN_PAGE:
      return { ...state, adminPage: action.page };
    case CHANGE_SERVER_PAGE:
      return { ...state, serverPage: action.page };
    case REGISTER_SUCCESS:
      return { ...state, activeSideForm: 'Login' };
    case LOGIN_SUCCESS:
      return { ...state, userPage: 'Dash Board' };
    default:
      return state;
  }
};
