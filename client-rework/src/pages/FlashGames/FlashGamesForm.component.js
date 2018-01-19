import React, { Component } from 'react';
import { ModalHeader } from 'components/Modal';
import { FormGroupRow } from 'components/FormTools';

class FlashGamesForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        Name: '',
        File: '',
        Width: 0,
        Height: 0
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value, name } = event.target;
    const valueState = { ...this.state.value };
    switch (name) {
      case 'File':
        valueState.File = event.files[0];
        break;
      default:
        valueState[name] = value;
        break;
    }
    this.setState({ value: valueState });
  }

  render() {
    const { Name, Width, Height } = this.state.value;
    return [
      <ModalHeader key="fg_h" iconUrl="/images/icons/gamepad.png" label="Add Flash Game" />,
      <div key="fg_b" className="modal-body">
        <form className="text-right">
          <FormGroupRow type="file" name="File" onChange={this.handleChange} label="SWF File" />
          <FormGroupRow type="text" name="Name" onChange={this.handleChange} label="Name" value={Name} />
          <FormGroupRow type="number" name="Width" onChange={this.handleChange} label="Width" value={Width} />
          <FormGroupRow type="number" name="Height" onChange={this.handleChange} label="Height" value={Height} />
        </form>
      </div>,
      <div key="fg_f" className="modal-footer">
        <button className="btn btn-success">Submit</button>
        <button className="btn btn-danger">Close</button>
      </div>
    ];
  }
}

export default FlashGamesForm;
