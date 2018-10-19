import _ from 'underscore';
import React, { Component } from 'react';

import { hideModal } from 'common/Modal';
import { ModalHeader, ModalFooter } from 'components/Modal';
import { FormGroupRow, FormGroupArea, FormGroupArray, FormGroupArraySelect } from 'components/FormTools';
import { commonFormChange, commonValidate } from 'helpers';

const initValue = {
  Label: '',
  Description: '',
  SubTasks: [{ Label: '', IsDone: false }],
  Tags: ['']
};

class ProjectItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.edit ? this.initStateValue(this.props.item) : this.initStateValue(initValue),
      error: {}
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
    const { project, column, edit, onEditItem, onAddItem } = this.props;
    const formValue = { ...this.state.value };
    const error = commonValidate(this.state.value, ['Label', 'Description'], ['Tags']);
    this.setState({ error });
    if (!_.isEmpty(error)) {
      return;
    }

    formValue.SubTasks = formValue.SubTasks.map(task => {
      return {
        Label: task,
        IsDone: false
      };
    });
    formValue._id = project._id;
    formValue.columnKey = column.key;
    if (edit) {
      onEditItem(formValue);
    } else {
      onAddItem(formValue);
    }

    hideModal();
  }

  handleAddArray(name) {
    const formValue = { ...this.state.value };
    formValue[name].push('');
    this.setState({ value: { ...formValue } });
  }

  handleRemoveArray(name, index) {
    const formValue = { ...this.state.value };
    formValue[name].splice(index, 1);
    this.setState({ value: { ...formValue } });
  }

  render() {
    const { error, value } = this.state;
    return [
      <ModalHeader key="pi_h" label="Add Item" />,
      <div key="pi_b" className="modal-body">
        <form className="text-right">
          <FormGroupRow
            type="text"
            label="Label"
            name="Label"
            onChange={e => this.handleChange(e)}
            value={value.Label}
            error={error.Label}
          />
          <FormGroupArea
            label="Description"
            name="Description"
            onChange={e => this.handleChange(e)}
            value={value.Description}
            error={error.Description}
          />
          <FormGroupArray
            arrayValues={value.SubTasks}
            label="Sub Tasks"
            name="SubTasks"
            onChange={(e, i) => this.handleChange(e, i)}
            onAdd={name => this.handleAddArray(name)}
            onRemove={(name, index) => this.handleRemoveArray(name, index)}
          />
          <FormGroupArraySelect
            placeholder="Select Item Tag"
            label="Tags"
            error={error.Tags}
            arrayValues={value.Tags}
            options={this.props.project.TagColor.map(tag => tag.Label)}
            name="Tags"
            onChange={(e, i) => this.handleChange(e, i)}
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
