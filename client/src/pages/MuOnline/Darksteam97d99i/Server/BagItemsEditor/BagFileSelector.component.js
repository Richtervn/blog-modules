import './BagFileSelector.css';
import React, { Component } from 'react';

class BagFileSelector extends Component {
  componentWillMount() {
    const { data, onGetData } = this.props;
    if (!data) {
      onGetData();
    }
  }
  render() {
    const { data, onSelect } = this.props;
    if (!data) {
      return null;
    }
    return (
      <select id="ds9799-bag-file-selector" className="form-control" onChange={onSelect}>
        {data.map((bag, i) => <option key={i} value={bag.Name}>{`${bag.File} - ${bag.Name}`}</option>)}
      </select>
    );
  }
}

export default BagFileSelector;
