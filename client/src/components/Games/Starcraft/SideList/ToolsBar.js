import React, { Component } from 'react';

export default class ToolsBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      option: '',
      view: 'Search',
      text: '',
      type: 'ASC'
    };
    this.handleChange = this.handleChange.bind(this);
    this.showSearch = this.showSearch.bind(this);
    this.showSort = this.showSort.bind(this);
  }

  handleChange(event) {
    const nextState = { ...this.state };
    const { name, value } = event.target;
    switch (name) {
      case 'option':
        nextState.option = value;
        break;
      case 'type':
        nextState.type = value;
        break;
      case 'search':
        nextState.text = value;
        break;
    }
    this.setState(nextState);
    switch (name) {
      case 'option':
        if (nextState.type) {
          this.props.onSort({ [nextState.option]: nextState.type });
        }
        break;
      case 'type':
        if (this.state.option) {
          this.props.onSort({ [nextState.option]: nextState.type });
        }
        break;
      case 'search':
        this.props.onSearch(value);
        break;
    }
  }

  showSearch(e) {
    e.preventDefault();
    this.setState({ view: 'Search' });
  }

  showSort(e) {
    e.preventDefault();
    this.setState({ view: 'Sort' });
  }

  render() {
    const { control } = this.props;
    const availableTypes = ['ASC', 'DESC'];
    const availableOptions = ['Name', 'Rating'];
    let targetModal;

    switch (control) {
      case 'Map':
        targetModal = '#addStarcraftMapModal';
        break;
      case 'Mod':
        targetModal = '#addStarcraftModModal';
        break;
      case 'Campaign':
        targetModal = '#addStarcraftCampaignModal';
        break;
      default:
        break;
    }

    return (
      <div className="row no-row-margin">
        <div className="sc-side-feature-btn" data-toggle="modal" data-target={targetModal}>
          <i className="fa fa-plus-circle sc-side-tools-bar" />
        </div>
        <div
          className={this.state.view == 'Search' ? 'sc-side-feature-active' : 'sc-side-feature-btn'}
          onClick={this.showSearch}>
          <i className="fa fa-search sc-side-tools-bar" />
        </div>
        <div
          className={this.state.view == 'Sort' ? 'sc-side-feature-active' : 'sc-side-feature-btn'}
          onClick={this.showSort}>
          <i className="fa fa-sort sc-side-tools-bar" />
        </div>
        {this.state.view == 'Sort' && (
          <div>
            {availableOptions.map((option, i) => (
              <div key={i} className="form-check form-check-inline sc-side-feature-radio">
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
              <div key={i} className="form-check form-check-inline sc-side-feature-radio">
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
        )}
        {this.state.view == 'Search' && (
          <input
            className="sc-side-feature-input"
            type="text"
            name="search"
            value={this.state.text}
            onChange={this.handleChange}
          />
        )}
      </div>
    );
  }
}
