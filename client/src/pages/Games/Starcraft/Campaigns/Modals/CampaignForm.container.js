import { connect } from 'react-redux';
import CampaignForm from './CampaignForm.component';

import { editCampaign, addCampaign } from '../../Starcraft.module';

export default connect(
  ({ starcraft }) => ({
    campaign: starcraft.campaignDetail
  }),
  dispatch => ({
    onEditCampaign(formBody) {
      dispatch(editCampaign(formBody));
    },
    onAddCampaign(formBody) {
      dispatch(addCampaign(formBody));
    }
  })
)(CampaignForm);
