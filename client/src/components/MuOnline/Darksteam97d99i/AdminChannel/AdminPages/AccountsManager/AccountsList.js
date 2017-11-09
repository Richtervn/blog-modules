import React from 'react';

export default ({ accounts, activeAccountId, onSelect, onMakeNew, onGetAccounts }) => (
  <div className="ds9799-admin-acc-list">
    <div className="ds9799-account-search-box">
      <i className="fa fa-search ds9799-account-search-icon" />
      <input
        type="text"
        className="ds9799-account-search-input"
        onChange={e => onGetAccounts({ memb___id: e.target.value })}
      />
    </div>
    {accounts.map((account, i) => (
      <div
        key={i}
        className={
          activeAccountId == account.memb___id
            ? 'ds9799-user-menu-item ds9799-user-menu-item-active'
            : 'ds9799-user-menu-item'
        }
        onClick={() => onSelect(account)}>
        <img src="app_modules/images/icons/mulogo.png" style={{ width: '24px' }} />&nbsp;{account.memb___id}
      </div>
    ))}
    <div className="ds9799-account-add-button text-center" onClick={onMakeNew}>
      <i className="fa fa-plus-circle ds9799-account-add-icon" />
    </div>
  </div>
);
