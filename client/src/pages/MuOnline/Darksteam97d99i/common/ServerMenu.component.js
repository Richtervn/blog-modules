import React from 'react';

import { serverPages } from '../Server/Server.module';
import { MenuSideBar } from 'components/SideBars';

export default ({ activePage, onSetPage }) => (
  <MenuSideBar
    menus={serverPages}
    customClass="ds9799-side-nav-menu"
    activeMenu={activePage}
    onClick={menu => onSetPage(menu.route)}
    prefix="/darksteam_97d99i/server/"
  />
);
