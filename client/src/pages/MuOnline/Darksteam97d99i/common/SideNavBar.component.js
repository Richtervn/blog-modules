import './SideNavBar.css';
import React from 'react';

import UserMenu from './UserMenu.container';

export default ({ activeTab, activePage }) => (
  <div className="ds9799-side-nav">
    {activeTab === 'user' && <UserMenu/>}
  </div>
);
