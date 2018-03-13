import './MenuSideBar.css';
import React from 'react';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';

const MenuSideBar = ({ menus, customClass = 'default', history, activeMenu, prefix = '', onClick }) => (
  <div className={classNames('menu-side-bar', customClass)}>
    {menus.map((menu, i) => (
      <div
        key={i}
        className={classNames('menu-btn', { active: activeMenu === menu.route })}
        onClick={() => {
          onClick(menu);
          history.push(`${prefix}${menu.route}`);
        }}>
        <i className={`fa fa-fw fa-${menu.icon}`} />
        {menu.name}
      </div>
    ))}
  </div>
);

export default withRouter(MenuSideBar);
