import React from 'react';

import SideNavMenu from 'containers/MuOnline/Darksteam97d99i/AdminChannel/SideNavMenu';
import AdminPages from 'containers/MuOnline/Darksteam97d99i/AdminChannel/AdminPages';

export default () => (
  <div className="row no-row-margin">
    <div className="col-3 no-col-margin">
      <SideNavMenu/>
    </div>
    <div className="col-9 no-col-margin">
      <AdminPages/>
    </div>
  </div>
);
