import { connect } from 'react-redux';
import Blacksmith from './Blacksmith.component';

import { getReceipts, setFocusReceipt, getCountMaterials } from './Blacksmith.module';

export default connect(
  ({ ds9799_blacksmith }) => ({
    receipts: ds9799_blacksmith.receipts
  }),
  dispatch => ({
    onGetReceipts() {
      dispatch(getReceipts());
    },
    onSetFocusReceipt(receipt) {
      dispatch(setFocusReceipt(receipt));
    },
    onGetCountMeterials(receiptId) {
      dispatch(getCountMaterials(receiptId));
    }
  })
)(Blacksmith);
