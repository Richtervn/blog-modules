import { actionCreator } from 'helpers';
import services from '../Darksteam97d99i.services';

export const serverPages = [
  { name: 'Bag Items Editor', icon: 'magic', route: 'bag_items_editor' },
  { name: 'Monsters Set Base', icon: 'drupal', route: 'monsters_set_base' },
  { name: 'Quests Editor', icon: 'first-order', route: 'quests_editor' },
  { name: 'Shops Editor', icon: 'shopping-cart', route: 'shops_editor' },
  { name: 'Game Setting', icon: 'gear', route: 'game_setting' },
  { name: 'Server Info', icon: 'info-circle', route: 'server_info' },
  { name: 'Banking Logs', icon: 'bank', route: 'banking_logs'}
];

const GET_DATA = 'darksteam97d99i/server/GET_DATA';

export const getData = fileName => actionCreator(GET_DATA, services.getServerData, fileName)();

const initialState = { data: {} };

export default (state = initialState, action) => {
  switch (action.type) {
    case `${GET_DATA}_SUCCESS`:
      return { ...state, data: { ...state.data, [action.params['0']]: action.data } };
    default:
      return state;
  }
};
