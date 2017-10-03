import React, { Component } from 'react';

import BankingRuleCard from './BankingRuleCard';
import BankingBalanceCard from './BankingBalanceCard';

export default class BankingInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user, gameSetting } = this.props;

    return (
      <div>
        <BankingRuleCard gameSetting={gameSetting} />
        <BankingBalanceCard user={user} />
        <div className="row no-row-margin">
          <div className="col no-col-margin">
            <div className="ds9799-banking-opt-card">
              <div className="ds9799-banking-rule-title">
                <h4>
                  <strong>Deposit</strong>
                </h4>
              </div>
              <div className="ds9799-banking-opt-card-content">
                <input className="form-control ds9799-banking-opt-input" />
                <button className="btn btn-block btn-danger mgt-10">Deposit</button>
              </div>
            </div>
            <div className="ds9799-banking-opt-card">
              <div className="ds9799-banking-rule-title">
                <h4>
                  <strong>Withdraw</strong>
                </h4>
              </div>
              <div className="ds9799-banking-opt-card-content">
                <input className="form-control ds9799-banking-opt-input" />
                <button className="btn btn-block btn-danger mgt-10">Withdraw</button>
              </div>
            </div>
          </div>
          <div className="col no-col-margin">
            <div className="ds9799-banking-opt-card">
              <div className="ds9799-banking-rule-title">
                <h4>
                  <strong>Loan</strong>
                </h4>
              </div>
              <div className="ds9799-banking-opt-card-content">
                <input className="form-control ds9799-banking-opt-input" />
                <button className="btn btn-block btn-danger mgt-10">Loan</button>
              </div>
            </div>
            <div className="ds9799-banking-opt-card">
              <div className="ds9799-banking-rule-title">
                <h4>
                  <strong>Buy Credits</strong>
                </h4>
              </div>
              <div className="ds9799-banking-opt-card-content">
                <input className="form-control ds9799-banking-opt-input" />
                <button className="btn btn-block btn-danger mgt-10">Buy Credits</button>
              </div>
            </div>
          </div>
          <div className="col no-col-margin">
            <div className="ds9799-banking-opt-card" style={{ marginRight: '10px', height: '340px' }}>
              <div className="ds9799-banking-rule-title">
                <h4>
                  <strong>Transfer</strong>
                </h4>
              </div>
              <div className="ds9799-banking-opt-card-content">
                <div className="form-group" style={{marginTop: '20px'}}>
                  <label style={{color: 'black'}}>Receive Account : </label>
                  <input className="form-control ds9799-banking-opt-input" />
                </div>
                <div className="form-group" style={{marginTop: '20px'}}>
                  <label style={{color: 'black'}}>Zen Amount : </label>
                  <input className="form-control ds9799-banking-opt-input" />
                </div>
                <button className="btn btn-block btn-danger" style={{marginTop: '30px'}}>Transfer</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
