import EditD2Character from 'components/Forms/EditD2Character';
import { connect } from 'react-redux';

import {
  changeD2EditCharacterForm,
  addArrayD2EditCharacterForm,
  removeArrayD2EditCharacterForm,
  changeFormRating,
  changeFormCheck
} from 'modules/forms';

export default connect(
  ({ forms, diabloII }) => ({ formState: forms.AddD2Tool, mods: diabloII.mods }),
  dispatch => ({
    onChange(event, index) {
      dispatch(changeD2EditCharacterForm(event, index));
    },
    onAdd(name) {
      dispatch(addArrayD2EditCharacterForm(name));
    },
    onRemove(name, index) {
      dispatch(removeArrayD2EditCharacterForm(name, index));
    },
    onRating(formName, value) {
      dispatch(changeFormRating(formName, value));
    },
    onChangeCheck(name) {
      dispatch(changeFormCheck(name, 'EditD2Character'));
    }
  })
)(EditD2Character);
