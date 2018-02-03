import './MusicToolsBar.css';
import React, { Component } from 'react';
import { createElementId } from 'utils';
import { openModal } from 'common/Modal';

const availableOptions = ['Artist', 'Name', 'Genre'];

class MusicToolsBar extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      option: 'Artist',
      value: ''
    };
  }

  handleChange(event) {
    const { name, value } = event.target;
    const nextState = { ...this.state };
    nextState[name] = value;
    if (name === 'option') {
      nextState.value = '';
    }
    this.setState(nextState);
    if (name === 'value') {
      this.props.onSearchSong({ [nextState.option]: nextState.value });
    }
  }

  render() {
    return (
      <div className="music-tools-bar">
        <button className="btn" onClick={() => openModal('AddSong')}>
          <i className="fa fa-plus-square" />
        </button>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fa fa-search" />
            </span>
            <input className="form-control" type="text" onChange={this.handleChange} name="value" />
          </div>
        </div>
        <div className="options-selector">
          {availableOptions.map((option, i) => (
            <div key={i} className="form-check form-check-inline">
              <input
                id={createElementId(option, 'opt')}
                className="form-check-input"
                type="radio"
                value={option}
                name="option"
                checked={this.state.option === option}
                onChange={this.handleChange}
              />
              <label className="form-check-label" htmlFor={createElementId(option, 'opt')}>
                &nbsp;{option}
              </label>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default MusicToolsBar;
