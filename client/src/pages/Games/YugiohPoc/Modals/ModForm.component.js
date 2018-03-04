import React, { Component } from 'react';

import { ModalHeader, ModalFooter } from 'components/Modal';
import { FormGroupRow, FormGroupRating, FormGroupArray, FormGroupArea } from 'components/FormTools';

import { commonFormChange, commonAddArray, commonRemoveArray } from 'helpers';
import { hideModal } from 'common/Modal';

const initialValue = {
  Name: '',
  Credits: [''],
  Introduction: '',
  Description: '',
  Rating: 0
};

class YugiohPocModForm extends Component {
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
      Name: mod.Name,
      Icon: null,
      Image: null,
      Credits: mod.Credits,
      Introduction: mod.Introduction,
      Description: mod.Description,
      Rating: mod.Rating
    };
  }

  handleSubmit() {
    const { mod, edit, onEditMod, onAddMod } = this.props;
    if (edit) {
      onEditMod({ ...this.state.value, _id: mod._id });
    } else {
      onAddMod(this.state.value);
      this.setState({ value: this.initStateValue({ ...initialValue }) });
    }
    hideModal();
  }

  handleChange(event, index) {
    const formValue = commonFormChange(this.state.value, event, index, ['Credits'], ['Icon', 'Image']);
    console.log(formValue);
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
        key="ym_h"
        iconUrl="/images/icons/yugioh_poc.png"
        label={this.props.edit ? `Update ${this.props.mod.Name}` : 'Add New YugiOh! Poc Mod'}
      />,
      <div key="ym_b" className="modal-body">
        <form className="text-right">
          <FormGroupRow type="file" name="Icon" label="Icon File" onChange={this.handleChange} />
          <FormGroupRow type="file" name="Image" label="Image File" onChange={this.handleChange} />
          <FormGroupRow
            type="text"
            name="Name"
            label="Name"
            value={this.state.value.Name}
            onChange={this.handleChange}
          />
          <FormGroupArea
            label="Introduction"
            name="Introduction"
            value={this.state.value.Introduction}
            onChange={this.handleChange}
          />
          <FormGroupArea
            label="Description"
            name="Description"
            value={this.state.value.Description}
            onChange={this.handleChange}
          />
          <FormGroupArray
            type="text"
            name="Credits"
            label="Credits"
            arrayValues={this.state.value.Credits}
            onChange={this.handleChange}
            onRemove={this.handleRemoveArray}
            onAdd={this.handleAddArray}
          />
          <FormGroupRating label="Rating" rating={this.state.value.Rating} onRating={this.handleRating} />
        </form>
      </div>,
      <ModalFooter key="ym_f" onClickSubmit={() => this.handleSubmit()} />
    ];
  }
}

export default YugiohPocModForm;
