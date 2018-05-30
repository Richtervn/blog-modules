import { connect } from 'react-redux';
import Exchange from './Exchange.component';

import { getExchanges, getExchangeCount, setFocusExchange } from '../LuxuryShop.module';

export default connect(
  ({ ds9799_luxuryShop }) => ({
    exchanges: ds9799_luxuryShop.exchanges
  }),
  dispatch => ({
    onGetExchanges() {
      dispatch(getExchanges());
    },
    onGetExchangeCount(exchangeId) {
      dispatch(getExchangeCount(exchangeId));
    },
    onSetFocusExchange(exchange) {
      dispatch(setFocusExchange(exchange));
    }
  })
)(Exchange);
