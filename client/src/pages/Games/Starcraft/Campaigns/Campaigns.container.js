import { connect } from 'react-redux';
import Campaigns from './Campaigns.component';

import { getCampaigns, getCampaignDetail } from '../Starcraft.module';

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
    }
  })
)(Campaigns);

// import { getMaps, setFocusMap, searchMap, sortMap } from '../Starcraft.module';

// export default connect(
//   ({ starcraft }) => ({
//     maps: starcraft.maps,
//     focusMap: starcraft.focusMap
//   }),
//   dispatch => ({
//     onGetMaps() {
//       dispatch(getMaps());
//     },
//     onSetFocusMap(id) {
//       dispatch(setFocusMap(id));
//     },
//     onSearchMap(text) {
//       dispatch(searchMap(text));
//     },
//     onSortMap(query) {
//       dispatch(sortMap(query));
//     }
//   })
// )(Maps);
