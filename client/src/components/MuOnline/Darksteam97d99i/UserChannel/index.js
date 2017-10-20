import React from 'react';

import SideNavMenu from 'containers/MuOnline/Darksteam97d99i/UserChannel/SideNavMenu';
import UserPages from 'containers/MuOnline/Darksteam97d99i/UserChannel/UserPages';

export default () => (
  <div className="row no-row-margin">
    <div className="col-3 no-col-margin">
      <SideNavMenu/>
    </div>
    <div className="col-9 no-col-margin">
      <UserPages/>
    </div>
  </div>
)