import React from 'react';
import StarRating from 'react-star-rating-component';

export default ({ tool, isFocus, onSelect }) => (
  <div className={`d2-mod-card ${isFocus ? 'd2-mod-card-active' : ''}`} onClick={onSelect}>
    <div className="flex-center-both">
      <img className="d2-mod-icon" src={tool.IconUrl.replace('./public', 'http://localhost:3000')} />
    </div>
    <div className="d2-mod-card-content">
      <div className="ygo-mod-card-rating">
        <StarRating name={tool.Name} editing={false} value={parseInt(tool.Rating)} />
      </div>
      <div>{tool.Name}</div>
    </div>
  </div>
);
