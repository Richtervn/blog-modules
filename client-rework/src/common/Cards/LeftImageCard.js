import './LeftImageCard.css';
import React from 'react';

export default ({ col, imgUrl, isActive, onClick, children }) => (
  <div className={`col-${col}`}>
    <div className="row">
      <div className={`left-image-card ${isActive ? 'active' : ''}`} onClick={onClick}>
        <div className="left-image-card-img">
          <img src={imgUrl} className="left-image-card-img" alt={imgUrl}/>
        </div>
        <div className="left-image-card-content">{children}</div>
      </div>
    </div>
  </div>
);
