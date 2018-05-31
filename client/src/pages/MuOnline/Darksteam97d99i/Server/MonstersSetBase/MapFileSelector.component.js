import React, { Component } from 'react';

class MapFileSelector extends Component {
  componentWillMount() {
    const { data, onGetData } = this.props;
    if (!data) {
      onGetData();
    }
  }

  render() {
    const { data, onSelect, mapId, onChooseCoordinate, onSetCoordinate } = this.props;
    console.log('RENDER');
    console.log(data);
    if (!data) {
      return null;
    }
    console.log(data);
    return (
      <div className="text-center">
        <select className="ds9799-form-selector" onChange={onSelect}>
          {data.map((map, i) => (
            <option key={i} value={map._id}>
              {map.Name}
            </option>
          ))}
        </select>
        <img
          src={`/images/muonline/map/${mapId}.jpg`}
          style={{ width: '500px' }}
          onMouseMove={onChooseCoordinate}
          onClick={onSetCoordinate}
        />
      </div>
    );
  }
}

export default MapFileSelector;
