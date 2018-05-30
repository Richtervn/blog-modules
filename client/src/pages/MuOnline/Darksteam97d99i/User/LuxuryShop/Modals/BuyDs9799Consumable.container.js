import { connect } from 'react-redux';
import BuyDs9799Consumable from './BuyDs9799Consumable.component';

import { getCharacters } from '../../CharacterManager/Character.module';
import { buyConsumable } from '../LuxuryShop.module';

export default connect(
  ({ ds9799_luxuryShop, ds9799_character, ds9799_user }) => ({
    consumable: ds9799_luxuryShop.focusConsumable,
    characters: ds9799_character.characters,
    userId: ds9799_user.user.memb___id
  }),
  dispatch => ({
    onGetCharacters(userId) {
      dispatch(getCharacters(userId));
    },
    onBuyConsumable(query) {
      dispatch(buyConsumable(query));
    }
  })
)(BuyDs9799Consumable);
