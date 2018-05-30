import { connect } from 'react-redux';
import TradeDs9799Exchange from './TradeDs9799Exchange.component';

import { getCharacters } from '../../CharacterManager/Character.module';
import { tradeExchange } from '../LuxuryShop.module';

export default connect(
  ({ ds9799_luxuryShop, ds9799_character, ds9799_user }) => ({
    exchangeCount: ds9799_luxuryShop.exchangeCount,
    exchange: ds9799_luxuryShop.focusExchange,
    characters: ds9799_character.characters,
    userId: ds9799_user.user.memb___id
  }),
  dispatch => ({
    onGetCharacters(userId) {
      dispatch(getCharacters(userId));
    },
    onTradeExchange(query) {
      dispatch(tradeExchange(query));
    }
  })
)(TradeDs9799Exchange);
