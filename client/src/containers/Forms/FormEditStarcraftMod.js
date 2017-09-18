import EditStarcraftMod from 'components/Forms/EditStarcraftMod';
import { connect } from 'react-redux';

import { changeEditStarcraftModForm, changeFormRating } from 'modules/forms';

export default connect(
  ({ forms }) => ({ formState: forms.EditStarcraftMod }),
  dispatch => ({
    onChange(event) {
      dispatch(changeEditStarcraftModForm(event));
    },
    onRating(formName, value) {
      dispatch(changeFormRating(formName, value));
    }
  })
)(EditStarcraftMod);
