import React from 'react';

import MapInfo from './MapInfo';
import ModInfo from './ModInfo';
import CampaignInfo from './CampaignInfo';

export default ({
  View,
  mapFocus,
  modFocus,
  campaignFocus,
  editMapFormState,
  editModFormState,
  editCampaignFormState,
  onDeleteMap,
  onDeleteMod,
  onDeleteCampaign,
  onEditMapSubmit,
  onEditModSubmit,
  onEditCampaignSubmit
}) => (
  <div className="sc-side-list-border-block">
    <div className="sc-side-list-border-block-inner">
      {View == 'Maps' && (
        <MapInfo
          map={mapFocus}
          editMapFormState={editMapFormState}
          onDeleteMap={onDeleteMap}
          onEditMapSubmit={onEditMapSubmit}
        />
      )}
      {View == 'Mods' && (
        <ModInfo
          mod={modFocus}
          editModFormState={editModFormState}
          onDeleteMod={onDeleteMod}
          onEditModSubmit={onEditModSubmit}
        />
      )}
      {View == 'Campaigns' && (
        <CampaignInfo
          campaign={campaignFocus}
          editCampaignFormState={editCampaignFormState}
          onEditCampaignSubmit={onEditCampaignSubmit}
          onDeleteCampaign={onDeleteCampaign}
        />
      )}
    </div>
  </div>
);
