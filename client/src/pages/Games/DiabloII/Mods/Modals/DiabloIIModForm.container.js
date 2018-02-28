import { connect } from 'react-redux';
import DiabloIIModForm from './DiabloIIModForm.component';

import { addMod, editMod } from '../../DiabloII.module';

export default connect(
  ({ diabloII }) => ({
    mod: diabloII.modDetail
  }),
  dispatch => ({
    onAddMod(formBody) {
      dispatch(addMod(formBody));
    },
    onEditMod(formBody) {
      dispatch(editMod(formBody));
    }
  })
)(DiabloIIModForm);
