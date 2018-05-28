import { connect } from 'react-redux';
import Exchange from './Exchange.component';

import { getExchanges, setFocusLxExchange } from '../../Admin.module';

export default connect(
  ({ ds9799_admin }) => ({
    exchanges: ds9799_admin.exchanges
  }),
  dispatch => ({
    onGetExchanges() {
      dispatch(getExchanges());
    },
    onSetFocusExchange(pack) {
      dispatch(setFocusLxExchange(pack));
    }
  })
)(Exchange);
