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
      <div className="text-center">
        <select className="ds9799-form-selector" onChange={onSelect}>
          {data.map((mon, i) => (
            <option key={i} value={mon._id}>
              {mon.Name}
            </option>
          ))}
        </select>
        <img src={`/images/muonline/monster/${monId}.gif`} />
      </div>
    );
  }
}

export default MonsterFileSelector;
