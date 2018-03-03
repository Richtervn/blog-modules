import React, { Component } from 'react';

import { ModalHeader, ModalFooter } from 'components/Modal';
import {
  FormGroupRow,
  FormGroupRating,
  FormGroupArray,
  FormGroupSelect,
  FormGroupSelectId,
  FormGroupCheck
} from 'components/FormTools';

import { commonFormChange, commonAddArray, commonRemoveArray } from 'helpers';
import { hideModal } from 'common/Modal';

const initialValue = {
  Name: '',
  Title: 'default',
  Class: 'default',
  Level: 0,
  ModId: 'default',
  Overview: [''],
  IsCount: true,
  Rating: 0
};

class DiabloIICharacterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.edit
        ? this.initStateValue({ ...this.props.character })
        : this.initStateValue({ ...initialValue })
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRating = this.handleRating.bind(this);
    this.handleAddArray = this.handleAddArray.bind(this);
    this.handleRemoveArray = this.handleRemoveArray.bind(this);
    this.handleChangeCheck = this.handleChangeCheck.bind(this);
  }

  initStateValue(character) {
    return {
      file: null,
      Name: character.Name,
      Title: character.Title,
      Class: character.Class,
      Level: character.Level,
      ModId: character.ModId,
      Overview: character.Overview,
      Rating: character.Rating,
      IsCount: character.IsCount
    };
  }

  handleSubmit() {
    this.props.edit ? this.props.onEditCharacter(this.state.value) : this.props.onAddCharacter(this.state.value);
    if (!this.props.edit) {
      this.setState({ value: this.initStateValue({ ...initialValue }) });
    }
    hideModal();
  }

  handleChange(event, index) {
    const formValue = commonFormChange(this.state.value, event, index, ['Overview']);
    this.setState({ value: { ...formValue } });
  }

  handleRating(value) {
    this.setState({ value: { ...this.state.value, Rating: value } });
  }

  handleAddArray(name) {
    const formValue = commonAddArray(this.state.value, name);
    this.setState({ value: { ...formValue } });
  }

  handleRemoveArray(name, index) {
    const formValue = commonRemoveArray(this.state.value, name, index);
    this.setState({ value: { ...formValue } });
  }

  handleChangeCheck() {
    this.setState({ value: { ...this.state.value, IsCount: !this.state.value.IsCount } });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.edit && nextProps.character._id !== this.props.character._id) {
      this.setState({ value: this.initStateValue(nextProps.character) });
    }
  }

  render() {
    const { mods } = this.props;
    if (!mods) {
      return null;
    }
    return [
      <ModalHeader
        key="d2c_h"
        iconUrl="/images/icons/diablo_2.png"
        label={this.props.edit ? `Update ${this.props.character.Name}` : 'Add New Diablo II Mod'}
      />,
      <div key="d2c_b" className="modal-body">
        <form className="text-right">
          <FormGroupRow type="file" name="file" label="D2S File" onChange={this.handleChange} />
          <FormGroupRow
            type="text"
            name="Name"
            label="Name"
            value={this.state.value.Name}
            onChange={this.handleChange}
          />
          <FormGroupSelect
            name="Title"
            label="Title"
            value={this.state.value.Title}
            onChange={this.handleChange}
            options={['Slayer', 'Champion', 'Patriarch']}
            placeholder="Select title"
          />
          <FormGroupSelect
            name="Class"
            label="Class"
            value={this.state.value.Class}
            onChange={this.handleChange}
            options={['Assassin', 'Amazon', 'Druid', 'Barbarian', 'Sorceress', 'Paladin', 'Necromancer']}
            placeholder="Select class"
          />
          <FormGroupRow
            type="number"
            name="Level"
            label="Level"
            value={this.state.value.Level}
            onChange={this.handleChange}
          />
          <FormGroupSelectId
            name="ModId"
            label="Mod"
            value={this.state.value.ModId}
            onChange={this.handleChange}
            options={mods.map(mod => ({ _id: mod._id, name: mod.Name }))}
            placeholder="Select mod"
          />
          <FormGroupArray
            type="text"
            name="Overview"
            label="Overview"
            arrayValues={this.state.value.Overview}
            onChange={this.handleChange}
            onRemove={this.handleRemoveArray}
            onAdd={this.handleAddArray}
          />
          <FormGroupRating label="Rating" rating={this.state.value.Rating} onRating={this.handleRating} />
          <FormGroupCheck
            label="Is Count"
            onChangeCheck={this.handleChangeCheck}
            name="IsCount"
            value={this.state.value.IsCount}
          />
        </form>
      </div>,
      <ModalFooter key="d2c_f" onClickSubmit={() => this.handleSubmit()} />
    ];
  }
}

export default DiabloIICharacterForm;
