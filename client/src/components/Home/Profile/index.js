import React from 'react';
import ProfilePanel from './ProfilePanel';
import ProfileView from './ProfileView';

export default ({ menu, activeGroup, activeItem, setActiveGroup, setDeactiveGroup, setActiveItem, getMenu }) => {
  if (!menu) {
    getMenu();
    return null;
  }
  return (
    <div className="container profile-container">
      <div className="row profile-container">
        <div className="col profile-container">
          <ProfilePanel
            menu={menu}
            activeGroup={activeGroup}
            activeItem={activeItem}
            setActiveGroup={setActiveGroup}
            setActiveItem={setActiveItem}
            setDeactiveGroup={setDeactiveGroup}
          />
        </div>
        <div className="col-9 profile-container"> <ProfileView activeItem={activeItem} activeGroup={activeGroup}/></div>
      </div>
    </div>
  );
};

