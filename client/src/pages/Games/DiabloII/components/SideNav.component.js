import './SideNav.css';
import React, { Component } from 'react';

class SideNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTools: 'Search',
      search: '',
      sortKey: '',
      sortOption: ''
    };
    this.handleSort = this.handleSort.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSort(option) {
    const nextState = { ...this.state };
    if (this.state.sortKey !== option) {
      nextState.sortKey = option;
      nextState.sortOption = 'ASC';
    } else {
      if (this.state.sortOption === '') {
        nextState.sortOption = 'ASC';
      }
      if (this.state.sortOption === 'ASC') {
        nextState.sortOption = 'DESC';
      }
      if (this.state.sortOption === 'DESC') {
        nextState.sortOption = '';
      }
    }
    this.props.onSort(nextState.sortKey, nextState.sortOption);
    this.setState(nextState);
  }

  handleSearch(event) {
    this.props.onSearch(event.target.value);
    this.setState({ search: event.target.value });
  }

  render() {
    const { activeTools, search, sortKey, sortOption } = this.state;
    const { children, onClickAdd, sortOptions } = this.props;
    return (
      <div className="d2-side-nav">
        <div className="tools-bar">
          <div className="feature-btns">
            <button className="btn" onClick={() => onClickAdd()}>
              <i className="fa fa-plus-circle" />
            </button>
            <button
              className={`btn ${activeTools === 'Search' ? 'active' : ''}`}
              onClick={() => this.setState({ activeTools: 'Search' })}>
              <i className="fa fa-search" />
            </button>
            <button
              className={`btn ${activeTools === 'Sort' ? 'active' : ''}`}
              onClick={() => this.setState({ activeTools: 'Sort' })}>
              <i className="fa fa-sort" />
            </button>
          </div>
          <div className="tool-input">
            {activeTools === 'Search' && (
              <input className="search-input" type="text" value={search} onChange={this.handleSearch} />
            )}
            {activeTools === 'Sort' && (
              <div className="sort-input">
                {sortOptions.map((option, i) => (
                  <button
                    className={`btn ${sortOption && sortKey === option && 'active'}`}
                    key={i}
                    onClick={() => this.handleSort(option)}>
                    {option}
                    {sortOption &&
                      sortKey === option && (
                        <span>
                          &nbsp;<i className={`fa fa-sort-${sortOption.toLowerCase()}`} />
                        </span>
                      )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="list">{children}</div>
      </div>
    );
  }
}

export default SideNav;
