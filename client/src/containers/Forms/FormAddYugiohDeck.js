import AddYugiohDeck from 'components/Forms/AddYugiohDeck';
import { connect } from 'react-redux';

import {
  changeAddYugiohDeckForm,
  addArrayYugiohDeckForm,
  removeArrayYugiohDeckForm,
  changeFormRating
} from 'modules/forms';

export default connect(
  ({ forms }) => ({ formState: forms.AddYugiohDeck }),
  dispatch => ({
    onChange(event, index) {
      dispatch(changeAddYugiohDeckForm(event, index));
    },
    onAdd(name) {
      dispatch(addArrayYugiohDeckForm(name));
    },
    onRemove(name, index) {
      dispatch(removeArrayYugiohDeckForm(name, index));
    },
    onRating(formName, value) {
      dispatch(changeFormRating(formName, value));
    }
  })
)(AddYugiohDeck);
