import React, { Component } from 'react';

import { ModalHeader, ModalFooter } from 'components/Modal';
import { FormGroupRow, FormGroupRating, FormGroupArray } from 'components/FormTools';

import { commonFormChange, commonAddArray, commonRemoveArray } from 'helpers';
import { hideModal } from 'common/Modal';

const initialValue = {
  Name: '',
  Overview: [''],
  Rating: 0
};

class DiabloIIToolForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.edit ? this.initStateValue({ ...this.props.tool }) : this.initStateValue({ ...initialValue })
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRating = this.handleRating.bind(this);
    this.handleAddArray = this.handleAddArray.bind(this);
    this.handleRemoveArray = this.handleRemoveArray.bind(this);
  }

  initStateValue(tool) {
    return {
      Archive: null,
      Icon: null,
      ToolVersion: tool.ToolVersion,
      Version: tool.Version,
      Overview: tool.Overview,
      Rating: tool.Rating
    };
  }

  handleSubmit() {
    const { tool, edit, onEditTool, onAddTool } = this.props;
    if (edit) {
      onEditTool({ ...this.state.value, _id: tool._id });
    } else {
      onAddTool(this.state.value);
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
    if (nextProps.edit && nextProps.tool._id !== this.props.tool._id) {
      this.setState({ value: this.initStateValue(nextProps.tool) });
    }
  }

  render() {
    return [
      <ModalHeader
        key="dt_h"
        iconUrl="/images/icons/diablo_2.png"
        label={this.props.edit ? `Update ${this.props.tool.Name}` : 'Add New Diablo II Tool'}
      />,
      <div key="dt_b" className="modal-body">
        <form className="text-right">
          <FormGroupRow type="file" name="Archive" label="Tool File" onChange={this.handleChange} />
          <FormGroupRow type="file" name="Icon" label="Icon File" onChange={this.handleChange} />
          <FormGroupRow
            type="text"
            name="Name"
            label="Name"
            value={this.state.value.Name}
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
      <ModalFooter key="dt_f" onClickSubmit={() => this.handleSubmit()} />
    ];
  }
}

export default DiabloIIToolForm;
