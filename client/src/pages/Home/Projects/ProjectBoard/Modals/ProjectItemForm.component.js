import React, { Component } from 'react';

import { hideModal } from 'common/Modal';
import { ModalHeader, ModalFooter } from 'components/Modal';
import { FormGroupRow, FormGroupArea, FormGroupArray, FormGroupArraySelect } from 'components/FormTools';
import { commonFormChange } from 'helpers';

const initValue = {
  Label: '',
  Description: '',
  SubTasks: [{ Label: '', IsDone: false }],
  Tags: ['default']
};

class ProjectItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.edit ? this.initStateValue(this.props.item) : this.initStateValue(initValue)
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAddArray = this.handleAddArray.bind(this);
    this.handleRemoveArray = this.handleRemoveArray.bind(this);
  }

  initStateValue(item) {
    return {
      Label: item.Label,
      Description: item.Description,
      SubTasks: item.SubTasks.map(task => task.Label),
      Tags: item.Tags
    };
  }

  handleChange(event, index) {
    const formValue = commonFormChange(this.state.value, event, index, ['SubTasks', 'Tags']);
    this.setState({ value: { ...formValue } });
  }

  handleSubmit() {
    const formValue = { ...this.state.value };
    formValue.SubTasks = formValue.SubTasks.map(task => {
      return {
        Label: task,
        IsDone: false
      };
    });
    formValue._id = this.props.project._id;
    formValue.columnKey = this.props.column.key;
    this.props.edit ? this.props.onEditItem(formValue) : this.props.onAddItem(formValue);
    hideModal();
  }

  handleAddArray(name) {
    const formValue = { ...this.state.value };
    if(name === 'Tags') {
      formValue[name].push('default');
    } else {
      formValue[name].push('');
    }
    this.setState({ value: { ...formValue } });
  }

  handleRemoveArray(name, index) {
    const formValue = { ...this.state.value };
    formValue[name].splice(index, 1);
    this.setState({ value: { ...formValue } });
  }

  render() {
    return [
      <ModalHeader key="pi_h" label="Add Item" />,
      <div key="pi_b" className="modal-body">
        <form className="text-right">
          <FormGroupRow
            type="text"
            label="Label"
            name="Label"
            onChange={this.handleChange}
            value={this.state.value.Label}
          />
          <FormGroupArea
            label="Description"
            onChange={this.handleChange}
            value={this.state.value.Description}
            name="Description"
          />
          <FormGroupArray
            arrayValues={this.state.value.SubTasks}
            label="Sub Tasks"
            name="SubTasks"
            onChange={this.handleChange}
            onAdd={name => this.handleAddArray(name)}
            onRemove={(name, index) => this.handleRemoveArray(name, index)}
          />
          <FormGroupArraySelect
            placeholder="Select Item Tag"
            label="Tags"
            arrayValues={this.state.value.Tags}
            options={this.props.project.TagColor.map(tag => tag.Label)}
            name="Tags"
            onChange={this.handleChange}
            onAdd={name => this.handleAddArray(name)}
            onRemove={(name, index) => this.handleRemoveArray(name, index)}
          />
        </form>
      </div>,
      <ModalFooter key="pi_f" onClickSubmit={() => this.handleSubmit()} />
    ];
  }
}

export default ProjectItemForm;
