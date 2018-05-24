import './CreditsManager.css';
import React, { Component } from 'react';
import { ContainerLoader } from 'common/Loaders';

import { PureAddCardButton } from 'components/Buttons';

class CreditManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      adding: false,
      editingIndex: null,
      value: {},
      addingValue: {
        memb___id: '',
        credits: ''
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAddChange = this.handleAddChange.bind(this);
  }

  componentWillMount() {
    this.props.onGetCredits();
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
    this.props.onAddCredit(this.state.addingValue);
    this.setState({ adding: false, addingValue: { memb___id: '', credits: '' } });
  }

  handleSave() {
    this.props.onEditCredit(this.state.value);
    this.setState({ editing: false, value: {} });
  }

  render() {
    const { credits, onDeleteCredit } = this.props;
    const { editing, editingIndex, value, adding, addingValue } = this.state;
    if (!credits) {
      return <ContainerLoader />;
    }
    return (
      <div id="ds9799-credit-manager">
        {credits.map((credit, i) => (
          <div className="wrapper" key={i}>
            <div className="credit-card">
              <div className="label">
                {credit.memb___id}
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
                            ...credit
                          }
                        })
                      }>
                      <i className="fa fa-pencil" />
                    </button>
                    <button className="btn" onClick={() => onDeleteCredit(credit.memb___id)}>
                      <i className="fa fa-times" />
                    </button>
                  </div>
                )}
              </div>
              <div className="content">
                <div className="row-wrapper">
                  <label>Credits :</label>
                  <input
                    name="credits"
                    className="form-control"
                    value={editing && editingIndex === i ? value.credits : credit.credits}
                    onChange={this.handleChange}
                    disabled={!editing || editingIndex !== i}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
        {!adding && (
          <div className="add-credit-btn">
            <PureAddCardButton onClick={() => this.setState({ adding: true })} />
          </div>
        )}
        {adding && (
          <div className="form-wrapper">
            <div className="add-credit-form">
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
                placeholder="Credits"
                name="credits"
                onChange={this.handleAddChange}
                value={addingValue.credits}
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

export default CreditManager;
