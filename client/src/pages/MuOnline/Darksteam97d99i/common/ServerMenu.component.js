import _ from 'underscore';
import React from 'react';
import { Redirect } from 'react-router-dom';

import { MenuSideBar } from 'components/SideBars';

const serverPages = [
  { name: 'Bag Items Editor', icon: 'magic', route: 'bag_items_editor' },
  { name: 'Monsters Set Base', icon: 'drupal', route: 'monsters_set_base' },
  { name: 'Quests Editor', icon: 'first-order', route: 'quests_editor' },
  { name: 'Shops Editor', icon: 'shopping-cart', route: 'shops_editor' },
  { name: 'Game Setting', icon: 'gear', route: 'game_setting' },
  { name: 'Server Info', icon: 'info-circle', route: 'server_info' }
];

export default ({ activePage, onSetPage }) => {
  if (!_.contains(_.pluck(serverPages, 'route'), activePage)) {
    return <Redirect to="/404" />;
  }
  return (
    <MenuSideBar
      menus={serverPages}
      customClass="ds9799-side-nav-menu"
      activeMenu={activePage}
      onClick={menu => onSetPage(menu.route)}
      prefix="/darksteam_97d99i/server/"
    />
  );
};
