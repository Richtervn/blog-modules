import React, { Component } from 'react';

const availableOptions = ['Name', 'Artist', 'Genre'];

export default class ToolsBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: 'Name',
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.state[name] = value;
    if (name == 'option') {
      this.state.value = '';
    }
    this.setState(this.state);
    if (name == 'value') {
      this.props.onSearchInput({ [this.state.option]: this.state.value });
    }
  }

  render() {
    return (
      <div className="row no-row-margin static-position">
        <button className="btn btn-secondary music-tool-bar-button" data-toggle="modal" data-target="#addMusicModal">
          <i className="fa fa-plus-square" />
        </button>
        <div className="input-group music-tool-bar-input static-position">
          <span className="input-group-addon static-position">
            <i className="fa fa-search" />
          </span>
          <input
            className="form-control add-manga-form-input no-z-index"
            type="text"
            onChange={this.handleChange}
            name="value"
          />
        </div>
        <div className="music-tool-bar-options static-position">
          {availableOptions.map((option, i) => (
            <div key={i} className="form-check form-check-inline mr-search-radio static-position">
              <label className="form-check-label" style={{ color: 'black' }}>
                <input
                  className="form-check-input"
                  type="radio"
                  value={option}
                  name="option"
                  checked={this.state.option == option}
                  onChange={this.handleChange}
                />
                &nbsp;{option}
              </label>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
