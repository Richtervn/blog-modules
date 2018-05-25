import { actionCreator } from 'helpers';
import services from '../Darksteam97d99i.services';
import { toastStrong, toastSuccess } from 'common/Toast';

export const adminPages = [
  { name: 'Accounts Manager', icon: 'user', route: 'accounts_manager' },
  { name: 'Characters Manager', icon: 'users', route: 'characters_manager' },
  { name: 'Banking Manager', icon: 'bank', route: 'banking_manager' },
  { name: 'Credits Manager', icon: 'credit-card', route: 'credits_manager' },
  { name: 'Vip Packages Manager', icon: 'gift', route: 'vip_packages' },
  { name: 'Web Shop Manager', icon: 'shopping-cart', route: 'web_shop_manager' },
  { name: 'Luxury Shop Manager', icon: 'magic', route: 'luxury_shop_manager' }
];

const GET_ACCOUNTS = 'darksteam97d99i/Admin/GET_ACCOUNTS';
const GET_ACCOUNT_DETAIL = 'darksteam97d99i/Admin/GET_ACCOUNT_DETAIL';
const ADD_ACCOUNT = 'darksteam97d99i/Admin/ADD_ACCOUNT';
const EDIT_ACCOUNT = 'darksteam97d99i/Admin/EDIT_ACCOUNT';
const DELETE_ACCOUNT = 'darksteam97d99i/Admin/DELETE_ACCOUNT';
const SEARCH_ACCOUNT = 'darksteam97d99i/Admin/SEARCH_ACCOUNT';
const CLEAR_ACCOUNT_DETAIL = 'darksteam97d99i/Admin/CLEAR_ACCOUNT_DETAIL';

const GET_CHARACTERS = 'darksteam97d99i/Admin/GET_CHARACTERS';
const GET_CHARACTER_DETAIL = 'darksteam97d99i/Admin/GET_CHARACTER_DETAIL';
const ADD_CHARACTER = 'darksteam97d99i/Admin/ADD_CHARACTER';
const EDIT_CHARACTER = 'darksteam97d99i/Admin/EDIT_CHARACTER';
const DELETE_CHARACTER = 'darksteam97d99i/Admin/DELETE_CHARACTER';
const SEARCH_CHARACTER = 'darksteam97d99i/Admin/SEARCH_CHARACTER';
const CLEAR_CHARACTER_DETAIL = 'darksteam97d99i/Admin/CLEAR_CHARACTER_DETAIL';

const GET_BANKINGS = 'darksteam97d99i/Admin/GET_BANKINGS';
const ADD_BANKING = 'darksteam97d99i/Admin/ADD_BANKING';
const EDIT_BANKING = 'darksteam97d99i/Admin/EDIT_BANKING';
const DELETE_BANKING = 'darksteam97d99i/Admin/DELETE_BANKING';

const GET_CREDITS = 'darksteam97d99i/Admin/GET_CREDITS';
const ADD_CREDIT = 'darksteam97d99i/Admin/ADD_CREDIT';
const EDIT_CREDIT = 'darksteam97d99i/Admin/EDIT_CREDIT';
const DELETE_CREDIT = 'darksteam97d99i/Admin/DELETE_CREDIT';

const GET_VIP_PACKAGES = 'darksteam97d99i/Admin/GET_VIP_PACKAGES';
const ADD_VIP_PACKAGE = 'darksteam97d99i/Admin/ADD_VIP_PACKAGE';
const EDIT_VIP_PACKAGE = 'darksteam97d99i/Admin/EDIT_VIP_PACKAGE';
const DELETE_VIP_PACKAGE = 'darksteam97d99i/Admin/DELETE_VIP_PACKAGE';

export const getAccounts = () => actionCreator(GET_ACCOUNTS, services.adminGetAccounts, { payload: { query: {} } })();
export const getAccountDetail = id =>
  actionCreator(GET_ACCOUNT_DETAIL, services.adminGetAccountDetail, { payload: { id } })();
