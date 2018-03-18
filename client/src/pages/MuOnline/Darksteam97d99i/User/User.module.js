import { actionCreator } from 'helpers';
import services from '../Darksteam97d99i.services';
import { toastStrong, toastError, toastSuccess } from 'common/Toast';

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

export const login = formBody => actionCreator(LOGIN, services.login, formBody)();
export const register = formBody => actionCreator(REGISTER, services.register, formBody)();
export const recoverPassword = id => actionCreator(RECOVER_PASSWORD, services.recoverPassword, id)();
export const getCurrentUser = actionCreator(GET_CURRENT_USER, services.getCurrentUser);

const initialState = {
  user: null,
  lostPassword: '',
  isCheckedCurrentUser: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${LOGIN}_SUCCESS`:
      toastStrong(action.data.memb___id, 'Welcome');
      return { ...state, user: action.data };
    case `${REGISTER}_SUCCESS`:
      toastStrong('Register successful');
      return { ...state, isRegistered: true };
    case `${RECOVER_PASSWORD}_SUCCESS`:
      toastSuccess('Password recovered');
      return { ...state, lostPassword: action.data.memb__pwd };
    case `${GET_CURRENT_USER}_SUCCESS`:
      if (!action.data.memb___id) {
        return { state, isCheckedCurrentUser: true };
      }
      return { ...state, user: action.data, isCheckedCurrentUser: true };

    case `${LOGIN}_FAIL`:
    case `${REGISTER}_FAIL`:
    case `${RECOVER_PASSWORD}_FAIL`:
      toastError(action.error);
      return state;
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

// const REGISTER_START = 'darksteam97d99i/user/REGISTER_START';
// export const REGISTER_SUCCESS = 'darksteam97d99i/user/REGISTER_SUCCESS';
// const REGISTER_FAIL = 'darksteam97d99i/user/REGISTER_FAIL';

// const LOGIN_START = 'darksteam97d99i/user/LOGIN_START';
// export const LOGIN_SUCCESS = 'darksteam97d99i/user/LOGIN_SUCCESS';
// const LOGIN_FAIL = 'darksteam97d99i/user/LOGIN_FAIL';

// const EDIT_PROFILE_START = 'darksteam97d99i/user/EDIT_PROFILE_START';
// const EDIT_PROFILE_FAIL = 'darksteam97d99i/user/EDIT_PROFILE_FAIL';
// const EDIT_PROFILE_SUCCESS = 'darksteam97d99i/user/EDIT_PROFILE_SUCCESS';

// const BUY_VIP_START = 'darksteam97d99i/user/BUY_VIP_START';
// export const BUY_VIP_SUCCESS = 'darksteam97d99i/user/BUY_VIP_SUCCESS';
// const BUY_VIP_FAIL = 'darksteam97d99i/user/BUY_VIP_FAIL';

// export const editProfile = formBody =>
//   actionCreator(
//     EDIT_PROFILE_START,
//     EDIT_PROFILE_SUCCESS,
//     EDIT_PROFILE_FAIL,
//     darksteam97d99i.editProfile,
//     formBody
//   )();

// export const LOGOUT = 'darksteam97d99i/LOGOUT';

// export const logout = () => ({ type: LOGOUT });
// export const register = formBody =>
//   actionCreator(
//     REGISTER_START,
//     REGISTER_SUCCESS,
//     REGISTER_FAIL,
//     darksteam97d99i.register,
//     formBody
//   )();
// export const login = formBody =>
//   actionCreator(LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL, darksteam97d99i.login, formBody)();

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
//     case LOGIN_SUCCESS:
//       socket.emit('darksteam97d99i/USER_LOGGED_IN', action.data.memb___id);
//       break;
//     case EDIT_PROFILE_SUCCESS:
//       socket.emit('darksteam97d99i/CHECK_POINT_QUEST', 'WQ1');
//       break;
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
//       toast.success(`Welcome ${action.data.memb___id}`, {
//         position: toast.POSITION.BOTTOM_LEFT,
//         className: 'toast-success'
//       });
//       return {
//         ...state,
//         user: action.data,
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
//           MembCredits: { ...state.user.MembCredits, credits: action.data.credits }
//         }
//       };

//     case RESET_QUEST_SUCCESS:
//     case ADD_POINT_SUCCESS:
//       if (action.data.isUseBank == 'true') {
//         return {
//           ...state,
//           user: {
//             ...state.user,
//             Banking: { ...state.user.Banking, zen_balance: action.data.zen_balance }
//           }
//         };
//       }
//       return state;
//     case GRAND_RESET_SUCCESS:
//     case RESET_SUCCESS:
//       if (action.data.isUseBank == 'true') {
//         return {
//           ...state,
//           user: {
//             ...state.user,
//             Banking: { ...state.user.Banking, zen_balance: action.data.zen_balance },
//             MembCredits: { ...state.user.MembCredits, credits: action.data.credits }
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
//             zen_balance: action.data.zen_balance,
//             loan_money: action.data.loan_money
//           }
//         }
//       };

//     case LOAN_SUCCESS:
//       return {
//         ...state,
//         user: {
//           ...state.user,
//           Banking: { ...state.user.Banking, loan_money: action.data.loan_money }
//         }
//       };

//     case TRANSFER_SUCCESS:
//     case WITHDRAW_SUCCESS:
//       return {
//         ...state,
//         user: {
//           ...state.user,
//           Banking: { ...state.user.Banking, zen_balance: action.data.zen_balance }
//         }
//       };

//     case BUY_CREDIT_SUCCESS:
//       return {
//         ...state,
//         user: {
//           ...state.user,
//           Credits: { ...state.user.MembCredits, credits: action.data.credits }
//         }
//       };

//     case EDIT_PROFILE_SUCCESS:
//       return { ...state, user: { ...state.user, ...action.data } };
//     case LOGOUT:
//       return { ...initialState };
//     case REFRESH_QUEST_LIST: {
//       const nextState = { ...state };
//       if (action.data.credits) {
//         nextState.user.MembCredits.credits = action.data.credits;
//       }
//       if (action.data.zen_balance) {
//         nextState.user.Banking.zen_balance = action.data.zen_balance;
//       }
//       return {
//         ...state,
//         user: {
//           ...state.user,
//           Credits: { ...state.user.MembCredits },
//           Banking: { ...state.user.Banking }
//         }
//       };
//     }
//     default:
//       return state;
//   }
// };
