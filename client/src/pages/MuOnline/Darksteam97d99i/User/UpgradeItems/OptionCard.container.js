import { connect } from 'react-redux';
import OptionCard from './OptionCard.component';

export default connect(({ ds9799_upgradeItems, ds9799_character, ds9799_appControl }) => ({
  item: ds9799_upgradeItems.inventories[ds9799_character.focusCharacter][ds9799_upgradeItems.selectedSlot],
  gameSetting: ds9799_appControl.gameSetting
}))(OptionCard);
