import _ from 'underscore';
import React, { Component } from 'react';

import { hideModal } from 'common/Modal';
import { ModalHeader, ModalFooter } from 'components/Modal';
import { FormGroupRow, FormGroupArray, FormGroupRating } from 'components/FormTools';

import { commonFormChange, commonAddArray, commonRemoveArray, commonValidate } from 'helpers';

const initialValue = {
  Name: '',
  Image: null,
  Background: null,
  Publishers: [''],
  Genres: [''],
  Periods: [''],
  Rating: 0
};

class GamingHistoryForm extends Component {
  constructor(props) {
    super(props);
    const { edit, game } = this.props;
    this.state = { value: edit ? this.initStateValue(game) : this.initStateValue(), error: {} };
  }

  initStateValue(stateValue) {
    if (this.props.edit) {
      return { ...stateValue };
    }
    return { ...initialValue };
  }

  handleSubmit() {
    const { edit, onEditGame, onAddGame } = this.props;
    const error = commonValidate(this.state.value, edit ? ['Name'] : ['Name', 'Image', 'Background'], [
      'Publishers',
      'Genres',
      'Periods'
    ]);
    this.setState({ error });
    if (!_.isEmpty(error)) {
      return;
    }
    if (!edit) {
      onAddGame(this.state.value, () => this.setState({ value: this.initStateValue() }));
    } else {
      onEditGame(this.state.value);
    }
    hideModal();
  }

  handleChange(event, index) {
    const formValue = commonFormChange(
      this.state.value,
      event,
      index,
      ['Publishers', 'Genres', 'Periods'],
      ['Image', 'Background']
    );
    this.setState({
      value: { ...formValue }
    });
  }

  handleAddArray(name) {
    const formValue = commonAddArray(this.state.value, name);
    this.setState({
      value: { ...formValue }
    });
  }

  handleRating(value) {
    this.setState({ value: { ...this.state.value, Rating: value } });
  }

  handleRemoveArray(name, index) {
    const formValue = commonRemoveArray(this.state.value, name, index);
    this.setState({
      value: { ...formValue }
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.edit && nextProps.game._id !== this.props.game._id) {
      this.setState({ value: this.initStateValue(nextProps.game) });
    }
  }

  render() {
    const { value, error } = this.state;
    const { edit, game } = this.props;
    return [
      <ModalHeader
        key="gh_h"
        iconUrl="/images/icons/gamepad.png"
        label={edit ? `Update ${game.Name}` : 'Add New Favorite Game'}
      />,
      <div key="gh_b" className="modal-body">
        <form className="text-right">
          <FormGroupRow
            type="file"
            name="Image"
            label="Cover Image"
            onChange={e => this.handleChange(e)}
            error={error.file}
          />
          <FormGroupRow
            type="file"
            name="Background"
            label="Background"
            onChange={e => this.handleChange(e)}
            error={error.file}
          />
          <FormGroupRow
            type="text"
            label="Name"
            name="Name"
            onChange={e => this.handleChange(e)}
            value={value.Name}
            error={error.Name}
          />
          <FormGroupArray
            type="text"
            label="Publishers"
            arrayValues={value.Publishers}
            onChange={(e, i) => this.handleChange(e, i)}
            error={error.Publishers}
            name="Publishers"
            onAdd={name => this.handleAddArray(name)}
            onRemove={(name, i) => this.handleRemoveArray(name, i)}
          />
          <FormGroupArray
            type="text"
            label="Genres"
            arrayValues={value.Genres}
            onChange={(e, i) => this.handleChange(e, i)}
            error={error.Genres}
            name="Genres"
            onAdd={name => this.handleAddArray(name)}
            onRemove={(name, i) => this.handleRemoveArray(name, i)}
          />
          <FormGroupArray
            type="text"
            label="Periods"
            arrayValues={this.state.value.Periods}
            onChange={(e, i) => this.handleChange(e, i)}
            name="Periods"
            error={error.Periods}
            onAdd={name => this.handleAddArray(name)}
            onRemove={(name, i) => this.handleRemoveArray(name, i)}
          />
          <FormGroupRating label="Rating" rating={value.Rating} onRating={v => this.handleRating(v)} />
        </form>
      </div>,
      <ModalFooter key="gh_f" onClickSubmit={() => this.handleSubmit()} />
    ];
  }
}

export default GamingHistoryForm;
