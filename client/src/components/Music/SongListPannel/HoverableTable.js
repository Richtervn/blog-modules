import React from 'react';
import _ from 'underscore';
import StarRating from 'react-star-rating-component';

export default ({ headers, data, onSelect, onSort, sort }) => (
  <div className="music-table">
    <div className="row no-row-margin music-table-header text-center">
      {headers.map((header, i) => (
        <div key={i} className="col no-col-margin static-position" onClick={() => onSort(header)}>
          <strong>
            &nbsp;{header}&nbsp;
            {sort[header] &&
            sort[header] == 'ASC' && (
              <span>
                <i className="fa fa-sort-asc" />
              </span>
            )}
            {sort[header] &&
            sort[header] == 'DESC' && (
              <span>
                <i className="fa fa-sort-desc" />
              </span>
            )}
          </strong>
        </div>
      ))}
    </div>
    {data &&
      data.map((obj, i) => (
        <div
          key={i}
          className="row no-row-margin static-position music-table-row"
          onClick={() => onSelect(obj)}>
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
