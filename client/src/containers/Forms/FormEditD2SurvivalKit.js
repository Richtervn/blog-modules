import EditD2SurvivalKit from 'components/Forms/EditD2SurvivalKit';
import { connect } from 'react-redux';

import {
  changeD2EditSurvivalKitForm,
  addArrayD2EditSurvivalKitForm,
  removeArrayD2EditSurvivalKitForm,
  changeFormRating
} from 'modules/forms';

export default connect(
  ({ forms }) => ({ formState: forms.EditD2SurvivalKit }),
  dispatch => ({
    onChange(event, index) {
      dispatch(changeD2EditSurvivalKitForm(event, index));
    },
    onAdd(name) {
      dispatch(addArrayD2EditSurvivalKitForm(name));
    },
    onRemove(name, index) {
      dispatch(removeArrayD2EditSurvivalKitForm(name, index));
    },
    onRating(formName, value) {
      dispatch(changeFormRating(formName, value));
    }
  })
)(EditD2SurvivalKit);
