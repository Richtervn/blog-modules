import React from 'react';
import { MenuSideBar } from 'components/SideBars';
import { adminPages } from '../Darksteam97d99i.module';

export default ({ activePage, onSetPage }) => (
  <MenuSideBar
    menus={adminPages}
    customClass="ds9799-side-nav-menu"
    activeMenu={activePage}
    onClick={menu => onSetPage(menu.route)}
    prefix="/darksteam_97d99i/admin/"
  />
);
