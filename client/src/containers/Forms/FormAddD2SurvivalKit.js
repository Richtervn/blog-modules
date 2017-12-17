import AddD2SurvivalKit from 'components/Forms/AddD2SurvivalKit';
import { connect } from 'react-redux';

import {
  changeD2AddSurvivalKitForm,
  addArrayD2AddSurvivalKitForm,
  removeArrayD2AddSurvivalKitForm,
  changeFormRating
} from 'modules/forms';

export default connect(
  ({ forms }) => ({ formState: forms.AddD2SurvivalKit }),
  dispatch => ({
    onChange(event, index) {
      dispatch(changeD2AddSurvivalKitForm(event, index));
    },
    onAdd(name) {
      dispatch(addArrayD2AddSurvivalKitForm(name));
    },
    onRemove(name, index) {
      dispatch(removeArrayD2AddSurvivalKitForm(name, index));
    },
    onRating(formName, value) {
      dispatch(changeFormRating(formName, value));
    }
  })
)(AddD2SurvivalKit);
