import React, { Component } from 'react';

export default class QuickUpdateBar extends Component {
  constructor(props) {
    super(props);
    this.state = { url: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ url: event.target.value });
  }

  render() {
    return (
      <div className="row no-row-margin">
        <input
          type="text"
          className="form-control box-margin add-manga-form-input"
          onChange={this.handleChange}
          value={this.state.url}
          style={{ width: '84%' }}
          placeholder="Input url"
        />
        <button
          className="btn btn-secondary channel-button box-margin"
          style={{ width: '10%' }}
          onClick={() => {
            this.props.onSubmit(this.state);
            this.setState({ url: '' });
          }}>
          <i className="fa fa-plus-circle" />
        </button>
      </div>
    );
  }
}