export const searchAccounts = query =>
  actionCreator(SEARCH_ACCOUNT, services.adminGetAccounts, { payload: { query } })();
export const addAccount = formBody => actionCreator(ADD_ACCOUNT, services.adminAddAccount, { payload: { formBody } })();
export const editAccount = formBody =>
  actionCreator(EDIT_ACCOUNT, services.adminEditAccount, { payload: { formBody } })();
export const deleteAccount = id => actionCreator(DELETE_ACCOUNT, services.adminDeleteAccount, { payload: { id } })();
export const clearAccountDetail = () => ({ type: CLEAR_ACCOUNT_DETAIL });

export const getCharacters = () =>
  actionCreator(GET_CHARACTERS, services.adminGetCharacters, { payload: { query: {} } })();
export const getCharacterDetail = id =>
  actionCreator(GET_CHARACTER_DETAIL, services.adminGetCharacterDetail, { payload: { id } })();
export const searchCharacters = query =>
  actionCreator(SEARCH_CHARACTER, services.adminGetCharacters, { payload: { query } })();
export const addCharacter = formBody =>
  actionCreator(ADD_CHARACTER, services.adminAddCharacter, { payload: { formBody } })();
export const editCharacter = formBody =>
  actionCreator(EDIT_ACCOUNT, services.adminEditCharacter, { payload: { formBody } })();
export const deleteCharacter = id =>
  actionCreator(DELETE_CHARACTER, services.adminDeleteCharacter, { payload: { id } })();
export const clearCharacterDetail = () => ({ type: CLEAR_CHARACTER_DETAIL });

export const getBankings = () => actionCreator(GET_BANKINGS, services.adminGetBankings)();
export const addBanking = formBody => actionCreator(ADD_BANKING, services.adminAddBanking, { payload: { formBody } })();
export const editBanking = formBody =>
  actionCreator(EDIT_BANKING, services.adminEditBanking, { payload: { formBody } })();
export const deleteBanking = id => actionCreator(DELETE_BANKING, services.adminDeleteBanking, { payload: { id } })();

export const getCredits = () => actionCreator(GET_CREDITS, services.adminGetCredits)();
export const addCredit = formBody => actionCreator(ADD_CREDIT, services.adminAddCredit, { payload: { formBody } })();
export const editCredit = formBody => actionCreator(EDIT_CREDIT, services.adminEditCredit, { payload: { formBody } })();
export const deleteCredit = id => actionCreator(DELETE_CREDIT, services.adminDeleteCredit, { payload: { id } })();

export const getVipPackages = () => actionCreator(GET_VIP_PACKAGES, services.getVipPackages)();
export const addVipPackage = formBody =>
  actionCreator(ADD_VIP_PACKAGE, services.addVipPackages, { payload: { formBody } })();
export const editVipPackage = formBody =>
  actionCreator(EDIT_VIP_PACKAGE, services.editVipPackage, { payload: { formBody } })();
export const deleteVipPackage = id =>
  actionCreator(DELETE_VIP_PACKAGE, services.deleteVipPackage, { payload: { id } })();

