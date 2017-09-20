import React from 'react';
import extractRaces from 'factories/extractRaces';
import StarRating from 'react-star-rating-component';

export default ({ mod, isFocus, onSelect }) => {
  return (
    <div
      className="sc-add-map-btn"
      style={{ color: isFocus ? '#ddff66' : '#00cc00' }}
      onClick={() => onSelect(mod)}>
      <div className="row no-row-margin">
        <div className="col-6 no-col-margin">{mod.Name}</div>
        <div className="col-3 no-col-margin sc-map-rating">
          <StarRating name={mod.Name} editing={false} value={parseInt(mod.Rating)} />
        </div>
        <div className="col-3 no-col-margin">
          <img className="sc-launcher-icon" src="/app_modules/images/icons/sc_launcher.png" />
          {mod.Version}
        </div>
      </div>
    </div>
  );
};
