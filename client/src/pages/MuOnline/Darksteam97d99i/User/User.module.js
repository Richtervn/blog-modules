import _ from 'underscore';
import Promise from 'bluebird';
import { actionCreator } from 'helpers';
import services from '../Darksteam97d99i.services';
import { toastStrong, toastSuccess } from 'common/Toast';
import { startQuestWorker } from './WebQuest/WebQuest.module';

export const userPages = [
  { name: 'Dash Board', route: 'dashboard', icon: 'dashboard' },
  { name: 'Character Manager', route: 'character_manager', icon: 'users' },
  { name: 'Banking Manager', route: 'banking_manager', icon: 'bank' },
  { name: 'Vip Manager', route: 'vip_manager', icon: 'credit-card' },
  { name: 'Web Shop', route: 'web_shop', icon: 'shopping-cart' },
  { name: 'Luxury Shop', route: 'luxury_shop', icon: 'magic' },
  { name: 'Web Quest', route: 'web_quest', icon: 'diamond' },
  { name: 'Upgrade Items', route: 'upgrade_items', icon: 'flash' },
  { name: 'Blacksmith', route: 'blacksmith', icon: 'gavel' }
];

export const LOGIN = 'ds9799_user/LOGIN';
export const LOGOUT = 'ds9799_user/LOGOUT';
export const REGISTER = 'ds9799_user/REGISTER';
const SET_VIP_ACCOUNT = 'ds9799_user/SET_VIP_ACCOUNT';
const RECOVER_PASSWORD = 'ds9799_user/RECOVER_PASSWORD';
const GET_CURRENT_USER = 'ds9799_user/GET_CURRENT_USER';
const SET_CHECKED_USER = 'ds9799_user/SET_CHECKED_USER';

const EDIT_PROFILE = 'ds9799_user/EDIT_PROFILE';

const socketInitialize = (socket, memb___id) => {
  return new Promise(resolve => {
    socket.emit('darksteam97d99i/USER_LOGGED_IN', memb___id);
    socket.on('reconnect', () => socket.emit('darksteam97d99i/USER_LOGGED_IN', memb___id));
    socket.once('darksteam97d99i/USER_WEB_QUEST_INITIALIZED', () => {
      return resolve();
    });
  });
};

const setCheckedUser = value => ({ type: SET_CHECKED_USER, value });
export const login = formBody =>
  actionCreator(LOGIN, services.login, {
    payload: { formBody },
    onBeforeSuccess: async ({ data, socket, dispatch }) => {
      await socketInitialize(socket, data.memb___id);
      dispatch(startQuestWorker())
    },
    onAfterSuccess: ({ payload, dispatch }) => {
      window.localStorage.setItem('ds9799User', JSON.stringify(payload.formBody));
      dispatch(setCheckedUser(true));
    }
  })();
export const getCurrentUser = () =>
  actionCreator(GET_CURRENT_USER, (payload, { dispatch }) => {
    const formBody = window.localStorage.getItem('ds9799User');
    if (formBody) {
      return dispatch(login(JSON.parse(formBody)));
    }
    dispatch(setCheckedUser(true));
  })();
export const register = formBody => actionCreator(REGISTER, services.register, { payload: { formBody } })();
export const recoverPassword = id => actionCreator(RECOVER_PASSWORD, services.recoverPassword, { payload: { id } })();

export const editProfile = formBody =>
  actionCreator(EDIT_PROFILE, services.editProfile, {
    payload: { formBody },
    onAfterSuccess({ socket }) {
      socket.emit('darksteam97d99i/CHECK_POINT_QUEST', 'WQ01');
    }
  })();

export const logout = () => {
  window.localStorage.removeItem('ds9799User');
  return { type: LOGOUT };
};

export const setVipAccount = () => ({ type: SET_VIP_ACCOUNT });

const initialState = {
  user: null,
  lostPassword: '',
  isCheckedCurrentUser: false,
  questList: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${LOGIN}_SUCCESS`:
      toastStrong(action.payload.memb___id, 'Welcome');
      return { ...state, user: _.omit(action.payload, ['Banking', 'MembCredits']) };

    case `${REGISTER}_SUCCESS`:
      toastStrong('Register successful');
      return state;
    case `${RECOVER_PASSWORD}_SUCCESS`:
      toastSuccess('Password recovered');
      return { ...state, lostPassword: action.payload.memb__pwd };
    case `${EDIT_PROFILE}_SUCCESS`:
      toastSuccess('Profile Updated');
      return { ...state, user: { ...state.user, ...action.payload } };
    case SET_CHECKED_USER:
      return { ...state, isCheckedCurrentUser: action.value };
    case SET_VIP_ACCOUNT:
      return { ...state, user: { ...state.user, isVip: 1 } };

    case LOGOUT:
      return { ...state, user: null };
    default:
      return state;
  }
};
