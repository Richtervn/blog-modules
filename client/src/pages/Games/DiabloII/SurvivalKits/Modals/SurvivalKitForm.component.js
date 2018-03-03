<<<<<<< HEAD
import React, { Component } from 'react';

import { ModalHeader, ModalFooter } from 'components/Modal';
import { FormGroupRow, FormGroupRating, FormGroupArray, FormGroupSelect, FormGroupArea } from 'components/FormTools';

import { commonFormChange, commonAddArray, commonRemoveArray } from 'helpers';
import { hideModal } from 'common/Modal';

const initialValue = {
  Name: '',
  Type: 'default',
  Description: '',
  Overview: [''],
  Rating: 0
};

class DiabloIISurvivalKitForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.edit
        ? this.initStateValue({ ...this.props.survivalKit })
        : this.initStateValue({ ...initialValue })
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRating = this.handleRating.bind(this);
    this.handleAddArray = this.handleAddArray.bind(this);
    this.handleRemoveArray = this.handleRemoveArray.bind(this);
  }

  initStateValue(survivalKit) {
    return {
      file: null,
      Name: survivalKit.Name,
      Type: survivalKit.Type,
      Overview: survivalKit.Overview,
      Description: survivalKit.Description,
      Rating: survivalKit.Rating
    };
  }

  handleSubmit() {
    this.props.edit ? this.props.onEditSurvivalKit(this.state.value) : this.props.onAddSurvivalKit(this.state.value);
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

  componentWillReceiveProps(nextProps) {
    if (nextProps.edit && nextProps.survivalKit._id !== this.props.survivalKit._id) {
      this.setState({ value: this.initStateValue(nextProps.survivalKit) });
    }
  }

  render() {
    return [
      <ModalHeader
        key="d2sk_h"
        iconUrl="/images/icons/diablo_2.png"
        label={this.props.edit ? `Update ${this.props.survivalKit.Name}` : 'Add New Diablo II Mod'}
      />,
      <div key="d2sk_b" className="modal-body">
        <form className="text-right">
          <FormGroupRow type="file" name="file" label="File" onChange={this.handleChange} />
          <FormGroupRow
            type="text"
            name="Name"
            label="Name"
            value={this.state.value.Name}
            onChange={this.handleChange}
          />
          <FormGroupSelect
            name="Type"
            label="Type"
            value={this.state.value.Type}
            onChange={this.handleChange}
            options={['Character', 'Item', 'Store']}
            placeholder="Select type"
          />
          <FormGroupArea
            name="Description"
            label="Description"
            value={this.state.value.Description}
            onChange={this.handleChange}
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
      <ModalFooter key="d2sk_f" onClickSubmit={() => this.handleSubmit()} />
    ];
  }
}

export default DiabloIISurvivalKitForm;
=======
//   AddD2SurvivalKit: {
//     file: null,
//     Name: '',
//     Type: 'Character',
//     Description: '',
//     Overview: [''],
//     Rating: 0
//   },

// File:
// Chọn tệp
// Name:

// Type:

// Description:

// Overview:


//   Add Overview
// Rating:
>>>>>>> 752683a55f60625610abd7a6842170bf47787fd4
