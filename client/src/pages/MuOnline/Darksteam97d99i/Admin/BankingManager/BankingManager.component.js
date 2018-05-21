import './BankingManager.css';
import React, { Component } from 'react';
import { ContainerLoader } from 'common/Loaders';

class BankingManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      editingIndex: null,
      value: {}
    };
    this.handleChange = this.handleChange.bind(this);
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

  render() {
    const { bankings } = this.props;
    const { editing, editingIndex, value } = this.state;
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
                    <button className="btn">
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
                    <button className="btn">
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
      </div>
    );
  }
}

export default BankingManager;
