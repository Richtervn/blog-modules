import React from 'react';

export default ({ headers }) =>
  <ul className="nav nav-tabs" role="tablist" style={{ backgroundColor: '#2E2F2F' }}>
    {headers.map((header, i) =>
      <li key={i} className="nav-item">
        <a
          className={i == 0 ? 'nav-link active' : 'nav-link'}
          href={`#tab${header.replace(/ /g, '')}`}
          role="tab"
          data-toggle="tab"
          style={{ textDecoration: 'none', color: 'white' }}>
          <h6>{header}</h6>
        </a>
      </li>
    )}
  </ul>;
