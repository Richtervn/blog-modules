import React from 'react';

export default ({ col, children }) => (
  <div className={`col-${col}`}>
    <div className="row">
      <div className="sc-border">
        <div className="sc-border-inner">
          <div className="sc-tab-view">{children}</div>
        </div>
      </div>
    </div>
  </div>
);
