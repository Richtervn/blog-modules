import React, { Component } from 'react';
import ErrorModal from 'components/ErrorModal';

import BankingRuleCard from './BankingRuleCard';
import BankingBalanceCard from './BankingBalanceCard';

const $ = window.$;

export default class BankingInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loan: 0,
      deposit: 0,
      transfer: 0,
      withdraw: 0,
      transferName: '',
      buyCredit: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDeposit = this.handleDeposit.bind(this);
    this.handleWithdraw = this.handleWithdraw.bind(this);
    this.handleLoan = this.handleLoan.bind(this);
    this.handleTransfer = this.handleTransfer.bind(this);
    this.handleBuyCredit = this.handleBuyCredit.bind(this);
  }

  handleChange(event) {
    let { name, value } = event.target;
    if (name == 'transfer' || name == 'deposit') {
      if (value > this.props.character.Money) {
        value = this.props.character.Money;
      }
    }
    this.setState({ [name]: value });
  }

  handleDeposit() {
    const query = {
      name: this.props.character.Name,
      amount: this.state.deposit
    };
    this.props.onDeposit(query);
  }

  handleWithdraw() {
    const query = {
      name: this.props.character.Name,
      amount: this.state.withdraw
    };
    this.props.onWithdraw(query);
  }

  handleLoan() {
    const query = {
      name: this.props.character.Name,
      amount: this.state.loan
    };
    this.props.onLoan(query);
  }

  handleTransfer() {
    const query = {
      name: this.props.character.Name,
      amount: this.state.transfer,
      receiveMemb: this.state.transferName
    };
    this.props.onTransfer(query);
  }

  handleBuyCredit() {
    const query = {
      name: this.props.character.Name,
      amount: this.state.buyCredit
    };
    this.props.onBuyCredit(query);
  }

  render() {
    const { user, gameSetting, errorBanking, character, onClearBankingError } = this.props;

    if (errorBanking) {
      $('#darksteam97d99iBankingErr').modal('show');
      $('#darksteam97d99iBankingErr').on('hide.bs.modal', onClearBankingError);
    }

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
                <input
                  className="form-control ds9799-banking-opt-input"
                  value={this.state.deposit}
                  onChange={this.handleChange}
                  name="deposit"
                />
                <button className="btn btn-block btn-danger mgt-10" onClick={this.handleDeposit}>
                  Deposit
                </button>
              </div>
            </div>
            <div className="ds9799-banking-opt-card">
              <div className="ds9799-banking-rule-title">
                <h4>
                  <strong>Withdraw</strong>
                </h4>
              </div>
              <div className="ds9799-banking-opt-card-content">
                <input
                  className="form-control ds9799-banking-opt-input"
                  value={this.state.withdraw}
                  onChange={this.handleChange}
                  name="withdraw"
                />
                <button className="btn btn-block btn-danger mgt-10" onClick={this.handleWithdraw}>
                  Withdraw
                </button>
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
                <input
                  className="form-control ds9799-banking-opt-input"
                  value={this.state.loan}
                  onChange={this.handleChange}
                  name="loan"
                />
                <button className="btn btn-block btn-danger mgt-10" onClick={this.handleLoan}>
                  Loan
                </button>
              </div>
            </div>
            <div className="ds9799-banking-opt-card">
              <div className="ds9799-banking-rule-title">
                <h4>
                  <strong>Buy Credits</strong>
                </h4>
              </div>
              <div className="ds9799-banking-opt-card-content">
                <input
                  className="form-control ds9799-banking-opt-input"
                  value={this.state.buyCredit}
                  onChange={this.handleChange}
                  name="buyCredit"
                />
                <button className="btn btn-block btn-danger mgt-10" onClick={this.handleBuyCredit}>
                  Buy Credits
                </button>
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
                <div className="form-group" style={{ marginTop: '20px' }}>
                  <label style={{ color: 'black' }}>Receive Account : </label>
                  <input
                    className="form-control ds9799-banking-opt-input"
                    value={this.state.transferName}
                    onChange={this.handleChange}
                    name="transferName"
                  />
                </div>
                <div className="form-group" style={{ marginTop: '20px' }}>
                  <label style={{ color: 'black' }}>Zen Amount : </label>
                  <input
                    className="form-control ds9799-banking-opt-input"
                    value={this.state.transfer}
                    onChange={this.handleChange}
                    name="transfer"
                  />
                </div>
                <button
                  className="btn btn-block btn-danger"
                  style={{ marginTop: '30px' }}
                  onClick={this.handleTransfer}>
                  Transfer
                </button>
              </div>
            </div>
          </div>
        </div>
        <ErrorModal id="darksteam97d99iBankingErr" text={errorBanking} />
      </div>
    );
  }
}
