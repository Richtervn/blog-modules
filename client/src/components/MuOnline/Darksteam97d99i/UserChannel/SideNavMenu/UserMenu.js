import React from 'react';

export default ({user, onLogout}) => (
  <div className="ds9799-user-menu">
    <div className="ds9799-user-card text-center">
      <div className="ds9799-user-card-header">
        <h4>{user.memb___id.toUpperCase()}</h4>
      </div>
      <div className="row no-row-margin ds9799-user-card-content">
        <div className="col-5 no-col-margin">
          <div><strong>Credits : </strong></div>
          <div><strong>Zen Balance : </strong></div>
          <div><strong>Loan Balance : </strong></div>
        </div>
        <div className="col-7 no-col-margin">
          <div>{user.MembCredits.credits}</div>
          <div>{user.Banking.zen_balance}</div>
          <div>{user.Banking.loan_money}</div>
        </div>
      </div>
    </div>
    <button className="btn btn-danger btn-block" onClick={onLogout}>
      <span><i className="fa fa-fw fa-sign-out"/></span>
      Logout
    </button>
  </div>
)