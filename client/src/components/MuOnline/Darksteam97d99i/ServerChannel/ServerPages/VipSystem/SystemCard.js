import React from 'react';

const $ = window.$;

export default ({system, onSetFocusVipSystem}) => (
  <div className="col-4">
    <div className="ds9799-system-card">
      <div className="ds9799-profile-card-header text-center">
          <b>{system.name}</b>
        <span className="pull-right">
          <button  onClick={() => {
            onSetFocusVipSystem(system);
            $('#editDs9799VipSystemModal').modal('show');
          }}><i className="fa fa-pencil"/></button>
          <button onClick={() => {
            onSetFocusVipSystem(system);
            $('#deleteDs9799VipSystemModal').modal('show');
          }}><i className="fa fa-times"/></button>
        </span>
      </div>
      <div className="ds9799-system-card-content">
        <div><b>Price : </b>{`${system.price} Credits`}</div>
        <div><b>Duration: </b>{`${system.duration} Days`}</div>
        <div><b>Type: </b>{`${system.type}`}</div>
      </div>
    </div>
  </div>
)