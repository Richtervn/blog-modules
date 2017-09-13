import EditYugiohDeck from 'components/Forms/EditYugiohDeck';
import { connect } from 'react-redux';

import {
  changeEditYugiohDeckForm,
  addArrayYugiohEditDeckForm,
  removeArrayYugiohEditDeckForm,
  changeFormRating
} from 'modules/forms';

export default connect(
  ({ forms }) => ({ formState: forms.EditYugiohDeck }),
  dispatch => ({
    onChange(event, index) {
      dispatch(changeEditYugiohDeckForm(event, index));
    },
    onAdd(name) {
      dispatch(addArrayYugiohEditDeckForm(name));
    },
    onRemove(name, index) {
      dispatch(removeArrayYugiohEditDeckForm(name, index));
    },
    onRating(formName, value) {
      dispatch(changeFormRating(formName, value));
    }
  })
)(EditYugiohDeck);
