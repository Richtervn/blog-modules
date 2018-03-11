import React, { Component } from 'react';

import { ModalHeader, ModalFooter } from 'components/Modal';
import { FormGroupRow, FormGroupRating, FormGroupSelect, FormGroupArea } from 'components/FormTools';

import { commonFormChange, commonAddArray, commonRemoveArray } from 'helpers';
import { hideModal } from 'common/Modal';

const initialValue = {
  Name: '',
  Class: 'default',
  Description: '',
  Strength: '',
  Agility: '',
  Vitality: '',
  Energy: '',
  Command: '',
  Invertory: '',
  Version: '',
  Reset: '',
  GrandReset: '',
  Rating: 0
};

class MuCharacterForm extends Component {
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
  }

  initStateValue(character) {
    return {
      Name: character.Name,
      Class: character.Class || 'default',
      Description: character.Description || '',
      Strength: character.Strength || '',
      Agility: character.Agility || '',
      Vitality: character.Vitality || '',
      Energy: character.Energy || '',
      Command: character.Command || '',
      Invertory: character.Invertory || '',
      Reset: character.Reset || '',
      GrandReset: character.GrandReset || '',
      Version: character.Version || '',
      Rating: character.Rating
    };
  }

  handleSubmit() {
    const { character, edit, onEditCharacter, onAddCharacter } = this.props;
    if (edit) {
      onEditCharacter({ ...this.state.value, _id: character._id });
    } else {
      onAddCharacter(this.state.value);
      this.setState({ value: this.initStateValue({ ...initialValue }) });
    }
    hideModal();
  }

  handleChange(event, index) {
    const formValue = commonFormChange(this.state.value, event, index);
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

  componentWillReceiveProps(nextProps) {
    if (nextProps.edit && nextProps.character._id !== this.props.character._id) {
      this.setState({ value: this.initStateValue(nextProps.character) });
    }
  }

  render() {
    return [
      <ModalHeader
        key="mv_h"
        iconUrl="/images/icons/mulogo.png"
        label={this.props.edit ? `Update ${this.props.character.Name}` : 'Add New MuOnline Character'}
      />,
      <div key="mv_b" className="modal-body">
        <form className="text-right">
          <FormGroupRow
            type="text"
            name="Name"
            label="Name"
            value={this.state.value.Name}
            onChange={this.handleChange}
          />
          <FormGroupSelect
            name="Class"
            label="Class"
            placeholder="Select Character class"
            value={this.state.value.Class}
            onChange={this.handleChange}
            options={[
              'Dark Knight',
              'Blade Knight',
              'Blade Master',
              'Elf',
              'Muse Elf',
              'High Elf',
              'Dark Wizard',
              'Soul Master',
              'Grand Master',
              'Magic Gladiator',
              'Duel Master',
              'Dark Lord',
              'Lord Emperor',
              'Summoner',
              'Bloody Summoner',
              'Dimension Master',
              'Grow Lancer',
              'Mirage Lancer'
            ]}
          />
          <FormGroupArea
            name="Description"
            label="Description"
            onChange={this.handleChange}
            value={this.state.value.Description}
          />
          <FormGroupRow
            type="number"
            label="Strength"
            name="Strength"
            value={this.state.value.Strength}
            onChange={this.handleChange}
          />
          <FormGroupRow
            type="number"
            label="Agility"
            name="Agility"
            value={this.state.value.Agility}
            onChange={this.handleChange}
          />
          <FormGroupRow
            type="number"
            label="Vitality"
            name="Vitality"
            value={this.state.value.Vitality}
            onChange={this.handleChange}
          />
          <FormGroupRow
            type="number"
            label="Energy"
            name="Energy"
            value={this.state.value.Energy}
            onChange={this.handleChange}
          />
          <FormGroupRow
            type="number"
            label="Command"
            name="Command"
            value={this.state.value.Command}
            onChange={this.handleChange}
          />
          <FormGroupRow
            type="number"
            label="Reset"
            name="Reset"
            value={this.state.value.Reset}
            onChange={this.handleChange}
          />
          <FormGroupRow
            type="number"
            label="Grand Reset"
            name="GrandReset"
            value={this.state.value.GrandReset}
            onChange={this.handleChange}
          />
          <FormGroupArea
            name="Invertory"
            label="Invertory"
            onChange={this.handleChange}
            value={this.state.value.Invertory}
          />
          <FormGroupRow
            type="text"
            name="Version"
            label="Version"
            value={this.state.value.Version}
            onChange={this.handleChange}
          />
          <FormGroupRating label="Rating" rating={this.state.value.Rating} onRating={this.handleRating} />
        </form>
      </div>,
      <ModalFooter key="mv_f" onClickSubmit={() => this.handleSubmit()} />
    ];
  }
}

export default MuCharacterForm;
