import './BankingFeature.css';

import React, { Component } from 'react';

class BankingFeature extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loan: '',
      deposit: '',
      withdraw: '',
      transferName: '',
      transferAmount: '',
      buyCredit: '',
      sellCredit: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  loan() {
    const query = {
      name: this.props.focusCharacter,
      amount: this.state.loan
    };
    this.props.onLoan(query);
  }

  deposit() {
    const query = {
      name: this.props.focusCharacter,
      amount: this.state.deposit
    };
    this.props.onDeposit(query);
  }

  withdraw() {
    const query = {
      name: this.props.focusCharacter,
      amount: this.state.withdraw
    };
    this.props.onWithdraw(query);
  }

  transfer() {
    const query = {
      name: this.props.focusCharacter,
      amount: this.state.transferAmount,
      receiveMemb: this.state.transferName
    };
    this.props.onTransfer(query);
  }

  buyCredit() {
    const query = {
      name: this.props.focusCharacter,
      amount: this.state.buyCredit
    };
    this.props.onBuyCredit(query);
  }

  sellCredit() {
    const query = {
      name: this.props.focusCharacter,
      amount: this.state.sellCredit
    };
    this.props.onSellCredit(query);
  }

  render() {
    const { loan, withdraw, transferName, transferAmount, deposit, buyCredit, sellCredit } = this.state;
    return (
      <div id="ds9799-banking-feature">
        <div className="feature-box">
          <div className="label">Loan</div>
          <div className="content">
            <input
              className="form-control"
              type="number"
              name="loan"
              value={loan}
              onChange={this.handleChange}
              placeholder="Loan amount"
            />
            <button className="btn btn-danger btn-block" onClick={() => this.loan()}>
              Loan
            </button>
          </div>
        </div>
        <div className="feature-box">
          <div className="label">Deposit</div>
          <div className="content">
            <input
              className="form-control"
              type="number"
              name="deposit"
              value={deposit}
              onChange={this.handleChange}
              placeholder="Deposit amount"
            />
            <button className="btn btn-danger btn-block" onClick={() => this.deposit()}>
              Deposit
            </button>
          </div>
        </div>
        <div className="feature-box">
          <div className="label">Withdraw</div>
          <div className="content">
            <input
              className="form-control"
              type="number"
              name="withdraw"
              value={withdraw}
              onChange={this.handleChange}
              placeholder="Withdraw amount"
            />
            <button className="btn btn-danger btn-block" onClick={() => this.withdraw()}>
              Withdraw
            </button>
          </div>
        </div>
        <div className="feature-box">
          <div className="label">Transfer</div>
          <div className="content">
            <input
              className="form-control"
              type="number"
              name="transferName"
              value={transferName}
              onChange={this.handleChange}
              placeholder="Account receive"
            />
            <input
              className="form-control"
              type="text"
              name="transferAmount"
              value={transferAmount}
              onChange={this.handleChange}
              placeholder="Transfer amount"
            />
            <button className="btn btn-danger btn-block" onClick={() => this.transfer()}>
              Transfer
            </button>
          </div>
        </div>
        <div className="feature-box">
          <div className="label">Exchange Credits</div>
          <div className="content">
            <div className="exchange">
              <input
                className="form-control"
                type="number"
                name="buyCredit"
                value={buyCredit}
                onChange={this.handleChange}
                placeholder="Buy amount"
              />
              <button className="btn btn-danger" onClick={() => this.buyCredit()}>
                Buy
              </button>
            </div>
            <div className="exchange">
              <input
                className="form-control"
                type="number"
                name="sellCredit"
                value={sellCredit}
                onChange={this.handleChange}
                placeholder="Sell amount"
              />
              <button className="btn btn-danger" onClick={() => this.sellCredit()}>
                Sell
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BankingFeature;
