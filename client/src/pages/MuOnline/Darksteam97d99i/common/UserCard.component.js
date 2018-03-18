import './UserCard.css';
import React from 'react';

export default ({ user }) => {
  if (!user) {
    return null;
  }
  return (
    <div className="ds9799-user-card">
      <div className="header">
        {user.IsVip && (
          <div className="vip-icon">
            <img src="/images/icons/vip.png" alt="vip" />
          </div>
        )}
        <div className="name">{user.memb___id}</div>
      </div>
      <div className="content">
        <div className="wrapper">
          <div className="label">Credits:</div>
          <div className="text">{user.MembCredits.credits.toLocaleString()}</div>
        </div>
        <div className="wrapper">
          <div className="label">Zen Balance:</div>
          <div className="text">{user.Banking.zen_balance.toLocaleString()}</div>
        </div>
      </div>
    </div>
  );
};
