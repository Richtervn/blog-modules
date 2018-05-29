import { actionCreator } from 'helpers';
import services from '../Darksteam97d99i.services';
import { toastStrong, toastSuccess } from 'common/Toast';
import { hideModal } from 'common/Modal';

export const adminPages = [
  { name: 'Accounts Manager', icon: 'user', route: 'accounts_manager' },
  { name: 'Characters Manager', icon: 'users', route: 'characters_manager' },
  { name: 'Banking Manager', icon: 'bank', route: 'banking_manager' },
  { name: 'Credits Manager', icon: 'credit-card', route: 'credits_manager' },
  { name: 'Vip Packages Manager', icon: 'gift', route: 'vip_packages' },
  { name: 'Web Shop Manager', icon: 'shopping-cart', route: 'web_shop_manager' },
  { name: 'Luxury Shop Manager', icon: 'magic', route: 'luxury_shop_manager' }
];

const GET_ACCOUNTS = 'ds9799_admin/GET_ACCOUNTS';
const GET_ACCOUNT_DETAIL = 'ds9799_admin/GET_ACCOUNT_DETAIL';
const ADD_ACCOUNT = 'ds9799_admin/ADD_ACCOUNT';
const EDIT_ACCOUNT = 'ds9799_admin/EDIT_ACCOUNT';
const DELETE_ACCOUNT = 'ds9799_admin/DELETE_ACCOUNT';
const SEARCH_ACCOUNT = 'ds9799_admin/SEARCH_ACCOUNT';
const CLEAR_ACCOUNT_DETAIL = 'ds9799_admin/CLEAR_ACCOUNT_DETAIL';

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

const GET_CHARACTERS = 'ds9799_admin/GET_CHARACTERS';
const GET_CHARACTER_DETAIL = 'ds9799_admin/GET_CHARACTER_DETAIL';
const ADD_CHARACTER = 'ds9799_admin/ADD_CHARACTER';
const EDIT_CHARACTER = 'ds9799_admin/EDIT_CHARACTER';
const DELETE_CHARACTER = 'ds9799_admin/DELETE_CHARACTER';
const SEARCH_CHARACTER = 'ds9799_admin/SEARCH_CHARACTER';
const CLEAR_CHARACTER_DETAIL = 'ds9799_admin/CLEAR_CHARACTER_DETAIL';

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

const GET_BANKINGS = 'ds9799_admin/GET_BANKINGS';
const ADD_BANKING = 'ds9799_admin/ADD_BANKING';
const EDIT_BANKING = 'ds9799_admin/EDIT_BANKING';
const DELETE_BANKING = 'ds9799_admin/DELETE_BANKING';

export const getBankings = () => actionCreator(GET_BANKINGS, services.adminGetBankings)();
export const addBanking = formBody => actionCreator(ADD_BANKING, services.adminAddBanking, { payload: { formBody } })();
export const editBanking = formBody =>
  actionCreator(EDIT_BANKING, services.adminEditBanking, { payload: { formBody } })();
export const deleteBanking = id => actionCreator(DELETE_BANKING, services.adminDeleteBanking, { payload: { id } })();

const GET_CREDITS = 'ds9799_admin/GET_CREDITS';
const ADD_CREDIT = 'ds9799_admin/ADD_CREDIT';
const EDIT_CREDIT = 'ds9799_admin/EDIT_CREDIT';
const DELETE_CREDIT = 'ds9799_admin/DELETE_CREDIT';

export const getCredits = () => actionCreator(GET_CREDITS, services.adminGetCredits)();
export const addCredit = formBody => actionCreator(ADD_CREDIT, services.adminAddCredit, { payload: { formBody } })();
export const editCredit = formBody => actionCreator(EDIT_CREDIT, services.adminEditCredit, { payload: { formBody } })();
export const deleteCredit = id => actionCreator(DELETE_CREDIT, services.adminDeleteCredit, { payload: { id } })();

