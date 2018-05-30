import { connect } from 'react-redux';
import Receipt from './Receipt.component';

import { getReceipts, setFocusLxReceipt } from '../../Admin.module';

export default connect(
  ({ ds9799_admin }) => ({
    receipts: ds9799_admin.receipts
  }),
  dispatch => ({
    onGetReceipts() {
      dispatch(getReceipts());
    },
    onSetFocusReceipt(receipt) {
      dispatch(setFocusLxReceipt(receipt));
    }
  })
)(Receipt);
