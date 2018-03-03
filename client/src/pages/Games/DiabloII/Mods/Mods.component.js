import './Mods.css';

import React, { Component } from 'react';
import { sortList } from 'helpers';
import { PageLoader, ContainerLoader } from 'common/Loaders';

import { SideNav, FeatureCard } from '../components';
import ModDetail from './ModDetail.container';

import { openModal } from 'common/Modal';

class Mods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDetailLoading: false,
      didLoaded: false
    };
  }

  componentWillMount() {
    const { mods, onGetMods } = this.props;
    if (!mods) {
      onGetMods();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.modDetail._id !== this.props.modDetail._id) {
      this.setState({ isDetailLoading: false });
    }
    if (!this.state.didLoaded && !this.props.mods && nextProps.mods.length > 0) {
      this.props.onGetModDetail(nextProps.mods[0]._id);
      this.setState({ didLoaded: true, isDetailLoading: true });
    }
  }

  render() {
    const { mods, modDetail, onGetModDetail, onSort, sortKey, sortOption, onSearch } = this.props;
    if (!mods) {
      return (
        <div className="row">
          <PageLoader opacity={2} />
        </div>
      );
    }

    let sortedMods = sortList(mods, sortKey, sortOption);

    return (
      <div className="row">
        <div className="col-3">
          <div className="row">
            <SideNav
              sortOptions={['Name', 'Rating', 'Version']}
              onSort={onSort}
              onSearch={text => onSearch({ Name: text })}
              onClickAdd={() => openModal('AddDiabloIIMod')}>
              {sortedMods.map(mod => (
                <FeatureCard
                  isActive={modDetail._id === mod._id}
                  key={mod._id}
                  name={mod.Name}
                  iconUrl={mod.IconUrl}
                  rating={mod.Rating}
                  archiveUrl={mod.ArchiveUrl}
                  iconBadge={mod.Version}
                  onIconBadgeClick={() => onSearch({ Version: mod.Version })}
                  version={'v' + mod.ModVersion}
                  onClick={() => {
                    this.setState({ isDetailLoading: true });
                    onGetModDetail(mod._id);
                  }}
                />
              ))}
            </SideNav>
          </div>
        </div>
        <div className="col-9">
          {this.state.isDetailLoading && <ContainerLoader />}
          {!this.state.isDetailLoading &&
            !modDetail._id && (
              <div className="flex-center d2-zero-notice">
                <div className="notice">No mod selected</div>
              </div>
            )}
          {!this.state.isDetailLoading && modDetail._id && <ModDetail />}
        </div>
      </div>
    );
  }
}

export default Mods;
