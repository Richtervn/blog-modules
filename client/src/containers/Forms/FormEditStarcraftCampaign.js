import EditStarcraftCampaign from 'components/Forms/EditStarcraftCampaign';
import {connect} from 'react-redux';

import {changeEditStarcraftCampaignForm, changeFormRating} from 'modules/forms';

export default connect(
  ({forms}) => ({formState: forms.EditStarcraftCampaign}),
  dispatch => ({
    onChange(event){
      dispatch(changeEditStarcraftCampaignForm(event))
    },
    onRating(formName, value){
      dispatch(changeFormRating(formName, value))
    }
  })
)(EditStarcraftCampaign);