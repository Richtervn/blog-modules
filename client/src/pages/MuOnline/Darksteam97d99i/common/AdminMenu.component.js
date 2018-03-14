import _ from 'underscore';
import React from 'react';
import { Redirect } from 'react-router-dom';
import { MenuSideBar } from 'components/SideBars';

const adminPages = [
  { name: 'Accounts Manager', icon: 'user', route: 'accounts_manager' },
  { name: 'Characters Manager', icon: 'users', route: 'characters_manager' }
];

export default ({ activePage, onSetPage }) => {
  if (!_.contains(_.pluck(adminPages, 'route'), activePage)) {
    return <Redirect to="/404" />;
  }
  return (
    <MenuSideBar
      menus={adminPages}
      customClass="ds9799-side-nav-menu"
      activeMenu={activePage}
      onClick={menu => onSetPage(menu.route)}
      prefix="/darksteam_97d99i/admin/"
    />
  );
};
