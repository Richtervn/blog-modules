import Promise from 'bluebird';
import { actionCreator } from 'helpers';
import services from '../Darksteam97d99i.services';
import { toastStrong, toastSuccess } from 'common/Toast';

import { REFRESH_QUEST_LIST } from './WebQuest/WebQuest.module';

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

const LOGIN = 'ds9799_user/LOGIN';
export const REGISTER = 'ds9799_user/REGISTER';
const RECOVER_PASSWORD = 'ds9799_user/RECOVER_PASSWORD';
const GET_CURRENT_USER = 'ds9799_user/GET_CURRENT_USER';
const GET_CHARACTERS = 'ds9799_user/GET_CHARACTERS';
const EDIT_PROFILE = 'ds9799_user/EDIT_PROFILE';

const SET_FOCUS_CHARACTER = 'ds9799_user/SET_FOCUS_CHARACTER';

const socketInitialize = (socket, memb___id) => {
  return new Promise(resolve => {
    socket.emit('darksteam97d99i/USER_LOGGED_IN', memb___id);
    socket.once('darksteam97d99i/USER_WEB_QUEST_INITIALIZED', () => {
      return resolve();
    });
  });
};

export const login = formBody =>
  actionCreator(LOGIN, services.login, {
    payload: { formBody },
    onBeforeSuccess: async ({ data, socket }) => {
      await socketInitialize(socket, data.memb___id);
    }
  })();
export const getCurrentUser = () =>
  actionCreator(GET_CURRENT_USER, services.getCurrentUser, {
    onBeforeSuccess: async ({ data, socket }) => {
      if (data.memb___id) {
        await socketInitialize(socket, data.memb___id);
      }
    }
  })();
export const register = formBody => actionCreator(REGISTER, services.register, { payload: { formBody } })();
export const recoverPassword = id => actionCreator(RECOVER_PASSWORD, services.recoverPassword, { payload: { id } })();
export const getCharacters = id => actionCreator(GET_CHARACTERS, services.getCharacters, { payload: { id } })();
export const editProfile = formBody =>
  actionCreator(EDIT_PROFILE, services.editProfile, {
    payload: { formBody },
    onAfterSuccess({ socket }) {
      socket.emit('darksteam97d99i/CHECK_POINT_QUEST', 'WQ01');
    }
  })();

export const setFocusCharacter = name => ({ type: SET_FOCUS_CHARACTER, name });

