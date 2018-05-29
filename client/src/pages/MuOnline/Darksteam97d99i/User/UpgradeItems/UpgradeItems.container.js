import { connect } from 'react-redux';
import UpgradeItems from './UpgradeItems.component';

import { getCharacters, setFocusCharacter } from '../CharacterManager/Character.module';
import { getInventory } from './UpgradeItems.module';

export default connect(
  ({ ds9799_character, ds9799_user, ds9799_upgradeItems }) => ({
    characters: ds9799_character.characters,
    userId: ds9799_user.user.memb___id,
    focusCharacter: ds9799_character.focusCharacter,
    inventories: ds9799_upgradeItems.inventories
  }),
  dispatch => ({
    onGetCharacters(userId) {
      dispatch(getCharacters(userId));
    },
    onSetFocusCharacter(character) {
      dispatch(setFocusCharacter(character));
    },
    onGetInventory(characterName) {
      dispatch(getInventory(characterName));
    }
  })
)(UpgradeItems);
