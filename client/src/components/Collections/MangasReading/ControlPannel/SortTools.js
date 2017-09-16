import React, { Component } from 'react';

const availableOptions = ['Name', 'Rating'];
const availableTypes = ['ASC', 'DESC'];
const initialState = {
  option: '',
  type: 'ASC'
};

export default class SortTools extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.state[name] = value;
    this.setState(this.state);
    if(this.state.option){
      this.props.onSortSelect(this.state);
    }
  }

  render() {
    return (
      <div className="row no-row-margin">
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
        {availableTypes.map((type, i) => (
          <div key={i} className="form-check form-check-inline mr-search-radio">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="radio"
                value={type}
                onChange={this.handleChange}
                checked={this.state.type == type}
                name="type"
              />
              &nbsp;{type}
            </label>
          </div>
        ))}
      </div>
    );
  }
}
