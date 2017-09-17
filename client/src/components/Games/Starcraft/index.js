import React from 'react';
import HeaderBar from './HeaderBar';
import SideList from './SideList';
import InformationScreen from './InformationScreen';

export default ({
  SideListView,
  onNavigate,
  addMapFormState,
  onAddMapSubmit,
  maps,
  onGetMapList,
  mapFocus,
  editMapFormState,
  onSetMapFocus,
  onDeleteMap
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
          onAddMapSubmit={onAddMapSubmit}
          maps={maps}
          onGetMapList={onGetMapList}
          mapFocus={mapFocus}
          onSetMapFocus={onSetMapFocus}
        />
      </div>
      <div className="col-8 no-col-margin">
        <InformationScreen
          View={SideListView}
          mapFocus={mapFocus}
          editMapFormState={editMapFormState}
          onDeleteMap={onDeleteMap}
        />
      </div>
    </div>
  </div>
);
