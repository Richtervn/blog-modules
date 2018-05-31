import { connect } from 'react-redux';
import SellDs9799Receipt from './SellDs9799Receipt.component';

import { sellReceipt } from '../Blacksmith.module';
import { getGameSetting } from '../../../Darksteam97d99i.module';

export default connect(
  ({ ds9799_blacksmith, ds9799_appControl }) => ({
    receipt: ds9799_blacksmith.focusReceipt,
    gameSetting: ds9799_appControl.gameSetting
  }),
  dispatch => ({
    onSellReceipt(receiptId) {
      dispatch(sellReceipt(receiptId));
    },
    onGetGameSetting() {
      dispatch(getGameSetting());
    }
  })
)(SellDs9799Receipt);
