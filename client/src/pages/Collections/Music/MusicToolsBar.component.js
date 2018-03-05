import './MusicToolsBar.css';
import React, { Component } from 'react';

import { openModal } from 'common/Modal';

import { RadioSearchBar } from 'components/ToolsBars';

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
      <RadioSearchBar
        onClickAdd={() => openModal('AddSong')}
        inputValue={this.state.value}
        onChange={this.handleChange}
        inputName="value"
        options={['Artist', 'Name', 'Genre']}
        radioName="option"
        radioValue={this.state.option}
        customClass="music-tools-bar"
      />
    );
  }
}

export default MusicToolsBar;
