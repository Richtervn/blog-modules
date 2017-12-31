import React, { Component } from 'react';

class QuickUpdateBar extends Component {
  constructor(props) {
    super(props);
    this.state = { url: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleChange(event) {
    this.setState({ url: event.target.value });
  }

  handleKeyPress(e) {
    if (e.key == 'Enter') {
      this.handleSubmit();
    }
  }

  handleSubmit() {
    this.props.onSubmit(this.state);
    this.setState({ url: '' });
  }

  render() {
    return (
      <div className="row no-row-margin" onKeyDown={this.handleKeyPress}>
        <input
          type="text"
          className="form-control box-margin add-manga-form-input"
          onChange={this.handleChange}
          value={this.state.url}
          style={{ width: '84%' }}
          placeholder="[Quick Update] Input Url"
        />
        <button
          className="btn btn-secondary channel-button box-margin"
          style={{ width: '10%' }}
          onClick={() => this.handleSubmit()}>
          <i className="fa fa-plus-circle" />
        </button>
      </div>
    );
  }
}

export default QuickUpdateBar;
