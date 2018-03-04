import './TabBar.css';
import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

export default ({ headers, onChangeTab, activeTab, customClass = 'default' }) => (
  <ul className={classNames('nav', 'nav-tabs', 'tab-bar', customClass)}>
    {headers.map((header, i) => (
      <li key={i} className="nav-item">
        {header.route && (
          <Link
            to={header.route}
            className={classNames('nav-link', { active: header.name === activeTab })}
            onClick={() => onChangeTab(header.name)}>
            <h6>{header.name}</h6>
          </Link>
        )}
        {!header.route && (
          <a
            className={classNames('nav-link', { active: header.name === activeTab })}
            onClick={() => onChangeTab(header.name)}>
            <h6>{header.name}</h6>
          </a>
        )}
      </li>
    ))}
  </ul>
);
