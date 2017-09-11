import React from 'react';
import StarRating from 'react-star-rating-component';

export default () => (
  <div className="ygo-mod-card noselect">
    <div className="row no-row-margin">
      <div className="ygo-mod-card-img-col">
        <img className="ygo-mod-card-icon" src="http://localhost:3000/YugiohPoc/mods/1.png"/>
      </div>
      <div className="ygo-mod-card-content">
        <div className="ygo-mod-card-rating">
          <StarRating/>
        </div>
        <div className="ygo-mod-card-name">
          Yugi The Destiny
        </div>
      </div>
    </div>
  </div>
)