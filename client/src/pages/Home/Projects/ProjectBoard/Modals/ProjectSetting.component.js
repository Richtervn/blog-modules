import './ProjectSetting.css';
import React, { Component } from 'react';

import { hideModal } from 'common/Modal';
import { ModalHeader, ModalFooter } from 'components/Modal';
import { FormGroupRow, FormGroupChromeColor } from 'components/FormTools';

class ProjectSetting extends Component {
  constructor(props) {
    super(props);
    this.state = { value: this.initStateValue(this.props.project) };

    this.handleArrayChange = this.handleArrayChange.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleAddTagColor = this.handleAddTagColor.bind(this);
    this.handleRemoveTagColor = this.handleRemoveTagColor.bind(this);
    this.initStateValue = this.initStateValue.bind(this);
  }

  initStateValue(project) {
    const stateValue = {};
    const { TagColor } = project;
    stateValue.TagColor = TagColor.length > 0 ? TagColor : [{ Label: '', Color: '' }];
    return stateValue;
  }

  handleArrayChange(event, index) {
    const { name, value } = event.target;
    const formValue = { ...this.state.value };
    formValue.TagColor[index][name] = value;
    this.setState({ value: { ...formValue } });
  }

  handleColorChange(color, index) {
    const formValue = { ...this.state.value };
    formValue.TagColor[index].Color = color;
    this.setState({ value: { ...formValue } });
  }

  handleSubmit() {
    const updateForm = { _id: this.props.project._id, ...this.state.value };
    this.props.onUpdateSetting(updateForm);
    hideModal();
  }

  handleAddTagColor() {
    const formValue = { ...this.state.value };
    formValue.TagColor.push({ Label: '', Color: '' });
    console.log(formValue);
    this.setState({ value: { ...formValue } });
  }

  handleRemoveTagColor(index) {
    const formValue = { ...this.state.value };
    formValue.TagColor.splice(index, 1);
    this.setState({ value: { ...formValue } });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.project._id !== this.props.project._id) {
      this.setState({ value: this.initStateValue(nextProps.propject) });
    }
  }

  render() {
    return [
      <ModalHeader key="ps_h" label="Project Setting" />,
      <div key="ps_b" className="modal-body project-setting">
        <h4>Tags Color :</h4>
        {this.state.value.TagColor.map((tagColor, i) => [
          <FormGroupRow
            key={`lb_${i}`}
            type="text"
            label="Label"
            onChange={event => this.handleArrayChange(event, i)}
            name="Label"
            value={this.state.value.TagColor[i].Label}
          />,
          <FormGroupChromeColor
            key={`cl_${i}`}
            label="Color"
            onChange={event => this.handleArrayChange(event, i)}
            color={this.state.value.TagColor[i].Color}
            name="Color"
          />,
          <button className="btn btn-danger" key={`rm_${i}`} onClick={() => this.handleRemoveTagColor(i)}>
            <i className="fa fa-times" />&nbsp;Remove Tag Color
          </button>
        ])}
        <button className="btn btn-primary btn-block" onClick={() => this.handleAddTagColor()}>
          <i className="fa fa-plus" />&nbsp;Add Tag Color
        </button>
      </div>,
      <ModalFooter key="ps_f" onClickSubmit={() => this.handleSubmit()} />
    ];
  }
}

export default ProjectSetting;
