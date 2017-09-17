import AddStarcraftCampaign from 'components/Forms/AddStarcraftCampaign';
import {connect} from 'react-redux';

import {changeAddStarcraftCampaignForm, changeFormRating} from 'modules/forms';

export default connect(
  ({forms}) => ({formState: forms.AddStarcraftCampaign}),
  dispatch => ({
    onChange(event){
      dispatch(changeAddStarcraftCampaignForm(event))
    },
    onRating(formName, value){
      dispatch(changeFormRating(formName, value))
    }
  })
)(AddStarcraftCampaign);