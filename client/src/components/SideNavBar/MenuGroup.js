import React from 'react';
import { defineMenuGroupIcon } from 'utilities';

export default ({ name, isGroupActive, items, setActiveGroup, setDeactiveGroup, setActiveItem, activeItem }) => {
  let groupIcon = defineMenuGroupIcon(name);
  return (
    <div>
      <div
        className="blog-parent-menu"
        data-toggle="collapse"
        href={`#${name}Menu`}
        onClick={isGroupActive ? setDeactiveGroup : setActiveGroup}
        style={{ backgroundColor: isGroupActive ? '#1995AD' : '#021C1E' }}>
        <div className="menu-group-name noselect">
          <i className={`fa ${groupIcon} group-icon`} />
          {name}
          <span className="pull-right group-toggle-icon">
            {!isGroupActive && <i className="fa fa-angle-left" />}
            {isGroupActive && <i className="fa fa-angle-down" />}
          </span>
        </div>
      </div>
      <div className={isGroupActive ? 'collapse show' : 'collapse'} id={`${name}Menu`}>
        {items.map(item =>
          <div
            key={item}
            className="menu-group-item noselect"
            onClick={() => setActiveItem(item)}
            style={{ backgroundColor: activeItem == item ? '#68829E' : null }}>
            <span><i className="fa fa-genderless group-icon" /></span>{item}
          </div>
        )}
        {name == 'Flash Games' &&
          <div className="text-center">
            <button className="menu-item-button" data-toggle="modal" data-target="#test"><i className="fa fa-plus-square" /></button>
          </div>}
      </div>
    </div>
  );
};