const initialState = {
  accounts: null,
  accountDetail: {},
  characters: null,
  characterDetail: {},
  bankings: null,
  credits: null,
  vipPackages: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${GET_ACCOUNTS}_SUCCESS`:
      return { ...state, accounts: action.payload };
    case `${GET_ACCOUNT_DETAIL}_SUCCESS`:
      return { ...state, accountDetail: action.payload };
    case `${SEARCH_ACCOUNT}_SUCCESS`:
      return { ...state, accounts: action.payload };
    case `${ADD_ACCOUNT}_SUCCESS`:
      state.accounts.push(action.payload.memb___id);
      toastStrong(action.payload.memb___id, 'Added');
      return { ...state, accounts: state.accounts.slice(0) };
    case `${EDIT_ACCOUNT}_SUCCESS`:
      toastStrong(action.payload.memb___id, 'Edited');
      return { ...state, accountDetail: action.payload };
    case `${DELETE_ACCOUNT}_SUCCESS`:
      state.accounts = state.accounts.filter(account => account.memb___id !== action.payload.id);
      return { ...state, accounts: state.accounts.slice(0), accountDetail: {} };
    case CLEAR_ACCOUNT_DETAIL:
      return { ...state, accountDetail: {} };

    case `${GET_CHARACTERS}_SUCCESS`:
      return { ...state, characters: action.payload };
    case `${GET_CHARACTER_DETAIL}_SUCCESS`:
      return { ...state, characterDetail: action.payload };
    case `${SEARCH_CHARACTER}_SUCCESS`:
      return { ...state, characters: action.payload };
    case `${ADD_CHARACTER}_SUCCESS`:
      state.characters.push(action.payload);
      toastStrong(action.payload.Name, 'Added');
      return { ...state, characters: state.characters.slice(0) };
    case `${EDIT_CHARACTER}_SUCCESS`:
      toastStrong(action.payload.Name, 'Edited');
      return { ...state, characterDetail: action.payload };
    case `${DELETE_CHARACTER}_SUCCESS`:
      toastStrong(action.payload.Name, 'Deleted');
      state.characters = state.characters.filter(char => char.Name !== action.payload.id);
      return { ...state, characters: state.characters.slice(0), characterDetail: {} };
    case CLEAR_CHARACTER_DETAIL:
      return { ...state, characterDetail: {} };

    case `${GET_BANKINGS}_SUCCESS`:
      return { ...state, bankings: action.payload };
    case `${ADD_BANKING}_SUCCESS`:
      state.bankings.push(action.payload);
      toastSuccess('Add banking success');
      return { ...state, bankings: state.bankings.slice(0) };
    case `${EDIT_BANKING}_SUCCESS`:
      state.bankings = state.bankings.map(banking => {
        if (banking.memb___id === action.payload.memb___id) {
          return action.payload;
        }
        return banking;
      });
      toastSuccess('Edit banking success');
      return { ...state, banking: state.bankings.slice(0) };
    case `${DELETE_BANKING}_SUCCESS`:
      state.bankings = state.bankings.filter(banking => banking.memb___id !== action.payload.id);
      toastSuccess('Delete banking success');
      return { ...state, banking: state.banking.slice(0) };

    case `${GET_CREDITS}_SUCCESS`:
      return { ...state, credits: action.payload };
    case `${EDIT_CREDIT}_SUCCESS`:
      state.credits = state.credits.map(credit => {
        if (credit.memb___id === action.payload.memb___id) {
          return action.payload;
        }
        return credit;
      });
      toastSuccess('Edit credit success');
      return { ...state, credits: state.credits.slice(0) };
    case `${ADD_CREDIT}_SUCCESS`:
      state.credits.push(action.payload);
      toastSuccess('Add credit success');
      return { ...state, credits: state.credits.slice(0) };
    case `${DELETE_CREDIT}_SUCCESS`:
      toastSuccess('Delete credit success');
      state.credits = state.credits.filter(credit => credit.memb___id !== action.payload.id);
      return { ...state, credits: state.credits.slice(0) };

    case `${GET_VIP_PACKAGES}_SUCCESS`:
      return { ...state, vipPackages: action.payload };
    case `${ADD_VIP_PACKAGE}_SUCCESS`:
      toastStrong(action.payload.name, 'Added');
      state.vipPackages.push(action.payload);
      return { ...state, vipPackages: state.vipPackages.slice(0) };
    case `${EDIT_VIP_PACKAGE}_SUCCESS`:
      toastSuccess('Package edited');
      state.vipPackages = state.vipPackages.map(pack => {
        if (pack.id === action.payload.id) {
          return action.payload;
        }
        return pack;
      });
      return { ...state, vipPackages: state.vipPackages.slice(0) };
    case `${DELETE_VIP_PACKAGE}_SUCCESS`:
      toastSuccess('Package deleted');
      state.vipPackages = state.vipPackages.filter(pack => pack.id !== action.payload.id);
      return { ...state, vipPackages: state.vipPackages.slice(0) };

    default:
      return state;
  }
};
