import { connect } from 'react-redux';
import DeleteCampaignConfirm from './DeleteCampaignConfirm.component';

import { deleteCampaign } from '../../Starcraft.module';

export default connect(
  ({ starcraft }) => ({
    campaign: starcraft.campaignDetail
  }),
  dispatch => ({
    onDeleteCampaign(id) {
      dispatch(deleteCampaign(id));
    }
  })
)(DeleteCampaignConfirm);
