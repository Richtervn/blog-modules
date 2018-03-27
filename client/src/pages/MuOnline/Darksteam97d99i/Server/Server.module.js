export const serverPages = [
  { name: 'Bag Items Editor', icon: 'magic', route: 'bag_items_editor' },
  { name: 'Monsters Set Base', icon: 'drupal', route: 'monsters_set_base' },
  { name: 'Quests Editor', icon: 'first-order', route: 'quests_editor' },
  { name: 'Shops Editor', icon: 'shopping-cart', route: 'shops_editor' },
  { name: 'Game Setting', icon: 'gear', route: 'game_setting' },
  { name: 'Server Info', icon: 'info-circle', route: 'server_info' }
];

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
