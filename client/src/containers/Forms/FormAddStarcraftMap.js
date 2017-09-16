import AddStarcraftMap from 'components/Forms/AddStarcraftMap';
import { connect } from 'react-redux';

import {
  changeAddStarcraftMapForm,
  addArrayStarcraftMapForm,
  removeArrayStarcraftMapForm,
  changeFormRating
} from 'modules/forms';

export default connect(
  ({ forms }) => ({ formState: forms.AddStarcraftMap }),
  dispatch => ({
    onChange(event, index) {
      dispatch(changeAddStarcraftMapForm(event, index));
    },
    onAdd(name) {
      dispatch(addArrayStarcraftMapForm(name));
    },
    onRemove(name, index) {
      dispatch(removeArrayStarcraftMapForm(name, index));
    },
    onRating(formName, value) {
      dispatch(changeFormRating(formName, value));
    }
  })
)(AddStarcraftMap);
