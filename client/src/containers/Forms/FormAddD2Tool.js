import AddD2Tool from 'components/Forms/AddD2Tool';
import { connect } from 'react-redux';

import {
  changeD2AddToolForm,
  addArrayD2AddToolForm,
  removeArrayD2AddToolForm,
  changeFormRating
} from 'modules/forms';

export default connect(
  ({ forms }) => ({ formState: forms.AddD2Tool }),
  dispatch => ({
    onChange(event, index) {
      dispatch(changeD2AddToolForm(event, index));
    },
    onAdd(name) {
      dispatch(addArrayD2AddToolForm(name));
    },
    onRemove(name, index) {
      dispatch(removeArrayD2AddToolForm(name, index));
    },
    onRating(formName, value) {
      dispatch(changeFormRating(formName, value));
    }
  })
)(AddD2Tool);
