import { connect } from 'react-redux';
import BankingFeature from './BankingFeature.component';

import { loan, deposit, transfer, withdraw, sellCredit, buyCredit } from './Banking.module';

export default connect(
  ({ ds9799_character }) => ({
    focusCharacter: ds9799_character.focusCharacter
  }),
  dispatch => ({
    onLoan(query) {
      dispatch(loan(query));
    },
    onDeposit(query) {
      dispatch(deposit(query));
    },
    onTransfer(query) {
      dispatch(transfer(query));
    },
    onWithdraw(query) {
      dispatch(withdraw(query));
    },
    onSellCredit(query) {
      dispatch(sellCredit(query));
    },
    onBuyCredit(query) {
      dispatch(buyCredit(query));
    }
  })
)(BankingFeature);
