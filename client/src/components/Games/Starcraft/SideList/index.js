import React from 'react';
import CampaignsList from './CampaignsList';
import ModsList from './ModsList';
import MapsList from './MapsList';

export default ({
  View,
  addMapFormState,
  addModFormState,
  addCampaignFormState,
  onAddMapSubmit,
  onAddModSubmit,
  onAddCampaignSubmit,
  onGetMapList,
  onGetModList,
  onGetCampaignList,
  onGetModDetail,
  onGetCampaignDetail,
  maps,
  mods,
  campaigns,
  mapFocus,
  modFocus,
  campaignFocus,
  onSetMapFocus,
  onSetModFocus,
  onSetCampaignFocus
}) => (
  <div className="sc-side-list-border-block">
    <div className="sc-side-list-border-block-inner">
      {View == 'Campaigns' && (
        <CampaignsList
          addCampaignFormState={addCampaignFormState}
          onCampaignSubmit={onAddCampaignSubmit}
          campaigns={campaigns}
          onGetCampaignList={onGetCampaignList}
          campaignFocus={campaignFocus}
          onGetCampaignDetail={onGetCampaignDetail}
          onSelect={onSetCampaignFocus}
        />
      )}
      {View == 'Mods' && (
        <ModsList
          addModFormState={addModFormState}
          onModSubmit={onAddModSubmit}
          mods={mods}
          onGetModList={onGetModList}
          modFocus={modFocus}
          onSelect={onSetModFocus}
        />
      )}
      {View == 'Maps' && (
        <MapsList
          addMapFormState={addMapFormState}
          onMapSubmit={onAddMapSubmit}
          maps={maps}
          onGetMapList={onGetMapList}
          onGetModDetail={onGetModDetail}
          mapFocus={mapFocus}
          onSelect={onSetMapFocus}
        />
      )}
    </div>
  </div>
);
