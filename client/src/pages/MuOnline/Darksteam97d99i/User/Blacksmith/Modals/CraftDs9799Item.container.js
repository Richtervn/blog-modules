import { connect } from 'react-redux';
import CraftDs9799Item from './CraftDs9799Item.component';

import { getCharacters } from '../../CharacterManager/Character.module';
import { craftItem } from '../Blacksmith.module';

export default connect(
  ({ ds9799_blacksmith, ds9799_character, ds9799_user, ds9799_appControl }) => ({
    receipt: ds9799_blacksmith.focusReceipt,
    characters: ds9799_character.characters,
    userId: ds9799_user.user.memb___id,
    countMaterials: ds9799_blacksmith.countMaterials
  }),
  dispatch => ({
    onGetCharacters(userId) {
      dispatch(getCharacters(userId));
    },
    onCraftItem(characterName, receiptId) {
      dispatch(craftItem(characterName, receiptId));
    }
  })
)(CraftDs9799Item);
