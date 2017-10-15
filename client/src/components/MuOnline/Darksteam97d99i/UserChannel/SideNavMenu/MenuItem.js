import React from 'react';

export default ({ item, isActive, onSelect }) => {
  let icon = '';
  switch (item) {
    case 'Dash Board':
      icon = 'fa-dashboard';
      break;
    case 'Character Manager':
      icon = 'fa-users';
      break;
    case 'Banking Manager':
      icon = 'fa-bank';
      break;
    case 'Vip Manager':
      icon = 'fa-credit-card';
      break;
    case 'Web Shop':
      icon = 'fa-shopping-cart';
      break;
    case 'Web Quest':
      icon = 'fa-diamond';
      break;
    default:
      break;
  }

  return (
    <div
      className={isActive ? 'ds9799-user-menu-item ds9799-user-menu-item-active' : 'ds9799-user-menu-item'}
      onClick={() => onSelect(item)}>
      <div className="ds9799-user-menu-item-label">
        <i className={`fa ${icon} fa-fw ds9799-user-menu-item-icon`} />
        {item}
      </div>
    </div>
  );
};
