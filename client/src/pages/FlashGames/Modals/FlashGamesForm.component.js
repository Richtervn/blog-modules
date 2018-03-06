import React, { Component } from 'react';
import { ModalHeader, ModalFooter } from 'components/Modal';
import { FormGroupRow, FormGroupArea } from 'components/FormTools';
import {commonFormChange} from 'helpers';

const initialFormValue = {
  Name: '',
  File: '',
  Width: 0,
  Height: 0,
  Guide: ''
};

class FlashGamesForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.edit ? this.getDefaultState(this.props.game) : this.getDefaultState(initialFormValue);
    this.handleChange = this.handleChange.bind(this);
    this.getDefaultState = this.getDefaultState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getDefaultState(gameState) {
    const formState = { ...gameState };
    formState.Width = gameState.Width || 0;
    formState.Height = gameState.Height || 0;
    formState.Guide = gameState.Guide || '';
    return { value: gameState };
  }

  handleChange(event) {
    const valueState = commonFormChange(this.state.value, event);
    this.setState({ value: valueState });
  }

  handleSubmit() {
    const { edit, onAddGame, onEditGame } = this.props;
    edit ? onEditGame(this.state.value) : onAddGame(this.state.value);
    window.$('#modal').modal('hide');
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.edit) {
      this.setState(this.getDefaultState(nextProps.game));
    }
  }

  render() {
    const { Name, Width, Height, Guide } = this.state.value;
    return [
      <ModalHeader
        key="fg_h"
        iconUrl="/images/icons/gamepad.png"
        label={this.props.edit ? `Edit ${this.props.game.Name}` : 'Add Flash Game'}
      />,
      <div key="fg_b" className="modal-body">
        <form className="text-right">
          <FormGroupRow type="file" name="File" onChange={this.handleChange} label="SWF File" />
          <FormGroupRow type="text" name="Name" onChange={this.handleChange} label="Name" value={Name} />
          <FormGroupRow type="number" name="Width" onChange={this.handleChange} label="Width" value={Width} />
          <FormGroupRow type="number" name="Height" onChange={this.handleChange} label="Height" value={Height} />
          <FormGroupArea name="Guide" onChange={this.handleChange} label="Guide" value={Guide} />
        </form>
      </div>,
      <ModalFooter key="fg_f" onClickSubmit={() => this.handleSubmit()} />
    ];
  }
}

export default FlashGamesForm;