const GET_VIP_PACKAGES = 'ds9799_admin/GET_VIP_PACKAGES';
const ADD_VIP_PACKAGE = 'ds9799_admin/ADD_VIP_PACKAGE';
const EDIT_VIP_PACKAGE = 'ds9799_admin/EDIT_VIP_PACKAGE';
const DELETE_VIP_PACKAGE = 'ds9799_admin/DELETE_VIP_PACKAGE';

export const getVipPackages = () => actionCreator(GET_VIP_PACKAGES, services.getVipPackages)();
export const addVipPackage = formBody =>
  actionCreator(ADD_VIP_PACKAGE, services.addVipPackages, { payload: { formBody } })();
export const editVipPackage = formBody =>
  actionCreator(EDIT_VIP_PACKAGE, services.editVipPackage, { payload: { formBody } })();
export const deleteVipPackage = id =>
  actionCreator(DELETE_VIP_PACKAGE, services.deleteVipPackage, { payload: { id } })();

const GET_WEB_SHOP_PACKAGES = 'ds9799_admin/GET_WEB_SHOP_PACKAGES';
const ADD_WEB_SHOP_PACKAGE = 'ds9799_admin/ADD_WEB_SHOP_PACKAGE';
const EDIT_WEB_SHOP_PACKAGE = 'ds9799_admin/EDIT_WEB_SHOP_PACKAGE';
const DELETE_WEB_SHOP_PACKAGE = 'ds9799_admin/EDIT_WEB_SHOP_PACKAGE';
const SET_FOCUS_WEB_SHOP_PACKAGE = 'ds9799_admin/SET_FOCUS_WEB_SHOP_PACKAGE';
const SET_FOCUS_WEB_SHOP_CATEGORY = 'ds9799_admin/SET_FOCUS_WEB_SHOP_CATEGORY';

export const getWebShopPackages = id =>
  actionCreator(GET_WEB_SHOP_PACKAGES, services.getWebShopPackages, { payload: { id } })();
export const addWebShopPackage = formBody =>
  actionCreator(ADD_WEB_SHOP_PACKAGE, services.adminAddWebShopPackage, {
    payload: { formBody },
    onAfterSuccess() {
      hideModal();
    }
  })();
export const editWebShopPackage = formBody =>
  actionCreator(EDIT_WEB_SHOP_PACKAGE, services.adminEditWebShopPackage, {
    payload: { formBody },
    onAfterSuccess() {
      hideModal();
    }
  })();
export const deleteWebShopPackage = (id, categoryId) =>
  actionCreator(DELETE_WEB_SHOP_PACKAGE, services.adminDeleteWebShopPackage, { payload: { id } })();
export const setFocusWebShopPackage = pack => ({ type: SET_FOCUS_WEB_SHOP_PACKAGE, pack });
export const setFocusWebShopCategory = categoryId => ({ type: SET_FOCUS_WEB_SHOP_CATEGORY, categoryId });

const GET_EXCHANGES = 'ds9799_admin/GET_EXCHANGES';
const SET_FOCUS_LX_EXCHANGE = 'ds9799_admin/SET_FOCUS_LX_EXCHANGE';
const EDIT_EXCHANGE = 'ds9799_admin/EDIT_EXCHANGE';
const ADD_EXCHANGE = 'ds9799_admin/ADD_EXCHANGE';
const DELETE_EXCHANGE = 'ds9799_admin/DELETE_EXCHANGE';

export const setFocusLxExchange = pack => ({ type: SET_FOCUS_LX_EXCHANGE, pack });
export const getExchanges = () => actionCreator(GET_EXCHANGES, services.getExchanges)();
export const addExchange = formBody =>
  actionCreator(ADD_EXCHANGE, services.adminAddReceipt, { payload: { formBody } })();
export const editExchange = formBody =>
  actionCreator(EDIT_EXCHANGE, services.adminEditExchange, { payload: { formBody } })();
export const deleteExchange = id => actionCreator(DELETE_EXCHANGE, services.adminDeleteExchange, { payload: { id } })();

const GET_CONSUMABLES = 'ds9799_admin/GET_CONSUMABLES';
const SET_FOCUS_LX_CONSUMABLE = 'ds9799_admin/SET_FOCUS_LX_CONSUMABLE';
const ADD_CONSUMABLE = 'ds9799_admin/ADD_CONSUMABLE';
const EDIT_CONSUMABLE = 'ds9799_admin/EDIT_CONSUMABLE';
const DELETE_CONSUMABLE = 'darksteam97d99i/Aadmin/DELETE_CONSUMABLE';

