import './BankingRule.css';
import React from 'react';
import { formatNumber } from 'helpers';

export default ({ gameSetting }) => {
  const {
    BANKING_DEPOSIT_FEE,
    BANKING_WITHDRAW_FEE,
    BANKING_LOAN_SETTING,
    BANKING_TRANSFER_FEE,
    CREDIT_PRICE
  } = gameSetting;

  return (
    <div id="ds9799-banking-rule-card">
      <div className="label">Banking rules</div>
      <ul>
        <li>
          Deposit zen cost you{' '}
          <b>
            {BANKING_DEPOSIT_FEE.isPercentage
              ? BANKING_DEPOSIT_FEE.charge * 100
              : formatNumber(BANKING_DEPOSIT_FEE.charge)}
          </b>
          {BANKING_DEPOSIT_FEE.isPercentage ? '% of your withdraw amount' : ' Zen'}
        </li>
        <li>
          Withdraw zen cost you{' '}
          <b>
            {BANKING_WITHDRAW_FEE.isPercentage
              ? BANKING_WITHDRAW_FEE.charge * 100
              : formatNumber(BANKING_WITHDRAW_FEE.charge)}
          </b>
          {BANKING_WITHDRAW_FEE.isPercentage ? '% of your withdraw' : ' Zen'}
        </li>
        <li>
          Loan money cost you{' '}
          <b>
            {BANKING_LOAN_SETTING.isPercentage
              ? BANKING_LOAN_SETTING.charge * 100
              : formatNumber(BANKING_LOAN_SETTING.charge)}
          </b>
          {BANKING_LOAN_SETTING.isPercentage ? '% of your loan' : ' Zen'}
        </li>
        <li>
          You can't loan more than <b>{formatNumber(BANKING_LOAN_SETTING.maxValue)}</b> Zen
        </li>
        <li>
          Transfer money cost you{' '}
          <b>
            {BANKING_TRANSFER_FEE.isPercentage
              ? BANKING_TRANSFER_FEE.charge * 100
              : formatNumber(BANKING_TRANSFER_FEE.charge)}
          </b>
          {BANKING_TRANSFER_FEE.isPercentage ? '% of your transfer' : ' Zen'}
        </li>
        <li>
          You can buy credits for <b>{formatNumber(CREDIT_PRICE.buy)}</b> zen each
        </li>
        <li>
          You can sell credits for <b>{formatNumber(CREDIT_PRICE.sell)}</b> zen each
        </li>
      </ul>
    </div>
  );
};
