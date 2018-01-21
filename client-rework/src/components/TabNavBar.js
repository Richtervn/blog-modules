import React from 'react';

export default ({ headers, onChangeTab, containerClass, itemClass, headerClass }) => (
  <ul className={`nav nav-tabs ${containerClass}`}>
    {headers.map((header, i) => (
      <li key={i} className={`nav-item ${itemClass}`}>
        <a
          className={i === 0 ? `nav-link ${headerClass} active` : `nav-link ${headerClass} `}
          href={`#tab${header}`}
          data-toggle="tab"
          onClick={() => onChangeTab(header)}>
          <h6>{header}</h6>
        </a>
      </li>
    ))}
  </ul>
);
