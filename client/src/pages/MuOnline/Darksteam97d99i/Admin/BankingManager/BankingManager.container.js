import { connect } from 'react-redux';
import BankingManager from './BankingManager.component';

import { getBankings } from '../Admin.module';

export default connect(
  ({ ds9799_admin }) => ({
    bankings: ds9799_admin.bankings
  }),
  dispatch => ({
    onGetBankings() {
      dispatch(getBankings());
    }
  })
)(BankingManager);
