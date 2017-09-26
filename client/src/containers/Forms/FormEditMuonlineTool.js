import EditMuonlineTool from 'components/Forms/EditMuonlineTool';
import { connect } from 'react-redux';

import {
  changeEditMuonlineToolForm,
  addArrayMuonlineEditToolForm,
  removeArrayMuonlineEditToolForm,
  changeFormRating
} from 'modules/forms';

export default connect(
  ({ forms }) => ({ formState: forms.EditMuonlineTool }),
  dispatch => ({
    onChange(event, index) {
      dispatch(changeEditMuonlineToolForm(event, index));
    },
    onAdd(name) {
      dispatch(addArrayMuonlineEditToolForm(name));
    },
    onRemove(name, index) {
      dispatch(removeArrayMuonlineEditToolForm(name, index));
    },
    onRating(formName, value) {
      dispatch(changeFormRating(formName, value));
    }
  })
)(EditMuonlineTool);
