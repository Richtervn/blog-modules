import { connect } from 'react-redux';
import AccountsManager from './AccountsManager.component';

import { getAccounts } from '../Admin.module';

export default connect(
  ({ ds9799_admin }) => ({
    accounts: ds9799_admin.accounts
  }),
  dispatch => ({
    onGetAccounts() {
      dispatch(getAccounts());
    }
  })
)(AccountsManager);