const initialState = {
  user: null,
  lostPassword: '',
  isCheckedCurrentUser: false,
  characters: null,
  focusCharacter: null,
  questList: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${LOGIN}_SUCCESS`:
      toastStrong(action.payload.memb___id, 'Welcome');

      return { ...state, user: action.payload };
    case `${REGISTER}_SUCCESS`:
      toastStrong('Register successful');
      return { ...state, isRegistered: true };
    case `${RECOVER_PASSWORD}_SUCCESS`:
      toastSuccess('Password recovered');
      return { ...state, lostPassword: action.payload.memb__pwd };
    case `${GET_CURRENT_USER}_SUCCESS`:
      if (!action.payload.memb___id) {
        return { ...state, isCheckedCurrentUser: true };
      }
      return { ...state, user: action.payload, isCheckedCurrentUser: true };
    case `${GET_CHARACTERS}_SUCCESS`:
      return {
        ...state,
        characters: action.payload,
        focusCharacter: action.payload.length > 0 ? action.payload[0].Name : null
      };
    case `${EDIT_PROFILE}_SUCCESS`:
      toastSuccess('Profile Updated');
      return { ...state, user: { ...state.user, ...action.payload } };

    case SET_FOCUS_CHARACTER:
      return { ...state, focusCharacter: action.name };

    case REFRESH_QUEST_LIST: {
      const nextState = { ...state };
      if (action.data.credits) {
        nextState.user.MembCredits.credits = action.data.credits;
      }
      if (action.payload.zen_balance) {
        nextState.user.Banking.zen_balance = action.data.zen_balance;
      }
      return {
        ...state,
        user: {
          ...state.user,
          Credits: { ...nextState.user.MembCredits },
          Banking: { ...nextState.user.Banking }
        }
      };
    }

    default:
      return state;
  }
};

// import actionCreator from 'factories/actionCreator';
// import { darksteam97d99i } from 'services';
// import socket from 'factories/socketInstance';
// import { toast } from 'react-toastify';

// import { CHANGE_USER_PAGE } from './navigator';

// import {
//   ADD_POINT_SUCCESS,
//   RESET_SUCCESS,
//   GRAND_RESET_SUCCESS,
//   RESET_QUEST_SUCCESS,
//   DEPOSIT_SUCCESS,
//   WITHDRAW_SUCCESS,
//   TRANSFER_SUCCESS,
//   LOAN_SUCCESS,
//   BUY_CREDIT_SUCCESS,
//   UPGRADE_ITEM_SUCCESS
// } from './character';

// import { REFRESH_QUEST_LIST } from './webQuest';
// import { BUY_PACKAGE_SUCCESS } from './webShop';

// import {
//   TRADE_EXCHANGE_SUCCESS,
//   BUY_CONSUMABLE_SUCCESS,
//   BUY_RECEIPT_SUCCESS,
//   SELL_RECEIPT_SUCCESS,
//   CRAFT_ITEM_SUCCESS
// } from './luxuryShop';

// const BUY_VIP_START = 'darksteam97d99i/user/BUY_VIP_START';
// export const BUY_VIP_SUCCESS = 'darksteam97d99i/user/BUY_VIP_SUCCESS';
// const BUY_VIP_FAIL = 'darksteam97d99i/user/BUY_VIP_FAIL';

// let packageType;
// export const buyVip = (vipPackage, user, focusCharacter) => {
//   packageType = vipPackage.type;
//   actionCreator(
//     BUY_VIP_START,
//     BUY_VIP_SUCCESS,
//     BUY_VIP_FAIL,
//     darksteam97d99i.buyVip,
//     vipPackage,
//     user,
//     focusCharacter
//   )();
// };

// const initialState = { user: null, errorLogin: null, errorRegister: null };

// export default (state = initialState, action) => {
//   switch (action.type) {

//     case BUY_VIP_SUCCESS:
//       if (packageType == 'Character') socket.emit('darksteam97d99i/CHECK_POINT_QUEST', 'WQ10');
//       if (packageType == 'Account') socket.emit('darksteam97d99i/CHECK_POINT_QUEST', 'WQ11');
//       break;
//     case CHANGE_USER_PAGE:
//       if (action.page == 'Web Quest') {
//         socket.emit('darksteam97d99i/CHECK_POINT_QUEST', 'WQ16');
//       }
//       break;
//     default:
//       break;
//   }

//   switch (action.type) {
//     case LOGIN_SUCCESS:
//       toast.success(`Welcome ${action.payload.memb___id}`, {
//         position: toast.POSITION.BOTTOM_LEFT,
//         className: 'toast-success'
//       });
//       return {
//         ...state,
//         user: action.payload,
//         viewControl: { ...state.viewControl, userPage: 'Dash Board' }
//       };
//     case LOGIN_FAIL:
//       return { ...state, errorLogin: action.error };
//     case REGISTER_SUCCESS:
//       toast.success(`Registerd New User`, {
//         position: toast.POSITION.BOTTOM_LEFT,
//         className: 'toast-success'
//       });
//       return state;
//     case REGISTER_FAIL:
//       return { ...state, errorRegister: action.error };

//     case UPGRADE_ITEM_SUCCESS:
//     case SELL_RECEIPT_SUCCESS:
//     case CRAFT_ITEM_SUCCESS:
//     case BUY_CONSUMABLE_SUCCESS:
//     case BUY_RECEIPT_SUCCESS:
//     case TRADE_EXCHANGE_SUCCESS:
//     case BUY_PACKAGE_SUCCESS:
//       return {
//         ...state,
//         user: {
//           ...state.user,
//           MembCredits: { ...state.user.MembCredits, credits: action.payload.credits }
//         }
//       };

//     case RESET_QUEST_SUCCESS:
//     case ADD_POINT_SUCCESS:
//       if (action.payload.isUseBank == 'true') {
//         return {
//           ...state,
//           user: {
//             ...state.user,
//             Banking: { ...state.user.Banking, zen_balance: action.payload.zen_balance }
//           }
//         };
//       }
//       return state;
//     case GRAND_RESET_SUCCESS:
//     case RESET_SUCCESS:
//       if (action.payload.isUseBank == 'true') {
//         return {
//           ...state,
//           user: {
//             ...state.user,
//             Banking: { ...state.user.Banking, zen_balance: action.payload.zen_balance },
//             MembCredits: { ...state.user.MembCredits, credits: action.payload.credits }
//           }
//         };
//       }
//       return state;

//     case DEPOSIT_SUCCESS:
//       return {
//         ...state,
//         user: {
//           ...state.user,
//           Banking: {
//             ...state.user.Banking,
//             zen_balance: action.payload.zen_balance,
//             loan_money: action.payload.loan_money
//           }
//         }
//       };

//     case LOAN_SUCCESS:
//       return {
//         ...state,
//         user: {
//           ...state.user,
//           Banking: { ...state.user.Banking, loan_money: action.payload.loan_money }
//         }
//       };

//     case TRANSFER_SUCCESS:
//     case WITHDRAW_SUCCESS:
//       return {
//         ...state,
//         user: {
//           ...state.user,
//           Banking: { ...state.user.Banking, zen_balance: action.payload.zen_balance }
//         }
//       };

//     case BUY_CREDIT_SUCCESS:
//       return {
//         ...state,
//         user: {
//           ...state.user,
//           Credits: { ...state.user.MembCredits, credits: action.payload.credits }
//         }
//       };

//     case LOGOUT:
//       return { ...initialState };

//     default:
//       return state;
//   }
// };
