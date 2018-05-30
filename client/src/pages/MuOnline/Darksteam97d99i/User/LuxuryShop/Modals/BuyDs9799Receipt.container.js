import { connect } from 'react-redux';
import BuyDs9799Receipt from './BuyDs9799Receipt.component';

import { buyReceipt } from '../LuxuryShop.module';

export default connect(
  ({ ds9799_luxuryShop }) => ({
    receipt: ds9799_luxuryShop.focusReceipt
  }),
  dispatch => ({
    onBuyReceipt(receiptId) {
      dispatch(buyReceipt(receiptId));
    }
  })
)(BuyDs9799Receipt);
