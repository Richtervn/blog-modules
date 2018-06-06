import React, { Component } from 'react';

import { ModalHeader, ModalFooter } from 'components/Modal';
import { FormGroupRow, FormGroupArray, FormGroupRating, FormGroupArea } from 'components/FormTools';
import { commonFormChange, commonAddArray, commonRemoveArray } from 'helpers';
import { hideModal } from 'common/Modal';

const initialValue = {
  Rating: 0,
  File: null,
  Matchup: '',
  Description: '',
  Tipntrick: ['']
};

class StarcraftMapForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.edit ? this.initStateValue({ ...this.props.map }) : this.initStateValue({ ...initialValue })
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRating = this.handleRating.bind(this);
    this.handleAddArray = this.handleAddArray.bind(this);
    this.handleRemoveArray = this.handleRemoveArray.bind(this);
  }

  initStateValue(map) {
    return {
      File: '',
      Rating: map.Rating,
      Matchup: map.Matchup,
      Description: map.Description,
      Tipntrick: map.Tipntrick
    };
  }

  handleSubmit() {
    const { edit, onEditMap, onAddMap, map } = this.props;
    if (edit) {
      onEditMap({ ...this.state.value, _id: map._id });
    } else {
      onAddMap(this.state.value);
      this.setState({ value: this.initStateValue({ ...initialValue }) });
    }
    hideModal();
  }

  handleChange(event, index) {
    const formValue = commonFormChange(this.state.value, event, index, ['Tipntrick'], ['File']);
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
    if (nextProps.edit && nextProps.map._id !== this.props.map._id) {
      this.setState({ value: this.initStateValue(nextProps.map) });
    }
  }

  render() {
    return [
      <ModalHeader
        key="sm_h"
        iconUrl="/images/icons/starcraft.png"
        label={this.props.edit ? `Update ${this.props.map.Name}` : 'Add New Starcraft Map'}
      />,
      <div key="sm_b" className="modal-body">
        <form className="text-right">
          <FormGroupRow type="file" name="File" label="Map File" onChange={this.handleChange} accept=".scx, .scm"/>
          <FormGroupRating label="Rating" rating={this.state.value.Rating} onRating={this.handleRating} />
          <FormGroupRow
            type="text"
            name="Matchup"
            label="Match up"
            onChange={this.handleChange}
            value={this.state.value.Matchup}
          />
          <FormGroupArea
            name="Description"
            label="Description"
            onChange={this.handleChange}
            value={this.state.value.Description}
          />
          <FormGroupArray
            type="text"
            label="Tip and Trick"
            arrayValues={this.state.value.Tipntrick}
            onChange={this.handleChange}
            name="Tipntrick"
            onAdd={this.handleAddArray}
            onRemove={this.handleRemoveArray}
          />
        </form>
      </div>,
      <ModalFooter key="sm_f" onClickSubmit={() => this.handleSubmit()} />
    ];
  }
}

export default StarcraftMapForm;
