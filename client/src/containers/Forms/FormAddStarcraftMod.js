import AddStarcraftMod from 'components/Forms/AddStarcraftMod';
import { connect } from 'react-redux';

import { changeAddStarcraftModForm, changeFormRating } from 'modules/forms';

export default connect(
  ({ forms }) => ({ formState: forms.AddStarcraftMod }),
  dispatch => ({
    onChange(event) {
      dispatch(changeAddStarcraftModForm(event));
    },
    onRating(formName, value) {
      dispatch(changeFormRating(formName, value));
    }
  })
)(AddStarcraftMod);
