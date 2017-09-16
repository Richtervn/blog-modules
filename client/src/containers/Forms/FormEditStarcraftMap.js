import EditStarcraftMap from 'components/Forms/EditStarcraftMap';
import { connect } from 'react-redux';

import {
  changeEditStarcraftMapForm,
  addArrayStarcraftEditMapForm,
  removeArrayStarcraftEditMapForm,
  changeFormRating
} from 'modules/forms';

export default connect(
  ({ forms }) => ({ formState: forms.EditStarcraftMap }),
  dispatch => ({
    onChange(event, index) {
      dispatch(changeEditStarcraftMapForm(event, index));
    },
    onAdd(name) {
      dispatch(addArrayStarcraftEditMapForm(name));
    },
    onRemove(name, index) {
      dispatch(removeArrayStarcraftEditMapForm(name, index));
    },
    onRating(formName, value) {
      dispatch(changeFormRating(formName, value));
    }
  })
)(EditStarcraftMap);
