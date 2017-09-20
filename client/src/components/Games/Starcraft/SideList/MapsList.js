import React from 'react';
import StarRating from 'react-star-rating-component';

import FormModal from 'components/FormModal';
import MapCard from './MapCard';
import ToolsBar from './ToolsBar';

export default ({
  maps,
  addMapFormState,
  onMapSubmit,
  onGetMapList,
  mapFocus,
  onSelect,
  onSort,
  onSearch
}) => {
  if (!maps) {
    onGetMapList();
    return null;
  }
  return (
    <div>
      <ToolsBar control="Map" onSort={onSort} onSearch={onSearch} />
      {maps.map((map, i) => (
        <MapCard key={i} map={map} isFocus={map._id == mapFocus._id} onSelect={onSelect} />
      ))}
      <FormModal id="addStarcraftMapModal" formBody={addMapFormState} onSubmit={onMapSubmit} />
    </div>
  );
};
