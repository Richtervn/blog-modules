import React, { Component } from 'react';
import MapFileSelector from './MapFileSelector';

class MonsterSetBase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapId: 0
    };
    this.selectMap = this.selectMap.bind(this);
  }

  selectMap(id) {
    this.setState({ mapId: id });
  }

  render() {
    const { data, onGetData } = this.props;
    const { mapId } = this.state;
    return (
      <div className="row no-row-margin">
        <div className="col-5 no-col-margin">
          <div className="ds9799-dashboard-container">
            <MapFileSelector
              data={data}
              onGetData={onGetData}
              mapId={mapId}
              onSelect={e => this.selectMap(e.target.value)}
            />
          </div>
        </div>
        <div className="col-7 no-col-margin" />
      </div>
    );
  }
}

export default MonsterSetBase;
