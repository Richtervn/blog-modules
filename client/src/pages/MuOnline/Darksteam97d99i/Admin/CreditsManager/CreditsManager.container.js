import { connect } from 'react-redux';
import CreditsManager from './CreditsManager.component';

import { getCredits, addCredit, editCredit, deleteCredit } from '../Admin.module';

export default connect(
  ({ ds9799_admin }) => ({
    credits: ds9799_admin.credits
  }),
  dispatch => ({
    onGetCredits() {
      dispatch(getCredits());
    },
    onAddCredit(formBody) {
      dispatch(addCredit(formBody));
    },
    onEditCredit(formBody) {
      dispatch(editCredit(formBody));
    },
    onDeleteCredit(id) {
      dispatch(deleteCredit(id));
    }
  })
)(CreditsManager);
