import React from 'react';
import ProfileCard from './ProfileCard';

export default ({user}) => (
  <div className="ds9799-dashboard-container">
    <div className="row no-row-margin">
      <div className="col no-col-margin">
        <ProfileCard user={user}/>
      </div>
      <div className="col no-col-margin">
        <div className="row no-row-margin">
        </div>
        <div className="row no-row-margin">
        </div>
        <div className="row no-row-margin">
        </div>
      </div>
    </div>
  </div>
)