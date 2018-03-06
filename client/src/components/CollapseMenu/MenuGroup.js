import './MenuGroup.css';

import React from 'react';
import { createElementId } from 'utils';

export default ({ name, isOpen, isActive, onClick, isShow, icon, children }) => {
  const elementId = createElementId(name, 'mgr');
  return (
    <section>
      <div
        className={`menu-group ${isActive ? 'active' : ''}`}
        data-toggle="collapse"
        href={`#${elementId}`}
        onClick={onClick}>
        <div className="menu-group-name">
          <i className={`fa ${icon ? `fa-${icon}` : 'fa-gamepad'} fa-fw menu-group-icon`} />
          {name}
          <span className="pull-right menu-group-toggle-icon">
            {isOpen && <i className="fa fa-angle-down" />}
            {!isOpen && <i className="fa fa-angle-left" />}
          </span>
        </div>
      </div>
      <div className={`collapse ${isShow ? 'show' : ''}`} id={elementId}>
        {children}
      </div>
    </section>
  );
};
