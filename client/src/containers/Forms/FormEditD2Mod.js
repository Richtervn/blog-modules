import EditD2Mod from 'components/Forms/EditD2Mod';
import { connect } from 'react-redux';

import { changeD2EditModForm, addArrayD2EditModForm, removeArrayD2EditModForm, changeFormRating } from 'modules/forms';

export default connect(
  ({ forms, diabloII }) => ({ formState: forms.EditD2Mod, versions: diabloII.versions }),
  dispatch => ({
    onChange(event, index) {
      dispatch(changeD2EditModForm(event, index));
    },
    onAdd(name) {
      dispatch(addArrayD2EditModForm(name));
    },
    onRemove(name, index) {
      dispatch(removeArrayD2EditModForm(name, index));
    },
    onRating(formName, value) {
      dispatch(changeFormRating(formName, value));
    }
  })
)(EditD2Mod);

