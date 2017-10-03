import React from 'react';

export default ({ user }) => (
  <div className="ds9799-banking-rule-card" style={{ height: '110px' }}>
    <div className="ds9799-banking-rule-title">
      <h4>
        <strong>Banking balance</strong>
      </h4>
      <div style={{ marginTop: '20px', color: 'black' }}>
        <div>
          <strong>Balance : </strong>
          {user.Banking.zen_balance} Zen
        </div>
        <div>
          <strong>Loan : </strong>
          {user.Banking.loan_money} Zen
        </div>
      </div>
    </div>
  </div>
);