export const setFocusLxConsumable = pack => ({ type: SET_FOCUS_LX_CONSUMABLE, pack });
export const getConsumables = () => actionCreator(GET_CONSUMABLES, services.getConsumables)();
export const addConsumable = formBody =>
  actionCreator(ADD_CONSUMABLE, services.adminAddConsumable, { payload: { formBody } })();
export const editConsumable = formBody =>
  actionCreator(EDIT_CONSUMABLE, services.adminEditConsumable, { payload: { formBody } })();
export const deleteConsumable = id =>
  actionCreator(DELETE_CONSUMABLE, services.adminDeleteConsumable, { payload: { id } })();

const GET_RECEIPTS = 'ds9799_admin/GET_RECEIPTS';
const SET_FOCUS_LX_RECEIPT = 'ds9799_admin/SET_FOCUS_LX_EXCHANGE';
const ADD_RECEIPT = 'ds9799_admin/ADD_RECEIPT';
const EDIT_RECEIPT = 'ds9799_admin/EDIT_RECEIPT';
const DELETE_RECEIPT = 'ds9799_admin/DELETE_RECEIPT';

export const setFocusLxReceipt = pack => ({ type: SET_FOCUS_LX_RECEIPT, pack });
export const getReceipts = () => actionCreator(GET_RECEIPTS, services.getReceipts)();
export const addReceipt = formBody => actionCreator(ADD_RECEIPT, services.adminAddReceipt, { payload: { formBody } })();
export const editReceipt = formBody =>
  actionCreator(EDIT_RECEIPT, services.adminEditReceipt, { payload: { formBody } })();
export const deleteReceipt = id => actionCreator(DELETE_RECEIPT, services.adminDeleteReceipt, { payload: { id } })();

