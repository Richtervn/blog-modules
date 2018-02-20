import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { PageLoader, ContainerLoader } from 'common/Loaders';
import { FeatureBox, FeatureCard, FeatureView, FeatureDetail } from '../components';

import { openModal } from 'common/Modal';

class Mods extends Component {
  constructor(props) {
    super(props);
    this.state = { isDetailLoading: false, didLoad: false };
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
    const { mods, modDetail, onGetModDetail, onSearchMod, onSortMod, history } = this.props;
    if (!mods) {
      return (
        <div className="sc-loader">
          <PageLoader />
        </div>
      );
    }

    return (
      <div className="row">
        <FeatureView col={4}>
          <FeatureBox onAddClick={() => openModal('AddStarcraftMod')} onSearch={onSearchMod} onSort={onSortMod} />
          <div className="sc-card-list">
            {mods.map(mod => (
              <FeatureCard
                key={mod._id}
                rating={mod.Rating}
                label={mod.Name}
                uri={mod.Uri ? mod.Uri.replace('./public', window.appConfig.API_HOST) : null}
                matchUp={mod.Matchup}
                version={mod.Version}
                isActive={modDetail._id === mod._id}
                onClick={() => {
                  if (this.props.modDetail._id !== mod._id) {
                    this.setState({ isDetailLoading: true });
                    onGetModDetail(mod._id);
                  }
                }}
              />
            ))}
          </div>
        </FeatureView>
        <FeatureView col={8}>
          {this.state.isDetailLoading && <ContainerLoader />}
          {!this.state.isDetailLoading &&
            !modDetail._id && (
              <div className="flex-center sc-zero-notice">
                <div className="notice">No mod selected</div>
              </div>
            )}
          {!this.state.isDetailLoading &&
            modDetail._id && (
              <FeatureDetail
                title={modDetail.Name}
                rating={modDetail.Rating}
                matchup={modDetail.Matchup}
                description={modDetail.Description}
                version={modDetail.Version}
                htmlBind={modDetail.HTML || '<div><i>No content</i></div>'}
                cssBind={modDetail.CSS}
                onEditBindClick={() => history.push(`/content_mirror/StarcraftMods/${modDetail._id}`)}
                onEditClick={() => openModal('EditStarcraftMod')}
                onDeleteClick={() => openModal('DeleteStarcraftMod')}
              />
            )}
        </FeatureView>
      </div>
    );
  }
}

export default withRouter(Mods);
