import './ToolsBar.css';
import React, { Component } from 'react';

import { SearchInput } from 'components/Inputs';
import { openModal } from 'common/Modal';

class ToolsBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
  }

  handleSearch(e) {
    const query = { Provider: e.target.value };
    this.props.onGetProviders(query);
    this.setState({ search: e.target.value });
  }

  render() {
    const { search } = this.state;
    return (
      <div id="rss-providers-toolsbar">
        <div className="left-wrapper">
          <button className="btn btn-primary" onClick={() => openModal('AddRssProvider')}>
            <i className="fa fa-fw fa-plus-circle" />
          </button>
          <SearchInput value={search} onChange={e => this.handleSearch(e)} />
        </div>
      </div>
    );
  }
}

export default ToolsBar;
