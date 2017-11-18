import BankingManager from 'components/MuOnline/Darksteam97d99i/AdminChannel/AdminPages/BankingManager';
import { connect } from 'react-redux';

import { getBankings, editBanking } from 'modules/MuOnline/darksteam97d99i/admin';

export default connect(
	({ ds9799_admin }) => ({
		bankings: ds9799_admin.bankings
	}),
	dispatch => ({
		onGetBankings() {
			dispatch(getBankings());
		},
		onEditBanking(formBody) {
			dispatch(editBanking(formBody));
		}
	})
)(BankingManager);
