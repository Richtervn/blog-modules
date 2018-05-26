import { connect } from 'react-redux';
import BuyDs9799WebShopPackage from './BuyDs9799WebShopPackage.component';

import { getCharacters } from '../../CharacterManager/Character.module';
import { buyWebShopPackage } from '../WebShop.module';

export default connect(
  ({ ds9799_webShop, ds9799_character, ds9799_user }) => ({
    focusPackage: ds9799_webShop.focusPackage,
    characters: ds9799_character.characters,
    userId: ds9799_user.user.memb___id
  }),
  dispatch => ({
    onGetCharacters(userId) {
      dispatch(getCharacters(userId));
    },
    onBuyPackage(packageId, characterName) {
      dispatch(buyWebShopPackage(packageId, characterName));
    }
  })
)(BuyDs9799WebShopPackage);
