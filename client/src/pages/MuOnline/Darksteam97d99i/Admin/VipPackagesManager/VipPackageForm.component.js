import './VipPackageForm.css';
import React, { Component } from 'react';

class VipPackageForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: this.getStateValue()
    };
  }

  getStateValue() {
    const { pack } = this.props;
    if (pack) {
      return { ...pack };
    } else {
      return { duration: '', name: '', type: '', price: '' };
    }
  }

  handleChange(e) {
    const { value, name } = e.target;
    const nextState = { ...this.state };
    nextState.value[name] = value;
    this.setState(nextState);
  }

  render() {
    const { value } = this.state;
    const { onSubmit, onCancel } = this.props;
    return (
      <div className="vip-package-form">
        <input
          className="form-control"
          type="text"
          name="name"
          value={value.name}
          onChange={this.handleChange}
          placeholder="Package's name"
        />
        <select className="form-control" name="type" value={value.type} onChange={this.handleChange}>
          <option value="" hidden>
            Package's type
          </option>
          <option value="Account">Account</option>
          <option value="Character">Character</option>
        </select>
        <input
          className="form-control"
          type="number"
          name="price"
          value={value.price}
          onChange={this.handleChange}
          placeholder="Price in credits"
        />
        <input
          className="form-control"
          type="number"
          name="duration"
          value={value.duration}
          onChange={this.handleChange}
          placeholder="Duration in days"
        />
        <div className="feature-btns">
          <button className="btn btn-primary" onClick={() => onSubmit(this.state.value)}>
            Submit
          </button>
          <button className="btn btn-danger" onClick={() => onCancel()}>
            Cancel
          </button>
        </div>
      </div>
    );
  }
}

export default VipPackageForm;
