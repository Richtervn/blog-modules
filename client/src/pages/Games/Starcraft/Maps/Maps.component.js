import './Maps.css';
import React, { Component } from 'react';
import { FeatureBox } from '../components';

class Maps extends Component {
  componentWillMount() {
    const { maps, onGetMaps } = this.props;
    if (!maps) {
      onGetMaps();
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-4">
          <div className="row">
            <div className="sc-border">
              <div className="sc-border-inner">
                <div className="sc-tab-view">
                  <FeatureBox />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-8">
          <div className="row">
            <div className="sc-border">
              <div className="sc-border-inner">
                <div className="sc-tab-view">.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Maps;
