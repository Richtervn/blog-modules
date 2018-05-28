import { connect } from 'react-redux';
import Consumable from './Consumable.component';

import { getConsumables } from '../LuxuryShop.module';

export default connect(
  ({ ds9799_luxuryShop }) => ({
    consumables: ds9799_luxuryShop.consumables
  }),
  dispatch => ({
    onGetConsumables() {
      dispatch(getConsumables());
    }
  })
)(Consumable);
