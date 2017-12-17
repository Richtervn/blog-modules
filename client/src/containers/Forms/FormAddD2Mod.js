import AddD2Mod from 'components/Forms/AddD2Mod';
import { connect } from 'react-redux';

import { changeD2AddModForm, addArrayD2AddModForm, removeArrayD2AddModForm, changeFormRating } from 'modules/forms';

export default connect(
  ({ forms, diabloII }) => ({ formState: forms.AddD2Tool, versions: diabloII.versions }),
  dispatch => ({
    onChange(event, index) {
      dispatch(changeD2AddModForm(event, index));
    },
    onAdd(name) {
      dispatch(addArrayD2AddModForm(name));
    },
    onRemove(name, index) {
      dispatch(removeArrayD2AddModForm(name, index));
    },
    onRating(formName, value) {
      dispatch(changeFormRating(formName, value));
    }
  })
)(AddD2Mod);
