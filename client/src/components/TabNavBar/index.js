import React from 'react';

export default ({ headers, type, id }) => (
  <ul className="nav nav-tabs" role="tablist" style={{ backgroundColor: '#2E2F2F' }}>
    {headers.map((header, i) => (
      <li key={i} className="nav-item">
        <a
          className={i == 0 ? 'nav-link active' : 'nav-link'}
          href={`#tab${type ? type : ''}${id ? id : ''}${header.replace(/ /g, '')}`}
          role="tab"
          data-toggle="tab"
          style={{ textDecoration: 'none', color: 'white' }}>
          <h6>{header}</h6>
        </a>
      </li>
    ))}
    {type == 'ygo' && (
      <div className="ml-auto" style={{ display: 'inline-flex' }}>
        <li className="nav-item" style={{ marginRight: '5px', marginTop: '5px' }}>
          <button>
            <i className="fa fa-pencil" />
          </button>
        </li>
        <li className="nav-item" style={{ marginRight: '5px', marginTop: '5px' }}>
          <button>
            <i className="fa fa-times" />
          </button>
        </li>
      </div>
    )}
  </ul>
);
