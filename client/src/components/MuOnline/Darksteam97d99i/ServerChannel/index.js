import React from 'react';

import SideNavMenu from '../AdminChannel/SideNavMenu';
import ServerPages from './ServerPages';

const menuList = ['Monster Set Base', 'Shop Editor', 'Bag Items Editor', 'Quest Editor', 'Server Info'];

export default ({ page, onChangePage, data, onGetData }) => (
  <div className="row no-row-margin">
    <div className="col-3 no-col-margin">
      <SideNavMenu items={menuList} activeItem={page} onSelectItem={onChangePage} />
    </div>
    <div className="col-9 no-col-margin">
      <ServerPages page={page} data={data} onGetData={onGetData} />
    </div>
  </div>
);
