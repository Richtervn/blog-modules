import React from 'react';
import YugiohFeature from './YugiohFeature';

export default ({ headers, type, id, activeTab, onChangeTab }) => (
  <ul className="nav nav-tabs" role="tablist" style={{ backgroundColor: '#2E2F2F' }}>
    {headers.map((header, i) => (
      <li key={i} className="nav-item">
        <a
          className={i == 0 ? 'nav-link active' : 'nav-link'}
          href={`#tab${type ? type : ''}${id ? id : ''}${header.replace(/ /g, '')}`}
          role="tab"
          data-toggle="tab"
          onClick={() => onChangeTab(header)}
          style={{ textDecoration: 'none', color: 'white' }}>
          <h6>{header}</h6>
        </a>
      </li>
    ))}
    {type == 'ygo' && <YugiohFeature activeTab={activeTab} />}
  </ul>
);
