import './FormGroupArray.css';
import React, { Component } from 'react';
import classnames from 'classnames';

export default class FormGroupArray extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changed: false
    };
  }

  handleChange(e, i) {
    if (!this.state.changed) {
      this.setState({ changed: true });
    }
    this.props.onChange(e, i);
  }

  render() {
    const { label, type, name, placeholder, arrayValues, onRemove, onAdd, error } = this.props;
    const { changed } = this.state;
    return (
      <div className="form-group row">
        <label className="col-sm-3 col-form-label col-form-label-sm">
          <strong>{label}:</strong>
        </label>
        <div className="col-sm-9">
          {arrayValues.map((arrayValue, index) => (
            <div key={index} className="form-array-wrapper">
              <input
                type={type}
                className={classnames('form-control form-control-sm', {
                  'is-valid': changed && !error,
                  'is-invalid': error
                })}
                placeholder={placeholder}
                value={arrayValue}
                onChange={event => this.handleChange(event, index)}
                name={name}
              />
              <button className="btn btn-danger channel-button" type="button" onClick={() => onRemove(name, index)}>
                <i className="fa fa-times" />
              </button>
            </div>
          ))}
          <button className="btn btn-primary form-array-btn" type="button" onClick={() => onAdd(name)}>
            <span>
              <i className="fa fa-plus" />
            </span>&nbsp; {`Add ${name}`}
          </button>
        </div>
      </div>
    );
  }
}
