import React from 'react';

export default ({ items, activeItem, onSelectItem }) => (
  <div className="ds9799-user-sidenav">
    <div className="ds9799-user-menu">
      {items.map((item, i) => (
        <div
          key={i}
          className={
            item == activeItem ? (
              'ds9799-user-menu-item ds9799-user-menu-item-active'
            ) : (
              'ds9799-user-menu-item'
            )
          }
          onClick={() => onSelectItem(item)}>
          <div className="ds9799-user-menu-item-label">{item}</div>
        </div>
      ))}
    </div>
  </div>
);
