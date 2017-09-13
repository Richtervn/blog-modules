import AddMusic from 'components/Forms/AddMusic';
import {connect} from 'react-redux';

import {changeAddMusicForm, changeFormRating} from 'modules/forms';

export default connect(
  ({forms}) => ({formState: forms.AddMusic}),
  dispatch => ({
    onChange(event){
      dispatch(changeAddMusicForm(event))
    },
    onRating(formName, value){
      dispatch(changeFormRating(formName, value))
    }
  })
)(AddMusic);