// loan, deposit, transfer,logs, buy_credit, withdraw

import './BankingFeature.css';

import React, { Component } from 'react';

class BankingFeature extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="ds9799-banking-feature">
        <div className="feature-box">
          <div className="label">Loan</div>
          <div className="content">
            <input className="form-control" type="number" />
            <button className="btn btn-danger btn-block">Loan</button>
          </div>
        </div>
        <div className="feature-box">
          <div className="label">Deposit</div>
          <div className="content">
            <input className="form-control" type="number" />
            <button className="btn btn-danger btn-block">Deposit</button>
          </div>
        </div>
        <div className="feature-box">
          <div className="label">Withdraw</div>
          <div className="content">
            <input className="form-control" type="number" />
            <button className="btn btn-danger btn-block">Withdraw</button>
          </div>
        </div>
        <div className="feature-box">
          <div className="label">Transfer</div>
          <div className="content">
            <input className="form-control" type="number" />
            <input className="form-control" type="text" />
            <button className="btn btn-danger btn-block">Transfer</button>
          </div>
        </div>
        <div className="feature-box">
          <div className="label">Exchange Credits</div>
          <div className="content">
            <div className="exchange">
              <input className="form-control" type="number" />
              <button className="btn btn-danger">Buy</button>
            </div>
            <div className="exchange">
              <input className="form-control" type="number" />
              <button className="btn btn-danger">Sell</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BankingFeature;
