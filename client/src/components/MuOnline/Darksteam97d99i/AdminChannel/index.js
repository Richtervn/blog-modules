import React from 'react';

import SideNavMenu from './SideNavMenu';
import AdminPages from './AdminPages';

const menuList = [
  'Accounts Manager',
  'Characters Manager',
  'Members Banking Manager',
  'Members Credits Manager',
  'Game Setting Manager'
];

export default ({ page, accounts, onGetAccounts, onChangePage, onSetActiveAccount, focusAccount }) => (
  <div className="row no-row-margin">
    <div className="col-3 no-col-margin">
      <SideNavMenu items={menuList} activeItem={page} onSelectItem={onChangePage} />
    </div>
    <div className="col-9 no-col-margin">
      <AdminPages
        page={page}
        accounts={accounts}
        onGetAccounts={onGetAccounts}
        onSetActiveAccount={onSetActiveAccount}
        activeAccount={focusAccount}
      />
    </div>
  </div>
);