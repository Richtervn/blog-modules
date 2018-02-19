import './Maps.css';
import _ from 'underscore';
import React, { Component } from 'react';
import { PageLoader } from 'common/Loaders';
import { FeatureBox, FeatureCard, FeatureView, FeatureDetail } from '../components';

import { openModal } from 'common/Modal';

class Maps extends Component {
  componentWillMount() {
    const { maps, onGetMaps } = this.props;
    if (!maps) {
      onGetMaps();
    }
  }

  render() {
    const { maps, onSetFocusMap, focusMap, onSearchMap, onSortMap } = this.props;

    if (!maps) {
      return (
        <div className="sc-loader">
          <PageLoader />
        </div>
      );
    }

    const map = _.findWhere(maps, { _id: focusMap });

    return (
      <div className="row">
        <FeatureView col={4}>
          <FeatureBox onAddClick={() => openModal('AddStarcraftMap')} onSearch={onSearchMap} onSort={onSortMap} />
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
        </FeatureView>
        <FeatureView col={8}>
          {!map && (
            <div className="flex-center sc-zero-notice">
              <div className="notice">No map selected</div>
            </div>
          )}
          {map && (
            <FeatureDetail
              title={map.Name}
              onEditClick={() => openModal('EditStarcraftMap')}
              onDeleteClick={() => openModal('DeleteStarcraftMap')}
              description={map.Description}
              tipntrick={map.Tipntrick}
              rating={map.Rating}
              matchup={map.Matchup}
            />
          )}
        </FeatureView>
      </div>
    );
  }
}

export default Maps;
