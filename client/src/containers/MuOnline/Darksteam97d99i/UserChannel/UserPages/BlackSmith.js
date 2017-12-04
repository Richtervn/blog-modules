import BlackSmith from 'components/MuOnline/Darksteam97d99i/UserChannel/UserPages/BlackSmith';
import { connect } from 'react-redux';

import { getCharacters } from 'modules/MuOnline/darksteam97d99i/character';
import {
  getReceipt,
  getCountMaterials,
  getUserReceipts
} from 'modules/MuOnline/darksteam97d99i/luxuryShop';

export default connect(
  ({ ds9799_user, ds9799_character, ds9799_luxuryShop }) => ({
    user: ds9799_user.user,
    characters: ds9799_character.characters,
    userReceipts: ds9799_luxuryShop.userReceipts,
    receipts: ds9799_luxuryShop.receipts,
    countMaterials: ds9799_luxuryShop.countMaterials
  }),
  dispatch => ({
    onGetCharacters(id) {
      dispatch(getCharacters(id));
    },
    onGetReceipt() {
      dispatch(getReceipt());
    },
    onGetCountMaterials(memb___id, receiptId) {
      dispatch(getCountMaterials(memb___id, receiptId));
    },
    onGetUserReceipts(memb___id) {
      dispatch(getUserReceipts(memb___id));
    }
  })
)(BlackSmith);
