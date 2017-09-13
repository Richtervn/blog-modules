import React from 'react';
import _ from 'underscore';
import StarRating from 'react-star-rating-component';

export default ({ headers, data, onSelect }) => (
  <div className="music-table">
    <div className="row no-row-margin music-table-header text-center">
      {headers.map((header, i) => (
        <div key={i} className="col no-col-margin static-position">
          <strong>&nbsp;{header}</strong>
        </div>
      ))}
    </div>
    {data &&
      data.map((obj, i) => (
        <div key={i} className="row no-row-margin static-position music-table-row">
          {Object.keys(obj)
            .filter(key => _.contains(headers, key))
            .map((key, j) => {
              if (key != 'Rating') {
                return (
                  <div key={j} className="col no-col-margin static-position text-center">
                    &nbsp;{obj[key]}
                  </div>
                );
              }
              return (
                <div key={j} className="col no-col-margin static-position text-center">
                  <StarRating name={obj.Name} value={parseInt(obj.Rating)} editing={false} />
                </div>
              );
            })}
        </div>
      ))}
  </div>
);
