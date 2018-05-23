import { connect } from 'react-redux';
import CreditLogs from './CreditLogs.component';

import { getLogs } from './Credit.module';

export default connect(
  ({ ds9799_credit }) => ({
    logs: ds9799_credit.logs
  }),
  dispatch => ({
    onGetLogs() {
      dispatch(getLogs());
    }
  })
)(CreditLogs);
