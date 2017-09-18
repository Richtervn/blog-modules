import React from 'react';
import HeaderBar from './HeaderBar';
import SideList from './SideList';
import InformationScreen from './InformationScreen';

export default ({
  SideListView,
  onNavigate,
  addMapFormState,
  addModFormState,
  addCampaignFormState,
  editMapFormState,
  editModFormState,
  editCampaignFormState,
  onAddMapSubmit,
  onAddModSubmit,
  onAddCampaignSubmit,
  onEditMapSubmit,
  onEditModSubmit,
  onEditCampaignSubmit,
  mods,
  maps,
  campaigns,
  mapFocus,
  modFocus,
  campaignFocus,
  onGetMapList,
  onGetModList,
  onGetCampaignList,
  onGetCampaignDetail,
  onGetModDetail,
  onSetMapFocus,
  onSetModFocus,
  onSetCampaignFocus,
  onDeleteMap,
  onDeleteMod,
  onDeleteCampaign
}) => (
  <div className="sc-main-screen static-position">
    <div className="sc-header-border-block">
      <div className="sc-header-border-block-inner">
        <HeaderBar onNavigate={onNavigate} current={SideListView} />
      </div>
    </div>
    <div className="row no-row-margin">
      <div className="col-4 no-col-margin">
        <SideList
          View={SideListView}
          addMapFormState={addMapFormState}
          addModFormState={addModFormState}
          addCampaignFormState={addCampaignFormState}
          onAddMapSubmit={onAddMapSubmit}
          onAddModSubmit={onAddModSubmit}
          onAddCampaignSubmit={onAddCampaignSubmit}
          maps={maps}
          mods={mods}
          campaigns={campaigns}
          onGetMapList={onGetMapList}
          onGetModList={onGetModList}
          onGetCampaignList={onGetCampaignList}
          onGetCampaignDetail={onGetCampaignDetail}
          onGetModDetail={onGetModDetail}
          modFocus={modFocus}
          mapFocus={mapFocus}
          campaignFocus={campaignFocus}
          onSetMapFocus={onSetMapFocus}
          onSetModFocus={onSetModFocus}
          onSetCampaignFocus={onSetCampaignFocus}
        />
      </div>
      <div className="col-8 no-col-margin">
        <InformationScreen
          View={SideListView}
          mapFocus={mapFocus}
          modFocus={modFocus}
          campaignFocus={campaignFocus}
          editMapFormState={editMapFormState}
          editModFormState={editModFormState}
          editCampaignFormState={editCampaignFormState}
          onDeleteMap={onDeleteMap}
          onDeleteMod={onDeleteMod}
          onDeleteCampaign={onDeleteCampaign}
          onEditMapSubmit={onEditMapSubmit}
          onEditModSubmit={onEditModSubmit}
          onEditCampaignSubmit={onEditCampaignSubmit}
        />
      </div>
    </div>
  </div>
);
