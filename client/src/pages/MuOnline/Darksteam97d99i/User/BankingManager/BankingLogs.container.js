import { connect } from 'react-redux';
import BankingLogs from './BankingLogs.component';

import { getLogs } from './Banking.module';

export default connect(
  ({ ds9799_banking }) => ({
    logs: ds9799_banking.logs
  }),
  dispatch => ({
    onGetLogs() {
      dispatch(getLogs());
    }
  })
)(BankingLogs);
