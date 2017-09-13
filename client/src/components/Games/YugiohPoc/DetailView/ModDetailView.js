import React from 'react';
import StarRating from 'react-star-rating-component';

export default ({ mod }) => (
  <div className="text-center static-position ygo-tab-view">
    <h4>
      <strong>Yugioh! Power of Chaos</strong>
    </h4>
    <h4>
      <strong>{mod.Name.toUpperCase()}</strong>
    </h4>
    <StarRating
      className="larger-star-rating"
      name={`${mod}-detail-rating`}
      value={parseInt(mod.Rating)}
      editing={false}
    />
    <br />
    <img src={mod.Image.replace('./public', 'http://localhost:3000')} />
    <br />
    <br />
    <div className="ygo-tab-view-text">
      <p>
        <strong>Introduction : </strong>
        {mod.Introduction}
      </p>
      <p>
        <strong>Description : </strong>
        {mod.Description}
      </p>
    </div>
  </div>
);
