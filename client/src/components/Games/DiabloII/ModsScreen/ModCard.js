import React from 'react';
import StarRating from 'react-star-rating-component';

export default ({ mod, focusMod, onGetModDetail }) => (
  <div
    className={`d2-mod-card ${mod._id == focusMod._id ? 'd2-mod-card-active' : ''}`}
    onClick={() => onGetModDetail(mod._id)}>
    <div className="flex-center-both">
      <img className="d2-mod-icon" src={mod.IconUrl.replace('./public', 'http://localhost:3000')} />
    </div>
    <div className="d2-mod-card-content">
      <div className="ygo-mod-card-rating">
        <StarRating name={mod.Name} editing={false} value={parseInt(mod.Rating)} />
      </div>
      <div>{`${mod.Name} v${mod.ModVersion} - LOD : ${mod.Version}`}</div>
    </div>
  </div>
);
