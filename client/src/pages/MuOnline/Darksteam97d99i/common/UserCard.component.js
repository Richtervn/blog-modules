import './UserCard.css';
import React from 'react';
import { formatNumber } from 'helpers';

const VipIcon = ({isVip}) => {
  if(!isVip && isVip.toString() !== '1'){
    return null;
  }

  return (
    <div className="vip-icon">
      <img src="/images/icons/vip.png" alt="vip" />
    </div>
  );
};

export default ({ user, zen_balance, credits }) => {
  if (!user) {
    return null;
  }
  return (
    <div className="ds9799-user-card">
      <div className="header">
        <VipIcon isVip={user.IsVip}/>
        <div className="name">{user.memb___id}</div>
      </div>
      <div className="content">
        <div className="wrapper">
          <div className="label">Credits:</div>
          <div className="text">{formatNumber(credits)}</div>
        </div>
        <div className="wrapper">
          <div className="label">Zen Balance:</div>
          <div className="text">{formatNumber(zen_balance)}</div>
        </div>
      </div>
    </div>
  );
};
