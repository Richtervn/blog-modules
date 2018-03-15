import { connect } from 'react-redux';
import AccountsManager from './AccountsManager.component';

import { getAccounts, getAccountDetail, clearAccountDetail, searchAccounts } from '../Admin.module';

export default connect(
  ({ ds9799_admin }) => ({
    accounts: ds9799_admin.accounts,
    focusAccount: ds9799_admin.accountDetail.memb___id
  }),
  dispatch => ({
    onGetAccounts() {
      dispatch(getAccounts());
    },
    onGetAccountDetail(id) {
      dispatch(getAccountDetail(id));
    },
    onClearAccountDetail() {
      dispatch(clearAccountDetail());
    },
    onSearch(value) {
      dispatch(searchAccounts({ memb___id: value }));
    }
  })
)(AccountsManager);
