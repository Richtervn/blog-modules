import React, { Component } from 'react';

class ShopSelector extends Component {
  componentWillMount() {
    const { data, onGetData } = this.props;
    if (!data) {
      onGetData();
    }
  }

  render() {
    const { onSelect, data } = this.props;
    if (!data) {
      return null;
    }
    return (
      <select className="form-control" onChange={onSelect}>
        {data.map((shop, i) => <option key={i} value={shop.Name}>{`${shop.File} - ${shop.Name}`}</option>)}
      </select>
    );
  }
}

export default ShopSelector;
