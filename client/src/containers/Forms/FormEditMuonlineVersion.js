import EditMuonlineVersion from 'components/Forms/EditMuonlineVersion';
import { connect } from 'react-redux';

import {
  changeEditMuonlineVersionForm,
  addArrayMuonlineEditVersionForm,
  removeArrayMuonlineEditVersionForm,
  changeFormRating
} from 'modules/forms';

export default connect(
  ({ forms }) => ({ formState: forms.EditMuonlineVersion }),
  dispatch => ({
    onChange(event, index) {
      dispatch(changeEditMuonlineVersionForm(event, index));
    },
    onAdd(name) {
      dispatch(addArrayMuonlineEditVersionForm(name));
    },
    onRemove(name, index) {
      dispatch(removeArrayMuonlineEditVersionForm(name, index));
    },
    onRating(formName, value) {
      dispatch(changeFormRating(formName, value));
    }
  })
)(EditMuonlineVersion);
