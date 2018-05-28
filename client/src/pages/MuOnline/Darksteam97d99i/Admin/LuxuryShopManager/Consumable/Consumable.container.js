import { connect } from 'react-redux';
import Consumable from './Consumable.component';

import { getConsumables, setFocusLxConsumable } from '../../Admin.module';

export default connect(
  ({ ds9799_admin }) => ({
    consumables: ds9799_admin.consumables
  }),
  dispatch => ({
    onGetConsumables() {
      dispatch(getConsumables());
    },
    onSetFocusConsumable(pack) {
      dispatch(setFocusLxConsumable(pack));
    }
  })
)(Consumable);
