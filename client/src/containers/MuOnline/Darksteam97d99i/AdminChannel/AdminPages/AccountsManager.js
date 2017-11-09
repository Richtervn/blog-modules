import AccountsManager from 'components/MuOnline/Darksteam97d99i/AdminChannel/AdminPages/AccountsManager';
import { connect } from 'react-redux';

import {
	getAccounts,
	setFocusAccount,
	editAccount,
	deleteAccount,
	addAccount
} from 'modules/MuOnline/darksteam97d99i/admin';

export default connect(
	({ ds9799_admin }) => ({
		accounts: ds9799_admin.accounts,
		focusAccount: ds9799_admin.focusAccount
	}),
	dispatch => ({
		onGetAccounts(query) {
			dispatch(getAccounts(query));
		},
		onSetFocusAccount(account) {
			dispatch(setFocusAccount(account));
		},
		onEditAccount(formBody) {
			dispatch(editAccount(formBody));
		},
		onDeleteAccount(id) {
			dispatch(deleteAccount(id));
		},
		onAddAccount(formBody) {
			dispatch(addAccount(formBody));
		}
	})
)(AccountsManager);
