import React from 'react';

export default ({ accounts, activeAccountId, onSelect }) => (
  <div className="ds9799-admin-acc-list">
    {accounts.map((account, i) => (
      <div
        key={i}
        className={
          activeAccountId == account.memb___id ? (
            'ds9799-user-menu-item ds9799-user-menu-item-active'
          ) : (
            'ds9799-user-menu-item'
          )
        }
        onClick={() => onSelect(account)}>
        <img src="app_modules/images/icons/mulogo.png" style={{ width: '24px' }} />&nbsp;{account.memb___id}
      </div>
    ))}
  </div>
);
