import './MapSelector.css';
import React, { Component } from 'react';

class MapSelector extends Component {
  componentWillMount() {
    const { data, onGetData } = this.props;
    if (!data) {
      onGetData();
    }
  }

  render() {
    const { data, onSelect, mapId, onChooseCoordinate, onSetCoordinate, simple } = this.props;

    if (!data) {
      return null;
    }

    return (
      <div className="ds9799-map-selector">
        <select className="form-control" onChange={onSelect}>
          {data.map((map, i) => (
            <option key={i} value={map._id}>
              {map.Name}
            </option>
          ))}
        </select>
        {!simple && (
          <img
            src={`/images/muonline/map/${mapId}.jpg`}
            style={{ width: '500px' }}
            onMouseMove={onChooseCoordinate}
            onClick={onSetCoordinate}
            alt="Mu Map"
          />
        )}
      </div>
    );
  }
}

export default MapSelector;
