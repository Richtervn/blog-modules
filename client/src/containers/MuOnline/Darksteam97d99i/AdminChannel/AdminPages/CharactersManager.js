import CharactersManager from 'components/MuOnline/Darksteam97d99i/AdminChannel/AdminPages/CharactersManager';
import { connect } from 'react-redux';

import {
	getCharacters,
	setFocusCharacter,
	editCharacter,
	deleteCharacter,
	addCharacter,
	getAccounts
} from 'modules/MuOnline/darksteam97d99i/admin';

export default connect(
	({ ds9799_admin }) => ({
		accounts: ds9799_admin.accounts,
		characters: ds9799_admin.characters,
		focusCharacter: ds9799_admin.focusCharacter
	}),
	dispatch => ({
		onGetCharacters(query) {
			dispatch(getCharacters(query));
		},
		onGetAccounts(query) {
			dispatch(getAccounts(query));
		},
		onSetFocusCharacter(character) {
			dispatch(setFocusCharacter(character));
		},
		onEditCharacter(formBody) {
			dispatch(editCharacter(formBody));
		},
		onDeleteCharacter(id) {
			dispatch(deleteCharacter(id));
		},
		onAddCharacter(formBody) {
			dispatch(addCharacter(formBody));
		}
	})
)(CharactersManager);
