import { connect } from 'react-redux';
import BankingManager from './BankingManager.component';

import { getCharacters, setFocusCharacter } from '../CharacterManager/Character.module';
import { getGameSetting } from '../../Darksteam97d99i.module';

export default connect(
  ({ ds9799_appControl, ds9799_user, ds9799_character, ds9799_banking }) => ({
    characters: ds9799_character.characters,
    userId: ds9799_user.user.memb___id,
    zen_balance: ds9799_banking.zen_balance,
    loan_money: ds9799_banking.loan_money,
    focusCharacter: ds9799_character.focusCharacter,
    gameSetting: ds9799_appControl.gameSetting
  }),
  dispatch => ({
    onGetCharacters(id) {
      dispatch(getCharacters(id));
    },
    onSetFocusCharacter(name) {
      dispatch(setFocusCharacter(name));
    },
    onGetGameSetting() {
      dispatch(getGameSetting());
    }
  })
)(BankingManager);
