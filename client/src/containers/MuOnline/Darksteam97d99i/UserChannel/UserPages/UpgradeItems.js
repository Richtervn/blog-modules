import UpgradeItems from 'components/MuOnline/Darksteam97d99i/UserChannel/UserPages/UpgradeItems';
import { connect } from 'react-redux';

import {
  getCharacters,
  getInventory,
  setFocusCharacter,
  selectInventoryItem,
  upgradeItem
} from 'modules/MuOnline/darksteam97d99i/character';

export default connect(
  ({ ds9799_user, ds9799_character, ds9799_info }) => ({
    user: ds9799_user.user,
    characters: ds9799_character.characters,
    inventories: ds9799_character.inventories,
    focusCharacter: ds9799_character.focusCharacter,
    selectedSlot: ds9799_character.selectedSlot,
    focusItem: ds9799_character.focusItem,
    gameSetting: ds9799_info.gameSetting
  }),
  dispatch => ({
    onGetCharacters(id) {
      dispatch(getCharacters(id));
    },
    onGetInventory(characterName) {
      dispatch(getInventory(characterName));
    },
    onSelectCharacter(character) {
      dispatch(setFocusCharacter(character));
    },
    onSelectItem(item, slot) {
      dispatch(selectInventoryItem(item, slot));
    },
    onUpgradeItem(body) {
      dispatch(upgradeItem(body));
    }
  })
)(UpgradeItems);
