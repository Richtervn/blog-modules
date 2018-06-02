import { connect } from 'react-redux';
import BankingLogs from './BankingLogs.component';

import { getBankingLogs } from '../Server.module';

export default connect(
  ({ ds9799_server }) => ({
    logs: ds9799_server.bankingLogs
  }),
  dispatch => ({
    onGetLogs() {
      dispatch(getBankingLogs());
    }
  })
)(BankingLogs);
