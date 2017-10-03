import React from 'react';

export default ({ gameSetting }) => {
  const {
    BANKING_DEPOSIT_FEE,
    BANKING_WITHDRAW_FEE,
    BANKING_LOAN_SETTING,
    BANKING_TRANSFER_FEE
  } = gameSetting;

  let depositRule;
  if (BANKING_DEPOSIT_FEE.isPercentage) {
    depositRule = `Deposit zen cost you ${BANKING_DEPOSIT_FEE.charge * 100}% of your deposit amount`;
  } else {
    depositRule = `Deposit zen cost you ${BANKING_DEPOSIT_FEE.charge} Zen`;
  }

  let withdrawRule;
  if (BANKING_WITHDRAW_FEE.isPercentage) {
    withdrawRule = `Withdraw zen cost you ${BANKING_DEPOSIT_FEE.charge * 100}% of your withdraw amount`;
  } else {
    withdrawRule = `Withdraw zen cost you ${BANKING_DEPOSIT_FEE.charge} Zen`;
  }

  let loanMax = `You can't loan more then ${BANKING_LOAN_SETTING.maxValue} Zen`;
  let loanRule;
  if (BANKING_LOAN_SETTING.isPercentage) {
    loanRule = `Loan money cost you ${BANKING_LOAN_SETTING.charge * 100}% of your loan`;
  } else {
    loanRule = `Loan money cost you ${BANKING_LOAN_SETTING.charge} Zen`;
  }

  let transferRule;
  if (BANKING_TRANSFER_FEE.isPercentage) {
    transferRule = `Transfer money cost you ${BANKING_TRANSFER_FEE.charge * 100}% of your transfer`;
  } else {
    transferRule = `Transfer money cost you ${BANKING_TRANSFER_FEE.charge} Zen`;
  }
  return (
    <div className="ds9799-banking-rule-card">
      <div className="ds9799-banking-rule-title">
        <h4>
          <strong>Banking rules</strong>
        </h4>
      </div>
      <ul className="ds9799-banking-rules">
        <li>{depositRule}</li>
        <li>{withdrawRule}</li>
        <li>{loanRule}</li>
        <li>{loanMax}</li>
        <li>{transferRule}</li>
      </ul>
    </div>
  );
};
