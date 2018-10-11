import { connect } from 'react-redux';
import InventoryManager from './InventoryManager.component';

import { getCharacters, getInventory, updateInventory } from '../Admin.module';

export default connect(
  ({ ds9799_admin }) => ({
    characters: ds9799_admin.characters
  }),
  dispatch => ({
    onGetCharacters() {
      dispatch(getCharacters());
    },
    onGetInventory(characterName) {
      dispatch(getInventory(characterName));
    },
    onUpdateInventory(formBody) {
      dispatch(updateInventory(formBody));
    }
  })
)(InventoryManager);
