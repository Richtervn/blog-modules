import { connect } from 'react-redux';
import Campaigns from './Campaigns.component';

import { getCampaigns, getCampaignDetail, searchCampaign, sortCampaign } from '../Starcraft.module';

export default connect(
  ({ starcraft }) => ({
    campaigns: starcraft.campaigns,
    campaignDetail: starcraft.campaignDetail
  }),
  dispatch => ({
    onGetCampaigns() {
      dispatch(getCampaigns());
    },
    onGetCampaignDetail(id) {
      dispatch(getCampaignDetail(id));
    },
    onSearchCampaign(text) {
      dispatch(searchCampaign(text));
    },
    onSortCampaign(query) {
      dispatch(sortCampaign(query));
    }
  })
)(Campaigns);
