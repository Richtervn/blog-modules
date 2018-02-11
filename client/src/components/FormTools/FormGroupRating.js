import React from 'react';
import StarRating from 'react-star-rating-component';
import { createElementId } from 'utils';

export default ({ label, rating, onRating }) => {
  return (
    <div className="form-group row">
      <label className="col-sm-3 col-form-label col-form-label-sm">
        <strong>{label ? label : 'Rating'}:</strong>
      </label>
      <div className="col-sm-9 text-center">
        <StarRating
          className="larger-star-rating"
          name={createElementId(label, 'fgr')}
          value={parseInt(rating, 10)}
          onStarClick={value => onRating(value)}
        />
      </div>
    </div>
  );
};
