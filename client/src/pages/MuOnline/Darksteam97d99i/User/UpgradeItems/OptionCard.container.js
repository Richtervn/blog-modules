import { connect } from 'react-redux';
import OptionCard from './OptionCard.component';

import { upgradeItem } from './UpgradeItems.module';

export default connect(
  ({ ds9799_upgradeItems, ds9799_character, ds9799_appControl, ds9799_user }) => ({
    item: ds9799_upgradeItems.inventories[ds9799_character.focusCharacter][ds9799_upgradeItems.selectedSlot],
    gameSetting: ds9799_appControl.gameSetting,
    userId: ds9799_user.user.memb___id,
    characterName: ds9799_character.focusCharacter,
    selectedSlot: ds9799_upgradeItems.selectedSlot
  }),
  dispatch => ({
    onUpgradeItem(formBody) {
      dispatch(upgradeItem(formBody));
    }
  })
)(OptionCard);
