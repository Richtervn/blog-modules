import './LeftPngCardTrans.css';
import React from 'react';

export default ({ col, imgUrl, children }) => (
  <div className={`col-${col}`}>
    <div className="row">
      <div className="left-png-card-trans">
        <div className="image-wrapper">
          <img src={imgUrl} alt={imgUrl} />
        </div>
        <div className="content">{children}</div>
      </div>
    </div>
  </div>
);
