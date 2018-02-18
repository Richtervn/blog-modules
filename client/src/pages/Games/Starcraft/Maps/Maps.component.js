import './Maps.css';
import _ from 'underscore';
import React, { Component } from 'react';
import MapDetail from './MapDetail.component';
import { FeatureBox, FeatureCard } from '../components';

import { openModal } from 'common/Modal';

class Maps extends Component {
  componentWillMount() {
    const { maps, onGetMaps } = this.props;
    if (!maps) {
      onGetMaps();
    }
  }

  render() {
    const { maps, onSetFocusMap, focusMap } = this.props;
    if (!maps) {
      return null;
    }
    return (
      <div className="row">
        <div className="col-4">
          <div className="row">
            <div className="sc-border">
              <div className="sc-border-inner">
                <div className="sc-tab-view">
                  <FeatureBox onAddClick={() => openModal('AddStarcraftMap')} />
                  <div className="sc-card-list">
                    {maps.map((scmap, i) => (
                      <FeatureCard
                        key={i}
                        rating={scmap.Rating}
                        label={scmap.Name}
                        uri={scmap.Uri.replace('./public', window.appConfig.API_HOST)}
                        matchUp={scmap.Matchup}
                        onClick={() => onSetFocusMap(scmap._id)}
                        isActive={scmap._id === focusMap}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-8">
          <div className="row">
            <div className="sc-border">
              <div className="sc-border-inner">
                <div className="sc-tab-view">
                  <MapDetail map={_.findWhere(maps, { _id: focusMap })} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Maps;
