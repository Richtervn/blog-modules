import React from 'react';

import SideNavMenu from '../AdminChannel/SideNavMenu';

const menuList = ['Monster Set Base', 'Shop Editor', 'Bag Items Editor'];

export default ({ page, onChangePage }) => (
  <div className="row no-row-margin">
    <div className="col-3 no-col-margin">
      <SideNavMenu items={menuList} activeItem={page} onSelectItem={onChangePage} />
    </div>
    <div className="col-9 no-col-margin" />
  </div>
);
