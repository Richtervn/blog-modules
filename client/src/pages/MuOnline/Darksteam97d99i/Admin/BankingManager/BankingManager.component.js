import './BankingManager.css';
import React, { Component } from 'react';
import { ContainerLoader } from 'common/Loaders';

import { PureAddCardButton } from 'components/Buttons';

class BankingManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      adding: false,
      editingIndex: null,
      value: {},
      addingValue: {
        memb___id: '',
        loan_money: '',
        zen_balance: ''
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAddChange = this.handleAddChange.bind(this);
  }

  componentWillMount() {
    this.props.onGetBankings();
  }

  handleChange(e) {
    const nextState = { ...this.state };
    const { value, name } = e.target;
    nextState.value[name] = value;
    this.setState(nextState);
  }

  handleAddChange(e) {
    const nextState = { ...this.state };
    const { value, name } = e.target;
    nextState.addingValue[name] = value;
    this.setState(nextState);
  }

  handleSubmit() {
    this.props.onAddBanking(this.state.addingValue);
    this.setState({ adding: false, addingValue: { memb___id: '', loan_money: '', zen_balance: '' } });
  }

  handleSave() {
    this.props.onEditBanking(this.state.value);
    this.setState({ editing: false, value: {} });
  }

  render() {
    const { bankings, onDeleteBanking } = this.props;
    const { editing, editingIndex, value, adding, addingValue } = this.state;
    if (!bankings) {
      return <ContainerLoader />;
    }
    return (
      <div id="ds9799-banking-manager">
        {bankings.map((banking, i) => (
          <div className="wrapper" key={i}>
            <div className="banking-card">
              <div className="label">
                {banking.memb___id}
                {editing && editingIndex === i ? (
                  <div className="feature">
                    <button className="btn" onClick={() => this.handleSave()}>
                      <i className="fa fa-save" />
                    </button>
                    <button
                      className="btn"
                      onClick={() => this.setState({ editing: false, editingIndex: null, value: {} })}>
                      <i className="fa fa-times" />
                    </button>
                  </div>
                ) : (
                  <div className="feature">
                    <button
                      className="btn"
                      onClick={() =>
                        this.setState({
                          editing: true,
                          editingIndex: i,
                          value: {
                            ...banking
                          }
                        })
                      }>
                      <i className="fa fa-pencil" />
                    </button>
                    <button className="btn" onClick={() => onDeleteBanking(banking.memb___id)}>
                      <i className="fa fa-times" />
                    </button>
                  </div>
                )}
              </div>
              <div className="content">
                <div className="row-wrapper">
                  <label>Zen Balance :</label>
                  <input
                    name="zen_balance"
                    className="form-control"
                    value={editing && editingIndex === i ? value.zen_balance : banking.zen_balance}
                    onChange={this.handleChange}
                    disabled={!editing || editingIndex !== i}
                  />
                </div>
                <div className="row-wrapper">
                  <label>Loan Money :</label>
                  <input
                    name="loan_money"
                    className="form-control"
                    value={editing && editingIndex === i ? value.loan_money : banking.loan_money}
                    onChange={this.handleChange}
                    disabled={!editing || editingIndex !== i}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
        {!adding && (
          <div className="add-banking-btn">
            <PureAddCardButton onClick={() => this.setState({ adding: true })} />
          </div>
        )}
        {adding && (
          <div className="form-wrapper">
            <div className="add-banking-form">
              <input
                className="form-control"
                type="text"
                placeholder="User Id"
                name="memb___id"
                onChange={this.handleAddChange}
                value={addingValue.memb___id}
              />
              <input
                type="number"
                className="form-control"
                placeholder="Zen Balance"
                name="zen_balance"
                onChange={this.handleAddChange}
                value={addingValue.zen_balance}
              />
              <input
                type="number"
                className="form-control"
                placeholder="Loan Money"
                name="loan_money"
                onChange={this.handleAddChange}
                value={addingValue.loan_money}
              />
              <div className="feature">
                <button className="btn btn-primary" onClick={() => this.handleSubmit()}>
                  Submit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() =>
                    this.setState({
                      adding: false,
                      addingValue: {
                        memb___id: '',
                        loan_money: '',
                        zen_balance: ''
                      }
                    })
                  }>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default BankingManager;
