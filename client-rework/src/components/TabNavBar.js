import React from 'react';

export default ({ headers, onChangeTab, activeTab, containerClass, itemClass, headerClass }) => (
  <ul className={`nav nav-tabs ${containerClass}`}>
    {headers.map((header, i) => (
      <li key={i} className={`nav-item ${itemClass}`}>
        <a
          className={`nav-link ${headerClass} ${header === activeTab && 'active'}`}
          href={`#tab${header}`}
          data-toggle="tab"
          onClick={() => onChangeTab(header)}>
          <h6>{header}</h6>
        </a>
      </li>
    ))}
  </ul>
);
