import React, { Component } from 'react';

import { ModalHeader, ModalFooter } from 'components/Modal';
import { FormGroupRow, FormGroupRating, FormGroupArray, FormGroupSelect } from 'components/FormTools';

import { commonFormChange, commonAddArray, commonRemoveArray } from 'helpers';
import { hideModal } from 'common/Modal';

const initialValue = {
  Name: '',
  ModVersion: '',
  Version: '1.08',
  Overview: [''],
  Rating: 0
};

class DiabloIIModForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.edit ? this.initStateValue({ ...this.props.mod }) : this.initStateValue({ ...initialValue })
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRating = this.handleRating.bind(this);
    this.handleAddArray = this.handleAddArray.bind(this);
    this.handleRemoveArray = this.handleRemoveArray.bind(this);
  }

  initStateValue(mod) {
    return {
      Archive: null,
      Icon: null,
      ModVersion: mod.ModVersion,
      Version: mod.Version,
      Overview: mod.Overview,
      Rating: mod.Rating
    };
  }

  handleSubmit() {
    this.props.edit ? this.props.onEditMod(this.state.value) : this.props.onAddMod(this.state.value);
    if (!this.props.edit) {
      this.setState({ value: this.initStateValue({ ...initialValue }) });
    }
    hideModal();
  }

  handleChange(event, index) {
    const formValue = commonFormChange(this.state.value, event, index, ['Overview'], ['Archive', 'Icon']);
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
    if (nextProps.edit && nextProps.mod._id !== this.props.mod._id) {
      this.setState({ value: this.initStateValue(nextProps.mod) });
    }
  }

  render() {
    return [
      <ModalHeader
        key="sm_h"
        iconUrl="/images/icons/diablo_2.png"
        label={this.props.edit ? `Update ${this.props.mod.Name}` : 'Add New Diablo II Mod'}
      />,
      <div key="sm_b" className="modal-body">
        <form className="text-right">
          <FormGroupRow type="file" name="Archive" label="Mod File" onChange={this.handleChange} />
          <FormGroupRow type="file" name="Icon" label="Icon File" onChange={this.handleChange} />
          <FormGroupRow
            type="text"
            name="ModVersion"
            label="Mod Version"
            value={this.state.value.ModVersion}
            onChange={this.handleChange}
          />
          <FormGroupSelect
            name="Version"
            label="D2 Version"
            value={this.state.value.Version}
            onChange={this.handleChange}
            options={['1.08', '1.09', '1.10', '1.11', '1.12', '1.13', '1.14']}
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
        </form>
      </div>,
      <ModalFooter key="sm_f" onClickSubmit={() => this.handleSubmit()} />
    ];
  }
}

export default DiabloIIModForm;
