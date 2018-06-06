import React, { Component } from 'react';

import { ModalHeader, ModalFooter } from 'components/Modal';
import { FormGroupRow, FormGroupRating, FormGroupArea } from 'components/FormTools';

import { commonFormChange } from 'helpers';
import { hideModal } from 'common/Modal';

const initialValue = {
  Rating: 0,
  Description: '',
  Version: ''
};

class StarcraftModForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.edit ? this.initStateValue({ ...this.props.mod }) : this.initStateValue({ ...initialValue })
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRating = this.handleRating.bind(this);
  }

  initStateValue(mod) {
    return {
      File: '',
      Rating: mod.Rating,
      Description: mod.Description,
      Version: mod.Version
    };
  }

  handleSubmit() {
    const { edit, onEditMod, onAddMod, mod } = this.props;
    if (edit) {
      onEditMod({ ...this.state.value, _id: mod._id });
    } else {
      onAddMod(this.state.value);
      this.setState({ value: this.initStateValue({ ...initialValue }) });
    }
    hideModal();
  }

  handleChange(event, index) {
    const formValue = commonFormChange(this.state.value, event);
    this.setState({
      value: { ...formValue }
    });
  }

  handleRating(value) {
    this.setState({ value: { ...this.state.value, Rating: value } });
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
        iconUrl="/images/icons/starcraft.png"
        label={this.props.edit ? `Update ${this.props.mod.Name}` : 'Add New Starcraft Mod'}
      />,
      <div key="sm_b" className="modal-body">
        <form className="text-right">
          <FormGroupRow type="file" name="File" label="Mod File" onChange={this.handleChange} accept=".zip, .rar, .7z"/>
          <FormGroupRating label="Rating" rating={this.state.value.Rating} onRating={this.handleRating} />
          <FormGroupArea
            name="Description"
            label="Description"
            onChange={this.handleChange}
            value={this.state.value.Description}
          />
          <FormGroupRow
            type="text"
            name="Version"
            label="Version"
            onChange={this.handleChange}
            value={this.state.value.Version}
          />
        </form>
      </div>,
      <ModalFooter key="sm_f" onClickSubmit={() => this.handleSubmit()} />
    ];
  }
}

export default StarcraftModForm;
