import React from 'react';
import MenuGroup from 'components/SideNavBar/MenuGroup';

export default ({ menu, activeGroup, activeItem, setActiveGroup, setDeactiveGroup, setActiveItem }) =>
  <div className="profile-panel">
    <div className="profile-image">
      <img className="profile-avatar" src="http://localhost:3000/Profile/image.jpg" />
    </div>
    <div className="profile-channel">
      {Object.keys(menu).map(key =>
        <MenuGroup
          key={key}
          name={key}
          isGroupActive={activeGroup == key}
          activeItem={activeItem}
          items={menu[key]}
          setActiveGroup={() => setActiveGroup(key)}
          setDeactiveGroup={setDeactiveGroup}
          setActiveItem={setActiveItem}
        />
      )}
    </div>
  </div>;
