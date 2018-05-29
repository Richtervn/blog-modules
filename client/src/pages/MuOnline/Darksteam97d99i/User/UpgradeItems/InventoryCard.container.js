import { connect } from 'react-redux';
import InventoryCard from './InventoryCard.component';

import { setSelectedSlot } from './UpgradeItems.module';

export default connect(
  ({ ds9799_upgradeItems, ds9799_character }) => ({
    inventories: ds9799_upgradeItems.inventories,
    selectedSlot: ds9799_upgradeItems.selectedSlot,
    focusCharacter: ds9799_character.focusCharacter
  }),
  dispatch => ({
    onSelectItem(slot) {
      dispatch(setSelectedSlot(slot));
    }
  })
)(InventoryCard);

