import React from 'react';
import MapInfo from './MapInfo';
import CampaignInfo from './CampaignInfo'


export default ({View, mapFocus, editMapFormState, onDeleteMap}) => (
  <div className="sc-side-list-border-block">
    <div className="sc-side-list-border-block-inner">
      {View == 'Maps' && <MapInfo map={mapFocus} editMapFormState={editMapFormState} onDeleteMap={onDeleteMap}/>}
      {View == 'Campaigns' && <CampaignInfo/>}
    </div>
  </div>
);