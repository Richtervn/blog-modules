import { connect } from 'react-redux';
import Exchange from './Exchange.component';

import { getExchanges } from '../LuxuryShop.module';

export default connect(
  ({ ds9799_luxuryShop }) => ({
    exchanges: ds9799_luxuryShop.exchanges
  }),
  dispatch => ({
    onGetExchanges() {
      dispatch(getExchanges());
    }
  })
)(Exchange);
