import React, { Component } from 'react';

const availableOptions = ['Name', 'Author', 'Genre'];
const initialState = {
  option: 'Name',
  value: ''
};

export default class SearchTools extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.state[name] = value;
    if (name == 'option') {
      this.state.value = '';
    }
    this.setState(this.state);
    if (name == 'value') {
      this.props.onSearchInput({ [this.state.option]: this.state.value });
    }
  }

  render() {
    return (
      <div className="row no-row-margin">
        <input
          type="text"
          className="form-control box-margin"
          onChange={this.handleChange}
          name="value"
          value={this.state.value}
        />
        {availableOptions.map((option, i) => (
          <div key={i} className="form-check form-check-inline mr-search-radio">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="radio"
                value={option}
                onChange={this.handleChange}
                checked={this.state.option == option}
                name="option"
              />
              &nbsp;{option}
            </label>
          </div>
        ))}
      </div>
    );
  }
}
