import { connect } from 'react-redux';
import Receipt from './Receipt.component';

import { getReceipts } from '../../Admin.module';

export default connect(
  ({ ds9799_admin }) => ({
    receipts: ds9799_admin.receipts
  }),
  dispatch => ({
    onGetReceipts() {
      dispatch(getReceipts());
    }
  })
)(Receipt);
