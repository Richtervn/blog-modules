import React from 'react';

import SideNavMenu from './SideNavMenu';
import UserPages from './UserPages';

export default ({ user, userPage, activeSideForm, onChangeActiveSideForm, onRegister, onLogin, onLogout }) => (
  <div className="row no-row-margin">
    <div className="col-3 no-col-margin">
      <SideNavMenu
        user={user}
        activeForm={activeSideForm}
        onChangeActiveForm={onChangeActiveSideForm}
        onRegister={onRegister}
        onLogin={onLogin}
        onLogout={onLogout}
      />
    </div>
    <div className="col-9 no-col-margin">
      <UserPages user={user} page={userPage}/>
    </div>
  </div>
);
