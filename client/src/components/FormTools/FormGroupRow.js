import React, { Component } from 'react';

class FormGroupRow extends Component {
  render() {
    const { name, label, type, placeholder, onChange, value, multiple } = this.props;
    const additionProps = {};
    if (type === 'file') {
      additionProps.onClick = e => (e.target.value = null);
      if(multiple) additionProps.multiple = true;
    }
    return (
      <div className="form-group row">
        <label htmlFor={`${name}Input`} className="col-sm-3 col-form-label col-form-label-sm">
          <strong>{label}:</strong>
        </label>
        <div className="col-sm-9">
          <input
            ref={node => (this.inputNode = node)}
            type={type}
            className="form-control form-control-sm"
            id={`${name}Input`}
            placeholder={placeholder}
            onChange={onChange}
            name={name}
            value={value}
            {...additionProps}
          />
        </div>
      </div>
    );
  }
}

export default FormGroupRow;
