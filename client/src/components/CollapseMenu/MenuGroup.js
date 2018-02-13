import './MenuGroup.css';

import React from 'react';
import { createElementId } from 'utils';

const defineGroupIcon = name => {
  switch (name) {
    case 'Games':
      return 'fa-suitcase';
    case 'Collections':
      return 'fa-book';
    // case 'Information':
    //   return 'fa-info-circle';
    // case 'Education':
    //   return 'fa-graduation-cap';
    // case 'Experience':
    //   return 'fa-calendar-check-o';
    // case 'Career':
    //   return 'fa-briefcase';
    // case 'Skills':
    //   return 'fa-coffee';
    case 'Mu Online':
      return 'fa-gift';
    case 'Lineage II':
      return 'fa-briefcase';
    // case 'Notes':
    //   return 'fa-tags';
    case 'Tools':
      return 'fa-wrench';
    case 'Setting':
      return 'fa-gears';
    case 'Archived':
      return 'fa-archive';
    default:
      return 'fa-gamepad';
  }
};

export default ({ name, isOpen, isActive, onClick, isShow, children }) => {
  const elementId = createElementId(name, 'mgr');
  return (
    <section>
      <div
        className={`menu-group ${isActive ? 'active' : ''}`}
        data-toggle="collapse"
        href={`#${elementId}`}
        onClick={onClick}>
        <div className="menu-group-name">
          <i className={`fa ${defineGroupIcon(name)} fa-fw menu-group-icon`} />
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
