import './IntroductionCard.css';
import _ from 'underscore';
import React, { Component } from 'react';

class IntroductionCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      value: this.initStateValue(this.props.info)
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClearChange = this.handleClearChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleInsertField = this.handleInsertField.bind(this);
  }

  initStateValue(info) {
    const valueState = {};
    Object.keys(info).forEach((key, i) => {
      valueState[`key${i}`] = key;
      valueState[`value${i}`] = info[key];
    });
    return valueState;
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ value: { ...this.state.value, [name]: value } });
  }

  handleClearChange() {
    this.setState({ editing: false, value: this.initStateValue(this.props.info) });
  }

  handleInsertField() {
    const fieldCount = Object.keys(this.state.value).length / 2;
    this.setState({ value: { ...this.state.value, [`key${fieldCount}`]: '', [`value${fieldCount}`]: '' } });
  }

  handleRemoveField(event, index) {
    event.stopPropagation();
    this.setState({ value: _.omit(this.state.value, `key${index}`, `value${index}`) });
  }

  handleSave() {
    const info = {};
    const fieldCount = Object.keys(this.state.value).length / 2;
    for (let i = 0; i < fieldCount; i++) {
      info[this.state.value[`key${i}`]] = this.state.value[`value${i}`];
    }
    this.setState({ editing: false });
    this.props.onSave(info);
  }

  render() {
    const { imgUrl, info } = this.props;
    const { editing } = this.state;
    return (
      <div className="introduction-card">
        <img src={imgUrl} alt="Introcard" />
        <div className="introduction-card-info">
          {!editing &&
            Object.keys(info).map(key => (
              <div key={key} className="info-line">
                <div className="info-key">{key} :</div>
                <div className="info-value">{info[key]}</div>
              </div>
            ))}
          {editing &&
            Object.keys(this.state.value).map((key, i) => {
              if (i < Object.keys(this.state.value).length / 2) {
                return (
                  <div className="info-line" key={i}>
                    <input
                      className="info-key-input"
                      value={this.state.value[`key${i}`]}
                      onChange={this.handleChange}
                      name={`key${i}`}
                    />
                    <input
                      className="info-value-input"
                      value={this.state.value[`value${i}`]}
                      onChange={this.handleChange}
                      name={`value${i}`}
                    />
                    <button className="remove-field-btn" onClick={e => this.handleRemoveField(e, i)}>
                      <i className="fa fa-times" />
                    </button>
                  </div>
                );
              }
              return null;
            })}
          {editing && (
            <button className="btn btn-block btn-primary" onClick={() => this.handleInsertField()}>
              <i className="fa fa-plus" />&nbsp;Insert field
            </button>
          )}
        </div>
        <div className="introduction-card-feature">
          {!editing && (
            <button className="btn" onClick={() => this.setState({ editing: true })}>
              <i className="fa fa-edit" />
            </button>
          )}
          {editing && [
            <button key="ics" className="btn" onClick={() => this.handleSave()}>
              <i className="fa fa-save" />
            </button>,
            <button key="icc" className="btn" onClick={() => this.handleClearChange()}>
              <i className="fa fa-times" />
            </button>
          ]}
        </div>
      </div>
    );
  }
}

export default IntroductionCard;
