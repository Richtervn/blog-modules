import React, { Component } from 'react';
import { PageLoader, ContainerLoader } from 'common/Loaders';
import { FeatureBox, FeatureCard, FeatureView, FeatureDetail } from '../components';

import { openModal } from 'common/Modal';

class Campaigns extends Component {
  constructor(props) {
    super(props);
    this.state = { isDetailLoading: false, didLoad: false };
  }

  componentWillMount() {
    const { campaigns, onGetCampaigns } = this.props;
    if (!campaigns) {
      onGetCampaigns();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.campaignDetail._id !== this.props.campaignDetail._id) {
      this.setState({ isDetailLoading: false });
    }
    if (!this.state.didLoaded && !this.props.campaigns && nextProps.campaigns.length > 0) {
      this.props.onGetCampaignDetail(nextProps.campaigns[0]._id);
      this.setState({ didLoaded: true, isDetailLoading: true });
    }
  }

  render() {
    const { campaigns, campaignDetail, onGetCampaignDetail, onSearchCampaign, onSortCampaign } = this.props;
    if (!campaigns) {
      return (
        <div className="sc-loader">
          <PageLoader />
        </div>
      );
    }

    return (
      <div className="row">
        <FeatureView col={4}>
          <FeatureBox
            onAddClick={() => openModal('AddStarcraftCampaign')}
            onSearch={onSearchCampaign}
            onSort={onSortCampaign}
          />
          <div className="sc-card-list">
            {campaigns.map(campaign => (
              <FeatureCard
                key={campaign._id}
                rating={campaign.Rating}
                label={campaign.Name}
                uri={campaign.Uri.replace('./public', window.appConfig.API_HOST)}
                matchUp={campaign.Matchup}
                version={campaign.Version}
                isActive={campaignDetail._id === campaign._id}
                onClick={() => {
                  if (this.props.campaignDetail._id !== campaign._id) {
                    this.setState({ isDetailLoading: true });
                    onGetCampaignDetail(campaign._id);
                  }
                }}
              />
            ))}
          </div>
        </FeatureView>
        <FeatureView col={8}>
          {this.state.isDetailLoading && <ContainerLoader />}
          {!this.state.isDetailLoading &&
            !campaignDetail._id && (
              <div className="flex-center sc-zero-notice">
                <div className="notice">No campaign selected</div>
              </div>
            )}
          {!this.state.isDetailLoading &&
            campaignDetail._id && (
              <FeatureDetail
                title={campaignDetail.Name}
                rating={campaignDetail.Rating}
                matchup={campaignDetail.Matchup}
                description={campaignDetail.Description}
                version={campaignDetail.Version}
                htmlBind={campaignDetail.HTML}
                cssBind={campaignDetail.CSS}
              />
            )}
        </FeatureView>
      </div>
    );
  }
}

export default Campaigns;
