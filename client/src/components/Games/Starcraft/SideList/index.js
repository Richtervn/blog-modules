import React from 'react';
import CampaignsList from './CampaignsList';
import ModsList from './ModsList';
import MapsList from './MapsList';

export default ({ View, addMapFormState, onAddMapSubmit, onGetMapList, maps, mapFocus, onSetMapFocus }) => (
  <div className="sc-side-list-border-block">
    <div className="sc-side-list-border-block-inner">
      {View == 'Campaigns' && <CampaignsList />}
      {View == 'Mods' && <ModsList />}
      {View == 'Maps' && (
        <MapsList
          addMapFormState={addMapFormState}
          onMapSubmit={onAddMapSubmit}
          maps={maps}
          onGetMapList={onGetMapList}
          mapFocus={mapFocus}
          onSelect={onSetMapFocus}
        />
      )}
    </div>
  </div>
);
