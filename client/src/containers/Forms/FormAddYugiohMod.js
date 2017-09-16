import AddYugiohMod from 'components/Forms/AddYugiohMod';
import { connect } from 'react-redux';

import {
  changeAddYugiohModForm,
  addArrayYugiohModForm,
  removeArrayYugiohModForm,
  changeFormRating
} from 'modules/forms';

export default connect(
  ({ forms }) => ({ formState: forms.AddYugiohMod }),
  dispatch => ({
    onChange(event, index) {
      dispatch(changeAddYugiohModForm(event, index));
    },
    onAdd(name) {
      dispatch(addArrayYugiohModForm(name));
    },
    onRemove(name, index) {
      dispatch(removeArrayYugiohModForm(name, index));
    },
    onRating(formName, value) {
      dispatch(changeFormRating(formName, value));
    }
  })
)(AddYugiohMod);
