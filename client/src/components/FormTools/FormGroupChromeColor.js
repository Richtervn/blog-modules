import './FormGroupChromeColor.css';
import React, { Component } from 'react';
import classnames from 'classnames';

import { ChromePicker } from 'react-color';

class FormGroupChromeColor extends Component {
  constructor(props) {
    super(props);
    this.state = { color: this.props.color || '', changed: false };
    this.handleChangeComplete = this.handleChangeComplete.bind(this);
  }

  handleChangeComplete(color) {
    let colorString = '';
    if (color.rgb.a !== 1) {
      colorString = `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`;
    } else {
      colorString = color.hex;
    }
    this.setState({ color: colorString, changed: true });
    this.props.onChange({ target: { value: colorString, name: this.props.name } });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.color) {
      this.setState({ color: nextProps.color });
    }
  }

  render() {
    const { label, error } = this.props;
    const { changed } = this.state;

    return (
      <div className="form-group row">
        <label className="col-sm-3 col-form-label col-form-label-sm">
          <strong>{label}:</strong>
        </label>
        <div className="col-sm-9">
          <ChromePicker
            className={classnames({
              'is-valid': changed && !error,
              'is-invalid': error
            })}
            onChangeComplete={color => this.handleChangeComplete(color)}
            color={this.state.color}
          />
        </div>
      </div>
    );
  }
}

export default FormGroupChromeColor;
