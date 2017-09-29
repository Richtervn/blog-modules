import React from 'react';

import ProfileCard from './ProfileCard';
import BankingCard from './BankingCard';
import CreditCard from './CreditCard';
import VipInfoCard from './VipInfoCard';

export default ({user, onEditProfile}) => (
  <div className="ds9799-dashboard-container">
    <div className="row no-row-margin">
      <div className="col no-col-margin">
        <ProfileCard user={user} onEditProfile={onEditProfile}/>
      </div>
      <div className="col no-col-margin">
        <BankingCard/>
        <CreditCard/>
        <VipInfoCard/>
      </div>
    </div>
  </div>
);
