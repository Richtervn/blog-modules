import './SideNavBar.css';
import React from 'react';

import UserMenu from './UserMenu.container';
import ServerMenu from './ServerMenu.container';
import AdminMenu from './AdminMenu.container';

export default ({ activeTab, activePage }) => (
  <div className="ds9799-side-nav">
    {activeTab === 'user' && <UserMenu />}
    {activeTab === 'admin' && <AdminMenu />}
    {activeTab === 'server' && <ServerMenu />}
  </div>
);
