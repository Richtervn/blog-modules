import './ToolsBar.css';
import React, { Component } from 'react';
import { SearchInput } from 'components/Inputs';

class ToolsBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      stringLength: 8,
      generated: 'Generated string'
    };
  }

  generateString() {
    let randomString = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+:><?';
    for (let i = 0; i < this.state.stringLength; i++) {
      randomString += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    this.setState({ generated: randomString });
  }

  render() {
    const { search, stringLength, generated } = this.state;
    return (
      <div id="account-toolsbar">
        <SearchInput
          value={search}
          onChange={e => {
            this.setState({ search: e.target.value });
            this.props.onSearch({ SiteName: e.target.value });
          }}
        />
        <input type="text" className="form-control generated-string" value={generated} readOnly disabled />
        <input
          type="number"
          className="form-control length-input"
          value={stringLength}
          onChange={e => this.setState({ stringLength: e.target.value })}
          placeholder="Length"
        />
        <button className="btn btn-primary" onClick={() => this.generateString()}>
          Generate
        </button>
      </div>
    );
  }
}

export default ToolsBar;