const initialState = {
  accounts: null,
  accountDetail: {},
  characters: null,
  characterDetail: {},
  bankings: null,
  credits: null,
  vipPackages: null,
  webShopCategories: [
    { _id: 0, Name: 'Swords', Icon: 'ws-sword' },
    { _id: 1, Name: 'Axes', Icon: 'ws-axe' },
    { _id: 2, Name: 'Maces', Icon: 'ws-mace' },
    { _id: 3, Name: 'Spears', Icon: 'ws-spear' },
    { _id: 4, Name: 'Bows', Icon: 'ws-bow' },
    { _id: 5, Name: 'Staffs', Icon: 'ws-staff' },
    { _id: 6, Name: 'Shields', Icon: 'ws-shield' },
    { _id: 7, Name: 'Wings', Icon: 'ws-wing' },
    { _id: 8, Name: 'Sets', Icon: 'ws-set' }
  ],
  webShopPackages: {},
  focusWebShopPackage: {},
  focusWebShopCategory: 0,
  consumables: null,
  receipts: null,
  exchanges: null,
  focusLxConsumable: null,
  focusLxExchange: null,
  focusLxReceipt: null
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

    case `${GET_WEB_SHOP_PACKAGES}_SUCCESS`:
      return { ...state, webShopPackages: { ...state.webShopPackages, [action.params.id]: action.payload } };
    case `${ADD_WEB_SHOP_PACKAGE}_SUCCESS`:
      toastStrong(action.payload.name, 'Added');
      state.webShopPackages[action.params.formBody.category_id].push(action.payload);
      return {
        ...state,
        webShopPackages: {
          ...state.webShopPackages,
          [action.params.formBody.category_id]: state.webShopPackages[action.params.formBody.category_id].slice(0)
        }
      };
    case `${EDIT_WEB_SHOP_PACKAGE}_SUCCESS`:
      toastStrong(action.payload.name, 'Edited');
      state.webShopPackages[action.params.formBody.category_id] = state.webShopPackages[
        action.params.formBody.category_id
      ].map(pack => {
        if (parseInt(pack.id, 10) === parseInt(action.payload.id, 10)) {
          return action.payload;
        }
        return pack;
      });
      return {
        ...state,
        webShopPackages: {
          ...state.webShopPackages,
          [action.params.formBody.category_id]: state.webShopPackages[action.params.formBody.category_id].slice(0)
        }
      };
    case `${DELETE_WEB_SHOP_PACKAGE}_SUCCESS`:
      toastSuccess('Package deleted');
      state.webShopPackages[action.params.categoryId] = state.webShopPackages[action.params.categoryId].filter(
        pack => pack.id !== action.payload.id
      );
      return {
        ...state,
        webShopPackages: {
          ...state.webShopPackages,
          [action.params.categoryId]: state.webShopPackages[action.params.categoryId].slice(0)
        }
      };
    case SET_FOCUS_WEB_SHOP_PACKAGE:
      return { ...state, focusWebShopPackage: action.pack };
    case SET_FOCUS_WEB_SHOP_CATEGORY:
      return { ...state, focusWebShopCategory: action.categoryId };

    case `${GET_EXCHANGES}_SUCCESS`:
      return { ...state, exchanges: action.payload };
    case SET_FOCUS_LX_EXCHANGE:
      return { ...state, focusLxExchange: action.pack };
    case `${ADD_EXCHANGE}_SUCCESS`:
      toastStrong(action.payload.name, 'Added');
      state.exchanges.push(action.payload);
      return { ...state, exchanges: state.exchanges.slice(0) };
    case `${EDIT_EXCHANGE}_SUCCESS`:
      toastStrong(action.payload.name, 'Edited');
      state.exchanges = state.exchanges.map(pack => {
        if (pack.id === action.payload.id) {
          return action.payload;
        }
        return pack;
      });
      return { ...state, exchanges: state.exchanges.slice(0) };
    case `${DELETE_EXCHANGE}_SUCCESS`:
      toastSuccess('Deleted Exchange Package');
      state.exchanges = state.exchanges.filter(pack => pack.id !== action.payload.id);
      return { ...state, exchanges: state.exchanges.slice(0) };

    case `${GET_CONSUMABLES}_SUCCESS`:
      return { ...state, consumables: action.payload };
    case SET_FOCUS_LX_CONSUMABLE:
      return { ...state, focusLxConsumable: action.pack };
    case `${ADD_CONSUMABLE}_SUCCESS`:
      toastStrong(action.payload.name, 'Added');
      state.consumables.push(action.payload);
      return { ...state, consumables: state.consumables.slice(0) };
    case `${EDIT_CONSUMABLE}_SUCCESS`:
      toastStrong(action.payload.name, 'Edited');
      state.consumables = state.consumables.map(pack => {
        if (pack.id === action.payload.id) {
          return action.payload;
        }
        return pack;
      });
      return { ...state, consumables: state.consumables.slice(0) };
    case `${DELETE_CONSUMABLE}_SUCCESS`:
      toastSuccess('Deleted Consumable Package');
      state.consumables = state.consumables.flter(pack => pack.id !== action.payload.id);
      return { ...state, consumables: state.consumables.slice(0) };

    case `${GET_RECEIPTS}_SUCCESS`:
      return { ...state, receipts: action.payload };
    case SET_FOCUS_LX_RECEIPT:
      return { ...state, focusLxReceipt: action.pack };
    case `${ADD_RECEIPT}_SUCCESS`:
      toastStrong(action.payload.name, 'Added');
      state.receipts.push(action.payload);
      return { ...state, receipts: state.receipts.slice(0) };
    case `${EDIT_RECEIPT}_SUCCESS`:
      toastStrong(action.payload.name, 'Edited');
      state.receipts = state.receipts.map(pack => {
        if (pack.id === action.payload.id) {
          return action.payload;
        }
        return pack;
      });
      return { ...state, receipts: state.receipts.slice(0) };
    case `${DELETE_RECEIPT}_SUCCESS`:
      toastSuccess('Deleted Receipt Package');
      state.receipts = state.receipts.filter(pack => pack.id !== action.payload.id);
      return { ...state, receipts: state.receipts.slice(0) };

    default:
      return state;
  }
};
