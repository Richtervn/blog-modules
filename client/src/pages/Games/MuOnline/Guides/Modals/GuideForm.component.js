import React, { Component } from 'react';

import { ModalHeader, ModalFooter } from 'components/Modal';
import { FormGroupRow, FormGroupRating, FormGroupArray, FormGroupArea } from 'components/FormTools';

import { commonFormChange, commonAddArray, commonRemoveArray } from 'helpers';
import { hideModal } from 'common/Modal';

const initialValue = {
  Name: '',
  Credits: [''],
  Rating: 0,
  Description: ''
};

class MuGuideForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.edit ? this.initStateValue({ ...this.props.guide }) : this.initStateValue({ ...initialValue })
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRating = this.handleRating.bind(this);
    this.handleAddArray = this.handleAddArray.bind(this);
    this.handleRemoveArray = this.handleRemoveArray.bind(this);
  }

  initStateValue(guide) {
    return {
      file: null,
      Name: guide.Name,
      Credits: guide.Credits,
      Description: guide.Description,
      Rating: guide.Rating
    };
  }

  handleSubmit() {
    const { guide, edit, onEditGuide, onAddGuide } = this.props;
    if (edit) {
      onEditGuide({ ...this.state.value, _id: guide._id });
    } else {
      onAddGuide(this.state.value);
      this.setState({ value: this.initStateValue({ ...initialValue }) });
    }
    hideModal();
  }

  handleChange(event, index) {
    const formValue = commonFormChange(this.state.value, event, index, ['Credits']);
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
    if (nextProps.edit && nextProps.guide._id !== this.props.guide._id) {
      this.setState({ value: this.initStateValue(nextProps.guide) });
    }
  }

  render() {
    return [
      <ModalHeader
        key="mv_h"
        iconUrl="/images/icons/mulogo.png"
        label={this.props.edit ? `Update ${this.props.guide.Name}` : 'Add New MuOnline Guide'}
      />,
      <div key="mv_b" className="modal-body">
        <form className="text-right">
          <FormGroupRow type="file" name="file" label="Image File" onChange={this.handleChange} />
          <FormGroupRow
            type="text"
            name="Name"
            label="Name"
            value={this.state.value.Name}
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
          <FormGroupArea
            name="Description"
            label="Description"
            onChange={this.handleChange}
            value={this.state.value.Description}
          />
          <FormGroupRating label="Rating" rating={this.state.value.Rating} onRating={this.handleRating} />
        </form>
      </div>,
      <ModalFooter key="mv_f" onClickSubmit={() => this.handleSubmit()} />
    ];
  }
}

export default MuGuideForm;
