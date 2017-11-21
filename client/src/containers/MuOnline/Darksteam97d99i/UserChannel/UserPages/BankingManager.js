import BankingManager from 'components/MuOnline/Darksteam97d99i/UserChannel/UserPages/BankingManager';
import { connect } from 'react-redux';

import {
  setFocusCharacter,
  getCharacters,
  clearBankingError,
  deposit,
  loan,
  withdraw,
  transfer,
  buyCredit
} from 'modules/MuOnline/darksteam97d99i/character';

export default connect(
  ({ ds9799_user, ds9799_info, ds9799_character }) => ({
    user: ds9799_user.user,
    characters: ds9799_character.characters,
    focusCharacter: ds9799_character.focusCharacter,
    gameSetting: ds9799_info.gameSetting,
    errorBanking: ds9799_character.errorBanking
  }),
  dispatch => ({
    onSetFocusCharacter(character) {
      dispatch(setFocusCharacter(character));
    },
    onGetCharacters(id) {
      dispatch(getCharacters(id));
    },
    onClearBankingError() {
      dispatch(clearBankingError());
    },
    onDeposit(query){
      dispatch(deposit(query))
    },
    onLoan(query){
      dispatch(loan(query))
    },
    onWithdraw(query){
      dispatch(withdraw(query))
    },
    onTransfer(query){
      dispatch(transfer(query))
    },
    onBuyCredit(query){
      dispatch(buyCredit(query))
    }
  })
)(BankingManager);
