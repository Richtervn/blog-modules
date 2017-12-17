import AddD2Character from 'components/Forms/AddD2Character';
import { connect } from 'react-redux';

import {
  changeD2AddCharacterForm,
  addArrayD2AddCharacterForm,
  removeArrayD2AddCharacterForm,
  changeFormRating,
  changeFormCheck
} from 'modules/forms';

export default connect(
  ({ forms, diabloII }) => ({ formState: forms.AddD2Tool, mods: diabloII.mods }),
  dispatch => ({
    onChange(event, index) {
      dispatch(changeD2AddCharacterForm(event, index));
    },
    onAdd(name) {
      dispatch(addArrayD2AddCharacterForm(name));
    },
    onRemove(name, index) {
      dispatch(removeArrayD2AddCharacterForm(name, index));
    },
    onRating(formName, value) {
      dispatch(changeFormRating(formName, value));
    },
    onChangeCheck(name) {
      dispatch(changeFormCheck(name, 'AddD2Character'));
    }
  })
)(AddD2Character);
