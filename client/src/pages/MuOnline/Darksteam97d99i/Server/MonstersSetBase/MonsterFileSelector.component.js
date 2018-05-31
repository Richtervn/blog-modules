import './MonsterFileSelector.css';
import React, { Component } from 'react';

class MonsterFileSelector extends Component {
  componentWillMount() {
    const { data, onGetData } = this.props;
    if (!data) {
      onGetData();
    }
  }

  render() {
    const { data, monId, onSelect } = this.props;
    if (!data) {
      return null;
    }
    return (
      <div className="ds9799-monster-file-selector">
        <select className="form-control" onChange={onSelect}>
          {data.map((mon, i) => (
            <option key={i} value={mon._id}>
              {mon.Name}
            </option>
          ))}
        </select>
        <img src={`/images/muonline/monster/${monId}.gif`} alt="Monster"/>
      </div>
    );
  }
}

export default MonsterFileSelector;
