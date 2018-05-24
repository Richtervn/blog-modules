import { connect } from 'react-redux';
import BankingManager from './BankingManager.component';

import { getBankings, addBanking, editBanking, deleteBanking } from '../Admin.module';

export default connect(
  ({ ds9799_admin }) => ({
    bankings: ds9799_admin.bankings
  }),
  dispatch => ({
    onGetBankings() {
      dispatch(getBankings());
    },
    onAddBanking(formBody) {
      dispatch(addBanking(formBody));
    },
    onEditBanking(formBody) {
      dispatch(editBanking(formBody));
    },
    onDeleteBanking(id) {
      dispatch(deleteBanking(id));
    }
  })
)(BankingManager);
