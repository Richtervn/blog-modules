import React from 'react';
import MenuItem from './MenuItem';

const menuItems = [
  'Dash Board',
  'Character Manager',
  'Banking Manager',
  'Vip Manager',
  'Web Shop',
  'Web Quest',
  'Vip Upgrade Items',
  'Luxury Shop'
];

export default ({ user, onLogout, activeItem, onSelectItem }) => (
  <div className="ds9799-user-menu">
    <div className="ds9799-user-card text-center">
      <div className="ds9799-user-card-header">
        <h4>{user.memb___id.toUpperCase()}</h4>
      </div>
      <div className="row no-row-margin ds9799-user-card-content">
        <div className="col-5 no-col-margin">
          <div>
            <strong>Credits : </strong>
          </div>
          <div>
            <strong>Zen Balance : </strong>
          </div>
          <div>
            <strong>Loan Balance : </strong>
          </div>
        </div>
        <div className="col-7 no-col-margin">
          <div>{user.MembCredits.credits}</div>
          <div>{user.Banking.zen_balance}</div>
          <div>{user.Banking.loan_money}</div>
        </div>
      </div>
    </div>
    {menuItems.map((item, i) => (
      <MenuItem key={i} item={item} isActive={item == activeItem} onSelect={onSelectItem} />
    ))}
    <button className="btn btn-danger btn-block" onClick={onLogout}>
      <span>
        <i className="fa fa-fw fa-sign-out" />
      </span>
      Logout
    </button>
  </div>
);
