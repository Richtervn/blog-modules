import { actionCreator } from 'helpers';
import services from '../Darksteam97d99i.services';
import { toastSuccess } from 'common/Toast';

export const serverPages = [
  { name: 'Bag Items Editor', icon: 'magic', route: 'bag_items_editor' },
  { name: 'Monsters Set Base', icon: 'drupal', route: 'monsters_set_base' },
  { name: 'Quests Editor', icon: 'first-order', route: 'quests_editor' },
  { name: 'Shops Editor', icon: 'shopping-cart', route: 'shops_editor' },
  { name: 'Game Setting', icon: 'gear', route: 'game_setting' },
  { name: 'Server Info', icon: 'info-circle', route: 'server_info' },
  { name: 'Banking Logs', icon: 'bank', route: 'banking_logs' },
  { name: 'Web Quests Editor', icon: 'diamond', route: 'web_quests_editor' },
  { name: 'Monsters List', icon: 'qq', route: 'monsters_list' },
  { name: 'Items List', icon: 'fire', route: 'items_list' }
];

const GET_DATA = 'ds9799_server/GET_DATA';
const GET_BANKING_LOGS = 'ds9799_server/GET_BANKING_LOGS';
const GET_WEB_QUESTS = 'ds9799_server/GET_WEB_QUESTS';
const EDIT_WEB_QUESTS = 'ds9799_server/EDIT_WEB_QUESTS';
const GET_ITEMS = 'ds9799_server/GET_ITEMS';
const GET_MONSTERS = 'ds9799_server/GET_MONSTERS';

export const getData = fileName => actionCreator(GET_DATA, services.getServerData, { payload: { fileName } })();
export const getBankingLogs = () => actionCreator(GET_BANKING_LOGS, services.adminGetBankingsLogs)();
export const getWebQuests = () => actionCreator(GET_WEB_QUESTS, services.getWebQuests)();
export const editWebQuests = formBody =>
  actionCreator(EDIT_WEB_QUESTS, services.editWebQuests, { payload: { formBody } })();

export const getItems = query => actionCreator(GET_ITEMS, services.getItems, { payload: { query } })();
export const getMonsters = () => actionCreator(GET_MONSTERS, services.getMonsters)();

const initialState = { data: {}, bankingLogs: null, webQuests: null };

export default (state = initialState, action) => {
  switch (action.type) {
    case `${GET_DATA}_SUCCESS`:
      return { ...state, data: { ...state.data, [action.params.fileName]: action.payload } };
    case `${GET_BANKING_LOGS}_SUCCESS`:
      return { ...state, bankingLogs: action.payload };
    case `${GET_WEB_QUESTS}_SUCCESS`:
      return { ...state, webQuests: action.payload };
    case `${EDIT_WEB_QUESTS}_SUCCESS`:
      toastSuccess('Saved Web quests success');
      return { ...state, webQuests: action.payload };
    case `${GET_MONSTERS}_SUCCESS`:
      return { ...state, data: { ...state.data, Monsters: action.payload } };
    case `${GET_ITEMS}_SUCCESS`:
      return { ...state, data: { ...state.data, ...action.payload } };
    default:
      return state;
  }
};
