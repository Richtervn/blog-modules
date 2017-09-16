import React from 'react';
import StarRating from 'react-star-rating-component';

import FormModal from 'components/FormModal';
import MapCard from './MapCard';

export default ({ maps, addMapFormState, onMapSubmit, onGetMapList, mapFocus, onSelect }) => {
  if (!maps) {
    onGetMapList();
    return null;
  }
  return (
    <div>
      <div className="sc-add-map-btn" data-toggle="modal" data-target="#addStarcraftMapModal">
        <i className="fa fa-plus-circle" />
      </div>
      {maps.map((map, i) => (
        <MapCard key={i} map={map} isFocus={map._id == mapFocus._id} onSelect={onSelect} />
      ))}
      <FormModal id="addStarcraftMapModal" formBody={addMapFormState} onSubmit={onMapSubmit} />
    </div>
  );
};
