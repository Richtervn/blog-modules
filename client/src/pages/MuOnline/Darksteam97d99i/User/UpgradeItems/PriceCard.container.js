import { connect } from 'react-redux';
import PriceCard from './PriceCard.component';

import { getGameSetting } from '../../Darksteam97d99i.module';

export default connect(
  ({ ds9799_appControl, ds9799_upgradeItems, ds9799_character }) => ({
    item: ds9799_upgradeItems.inventories[ds9799_character.focusCharacter][ds9799_upgradeItems.selectedSlot],
    gameSetting: ds9799_appControl.gameSetting
  }),
  dispatch => ({
    onGetGameSetting() {
      dispatch(getGameSetting());
    }
  })
)(PriceCard);
