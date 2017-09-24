import React from 'react';

export default ({ headers, activeView, onSwitchView }) => (
  <div className="row no-row-margin">
    {headers.map((header, i) => (
      <div key={i} className="col no-col-margin text-center">
        <div
          className={
            header == activeView ? 'mu-nav-pannel-btn mu-nav-pannel-active' : 'mu-nav-pannel-btn'
          }
          onClick={() => onSwitchView(header)}>
          {header.toUpperCase()}
        </div>
      </div>
    ))}
  </div>
);
