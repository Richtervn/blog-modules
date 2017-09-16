import React from 'react';
import MapInfo from './MapInfo';

export default ({View, mapFocus, editMapFormState}) => (
  <div className="sc-side-list-border-block">
    <div className="sc-side-list-border-block-inner">
      {View == 'Maps' && <MapInfo map={mapFocus} editMapFormState={editMapFormState}/>}
    </div>
  </div>
);