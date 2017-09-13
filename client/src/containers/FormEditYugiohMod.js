import EditYugiohMod from 'components/Forms/EditYugiohMod';
import { connect } from 'react-redux';

import {
  changeEditYugiohModForm,
  changeFormRating,
  addArrayYugiohEditModForm,
  removeArrayYugiohEditModForm
} from 'modules/forms';

export default connect(
  ({ forms }) => ({ formState: forms.EditYugiohMod }),
  dispatch => ({
    onChange(event, index) {
      dispatch(changeEditYugiohModForm(event, index));
    },
    onRating(formName, value) {
      dispatch(changeFormRating(formName, value));
    },
    onAdd(name) {
      dispatch(addArrayYugiohEditModForm(name));
    },
    onRemove(name, index) {
      dispatch(removeArrayYugiohEditModForm(name, index));
    }
  })
)(EditYugiohMod);
