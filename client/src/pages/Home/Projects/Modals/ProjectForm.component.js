import _ from 'underscore';
import moment from 'moment';
import React, { Component } from 'react';

import { hideModal } from 'common/Modal';
import { ModalHeader, ModalFooter } from 'components/Modal';
import { FormGroupRow, FormGroupArray, FormGroupChromeColor } from 'components/FormTools';

import { commonFormChange, commonAddArray, commonRemoveArray, commonValidate } from 'helpers';

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
    this.state = { value: this.initStateValue(), error: {} };
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
    const { edit, onEditProject, onAddProject } = this.props;
    const error = commonValidate(this.state.value, ['Name', 'Color'], ['Technologies']);
    this.setState({ error });
    if (!_.isEmpty(error)) {
      return;
    }

    if (!edit) {
      onAddProject(this.state.value, () => this.setState({ value: this.initStateValue() }));
    } else {
      onEditProject(this.state.value);
    }

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
    const { value, error } = this.state;
    return [
      <ModalHeader key="pj_h" iconUrl="/images/icons/project.png" label="Add Project" />,
      <div key="pj_b" className="modal-body">
        <form className="text-right">
          <FormGroupRow
            type="text"
            label="Name"
            name="Name"
            error={error.Name}
            onChange={e => this.handleChange(e)}
            value={value.Name}
          />
          <FormGroupArray
            type="text"
            label="Technologies"
            error={error.Technologies}
            arrayValues={value.Technologies}
            onChange={(e, i) => this.handleChange(e, i)}
            name="Technologies"
            onAdd={name => this.handleAddArray(name)}
            onRemove={(name, i) => this.handleRemoveArray(name, i)}
          />
          <FormGroupChromeColor
            label="Color"
            onChange={e => this.handleChange(e)}
            name="Color"
            error={error.Color}
            color={value.Color}
          />
          <FormGroupRow
            type="date"
            label="Start Time"
            name="StartTime"
            onChange={e => this.handleChange(e)}
            value={value.StartTime}
          />
          <FormGroupRow
            type="date"
            label="End Time"
            name="EndTime"
            onChange={e => this.handleChange(e)}
            value={value.EndTime}
          />
        </form>
      </div>,
      <ModalFooter key="pj_f" onClickSubmit={() => this.handleSubmit()} />
    ];
  }
}

export default ProjectForm;
