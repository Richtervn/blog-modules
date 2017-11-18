import CreditManager from 'components/MuOnline/Darksteam97d99i/AdminChannel/AdminPages/CreditManager';
import { connect } from 'react-redux';

import { getCredits, editCredit } from 'modules/MuOnline/darksteam97d99i/admin';

export default connect(
	({ ds9799_admin }) => ({
		credits: ds9799_admin.credits
	}),
	dispatch => ({
		onGetCredits() {
			dispatch(getCredits());
		},
		onEditCredit(formBody) {
			dispatch(editCredit(formBody));
		}
	})
)(CreditManager);
