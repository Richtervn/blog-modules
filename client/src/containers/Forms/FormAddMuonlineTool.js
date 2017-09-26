import AddMuonlineTool from 'components/Forms/AddMuonlineTool';
import { connect } from 'react-redux';

import {
  changeAddMuonlineToolForm,
  addArrayMuonlineToolForm,
  removeArrayMuonlineToolForm,
  changeFormRating
} from 'modules/forms';

export default connect(
  ({ forms }) => ({ formState: forms.AddMuonlineTool }),
  dispatch => ({
    onChange(event, index) {
      dispatch(changeAddMuonlineToolForm(event, index));
    },
    onAdd(name) {
      dispatch(addArrayMuonlineToolForm(name));
    },
    onRemove(name, index) {
      dispatch(removeArrayMuonlineToolForm(name, index));
    },
    onRating(formName, value) {
      dispatch(changeFormRating(formName, value));
    }
  })
)(AddMuonlineTool);
