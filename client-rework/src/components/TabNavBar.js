import React from 'react';
import { Link } from 'react-router-dom';

export default ({ headers, onChangeTab, activeTab, containerClass, itemClass, headerClass }) => (
  <ul className={`nav nav-tabs ${containerClass}`}>
    {headers.map((header, i) => (
      <li key={i} className={`nav-item ${itemClass}`}>
        {header.route && (
          <Link
            to={header.route}
            className={`nav-link ${headerClass} ${header.name === activeTab && 'active'}`}
            onClick={() => onChangeTab(header.name)}>
            <h6>{header.name}</h6>
          </Link>
        )}
        {!header.route && (
          <a
            className={`nav-link ${headerClass} ${header.name === activeTab && 'active'}`}
            onClick={() => onChangeTab(header.name)}>
            <h6>{header.name}</h6>
          </a>
        )}
      </li>
    ))}
  </ul>
);
