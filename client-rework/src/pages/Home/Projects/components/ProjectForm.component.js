import moment from 'moment';
import React, { Component } from 'react';

import { hideModal } from 'common/Modal';
import { ModalHeader, ModalFooter } from 'components/Modal';
import { FormGroupRow, FormGroupArray, FormGroupChromeColor } from 'components/FormTools';

import { commonFormChange, commonAddArray, commonRemoveArray } from 'helpers';

const initialValue = {
  Name: '',
  Technologies: [''],
  StartTime: '',
  EndTime: '',
  Progress: 0,
  Color: ''
};

class ProjectForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: this.initStateValue() };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAddArray = this.handleAddArray.bind(this);
    this.handleRemoveArray = this.handleRemoveArray.bind(this);
  }

  initStateValue(stateValue) {
    if (this.props.edit) {
      const { StartTime, EndTime } = stateValue ? stateValue : this.props.project;
      return {
        ...this.props.project,
        StartTime: StartTime ? moment(StartTime).format('YYYY-MM-DD') : '',
        EndTime: EndTime ? moment(EndTime).format('YYYY-MM-DD') : ''
      };
    }
    return { ...initialValue };
  }

  handleSubmit() {
    this.props.edit ? this.props.onEditProject(this.state.value) : this.props.onAddProject(this.state.value);
    this.setState({ value: this.initStateValue() });
    hideModal();
  }

  handleChange(event, index) {
    const formValue = commonFormChange(this.state.value, event, index, ['Technologies'], null, ['Color']);
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

  handleRemoveArray(name, index) {
    const formValue = commonRemoveArray(this.state.value, name, index);
    this.setState({
      value: { ...formValue }
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.edit && nextProps.project._id !== this.props.project._id) {
      this.setState({ value: this.initStateValue(nextProps.project) });
    }
  }

  render() {
    return [
      <ModalHeader key="pj_h" iconUrl="/images/icons/project.png" label={'Add Project'} />,
      <div key="pj_b" className="modal-body">
        <form className="text-right">
          <FormGroupRow
            type="text"
            label="Name"
            name="Name"
            onChange={this.handleChange}
            value={this.state.value.Name}
          />
          <FormGroupArray
            type="text"
            label="Technologies"
            arrayValues={this.state.value.Technologies}
            onChange={this.handleChange}
            name="Technologies"
            onAdd={this.handleAddArray}
            onRemove={this.handleRemoveArray}
          />
          <FormGroupChromeColor
            label="Color"
            onChange={this.handleChange}
            name="Color"
            color={this.state.value.Color}
          />
          <FormGroupRow
            type="date"
            label="Start Time"
            name="StartTime"
            onChange={this.handleChange}
            value={this.state.value.StartTime}
          />
          <FormGroupRow
            type="date"
            label="End Time"
            name="EndTime"
            onChange={this.handleChange}
            value={this.state.value.EndTime}
          />
        </form>
      </div>,
      <ModalFooter key="pj_f" onClickSubmit={() => this.handleSubmit()} />
    ];
  }
}

export default ProjectForm;

//    CirclePicker CompactPicker GithubPicker HuePicker MaterialPicker PhotoshopPicker SketchPicker SliderPicker SwatchesPicker TwitterPicker
// AlphaPicker, BlockPicker
