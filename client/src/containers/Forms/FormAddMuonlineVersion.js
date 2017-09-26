import AddMuonlineVersion from 'components/Forms/AddMuonlineVersion';
import { connect } from 'react-redux';

import {
  changeAddMuonlineVersionForm,
  addArrayMuonlineVersionForm,
  removeArrayMuonlineVersionForm,
  changeFormRating
} from 'modules/forms';

export default connect(
  ({ forms }) => ({ formState: forms.AddMuonlineVersion }),
  dispatch => ({
    onChange(event, index) {
      dispatch(changeAddMuonlineVersionForm(event, index));
    },
    onAdd(name) {
      dispatch(addArrayMuonlineVersionForm(name));
    },
    onRemove(name, index) {
      dispatch(removeArrayMuonlineVersionForm(name, index));
    },
    onRating(formName, value) {
      dispatch(changeFormRating(formName, value));
    }
  })
)(AddMuonlineVersion);
