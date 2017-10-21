import React from 'react';

import SideNavMenu from 'containers/MuOnline/Darksteam97d99i/ServerChannel/SideNavMenu';
import ServerPages from 'containers/MuOnline/Darksteam97d99i/ServerChannel/ServerPages';

export default () => (
  <div className="row no-row-margin">
    <div className="col-3 no-col-margin">
      <SideNavMenu/>
    </div>
    <div className="col-9 no-col-margin">
      <ServerPages/>
    </div>
  </div>
);
