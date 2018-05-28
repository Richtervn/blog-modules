import { connect } from 'react-redux';
import Receipt from './Receipt.component';

import { getReceipts } from '../LuxuryShop.module';

export default connect(
  ({ ds9799_luxuryShop }) => ({
    receipts: ds9799_luxuryShop.receipts
  }),
  dispatch => ({
    onGetReceipts() {
      dispatch(getReceipts());
    }
  })
)(Receipt);
