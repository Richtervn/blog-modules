import React from 'react';
import StarRating from 'react-star-rating-component';

export default ({ mod, onSelectMod, isSelected }) => (
  <div
    className={isSelected ? 'ygo-mod-card noselect ygo-mod-card-active' : 'ygo-mod-card noselect'}
    onClick={() => onSelectMod(mod)}>
    <div className="row no-row-margin">
      <div className="ygo-mod-card-img-col">
        <img className="ygo-mod-card-icon" src={mod.Icon.replace('./public', 'http://localhost:3000')} />
      </div>
      <div className="ygo-mod-card-content">
        <div className="ygo-mod-card-rating">
          <StarRating name={mod.Name} editing={false} value={parseInt(mod.Rating)} />
        </div>
        <div className="ygo-mod-card-name">{mod.Name}</div>
      </div>
    </div>
  </div>
);
