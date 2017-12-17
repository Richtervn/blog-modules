import EditD2Tool from 'components/Forms/EditD2Tool';
import { connect } from 'react-redux';

import {
  changeD2EditToolForm,
  addArrayD2EditToolForm,
  removeArrayD2EditToolForm,
  changeFormRating
} from 'modules/forms';

export default connect(
  ({ forms }) => ({ formState: forms.EditD2Tool }),
  dispatch => ({
    onChange(event, index) {
      dispatch(changeD2EditToolForm(event, index));
    },
    onAdd(name) {
      dispatch(addArrayD2EditToolForm(name));
    },
    onRemove(name, index) {
      dispatch(removeArrayD2EditToolForm(name, index));
    },
    onRating(formName, value) {
      dispatch(changeFormRating(formName, value));
    }
  })
)(EditD2Tool);
