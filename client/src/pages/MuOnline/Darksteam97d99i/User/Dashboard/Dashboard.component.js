import './Dashboard.css';
import React from 'react';
import ProfileForm from './ProfileForm.container';
import { BankingLogs } from '../BankingManager';
import { CreditLogs } from '../VipManager';

export default () => (
  <div id="ds9799-dashboard">
    <div className="half">
      <ProfileForm />
    </div>
    <div className="half">
      <div className="banking-log">
        <BankingLogs maxTableHeight={290} />
      </div>
      <div className="credit-log">
        <CreditLogs maxTableHeight={290} />
      </div>
    </div>
  </div>
);
