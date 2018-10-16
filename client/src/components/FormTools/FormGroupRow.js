import React, { Component } from 'react';
import classnames from 'classnames';

/* Must be a class to use ref */
export default class FormGroupRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changed: false
    };
  }

  handleChange(e) {
    if (!this.state.changed) {
      this.setState({ changed: true });
    }
    this.props.onChange(e);
  }

  render() {
    const { name, label, type, placeholder, value, multiple, accept, error } = this.props;
    const { changed } = this.state;
    const additionProps = {};
    if (type === 'file') {
      additionProps.onClick = e => (e.target.value = null);
      additionProps.accept = accept;
      if (multiple) additionProps.multiple = true;
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
            className={classnames('form-control form-control-sm', {
              'is-valid': changed && !error,
              'is-invalid': error
            })}
            id={`${name}Input`}
            placeholder={placeholder}
            onChange={e => this.handleChange(e)}
            name={name}
            value={value}
            {...additionProps}
          />
        </div>
      </div>
    );
  }
}
