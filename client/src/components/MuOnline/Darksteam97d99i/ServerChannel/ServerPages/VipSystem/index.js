import React from 'react';

import FormModal from 'components/FormModal';
import DeleteModal from 'components/DeleteModal';

import SystemCard from './SystemCard';

export default ({
  VipSystems,
  addFormBody,
  editFormBody,
  focusVipSystem,
  onGetVipSystems,
  onAddVipSystem,
  onSetFocusVipSystem,
  onEditVipSystem,
  onDeleteVipSystem
}) => {
  if (!VipSystems) {
    onGetVipSystems();
    return null;
  }

  return (
    <div className="ds9799-dashboard-container">
      <div className="row no-row-margin">
        <div className="col-4">
          <div
            className="ds9799-vip-system-add-btn"
            data-toggle="modal"
            data-target="#addDs9799VipSystemModal">
            <i className="fa fa-2x fa-plus-circle" />
          </div>
        </div>
        {VipSystems.map(system => (
          <SystemCard system={system} key={system.id} onSetFocusVipSystem={onSetFocusVipSystem} />
        ))}
      </div>
      <FormModal id="addDs9799VipSystemModal" formBody={addFormBody} onSubmit={onAddVipSystem} />
      {focusVipSystem && (
        <DeleteModal
          id="deleteDs9799VipSystemModal"
          text={`Are you sure want to delete package ${focusVipSystem.name} ?`}
          onSubmit={() => onDeleteVipSystem(focusVipSystem.id)}
        />
      )}
      {editFormBody && (
        <FormModal id="editDs9799VipSystemModal" formBody={editFormBody} onSubmit={onEditVipSystem} />
      )}
    </div>
  );
};
